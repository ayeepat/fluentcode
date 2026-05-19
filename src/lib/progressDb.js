// src/lib/progressDb.js
import { localProgressDb } from "./localProgressDb";

const FREE_DAILY_LIMIT = 10;

function getTodayStr() {
  const d = new Date();
  const utcYear = d.getUTCFullYear();
  const utcMonth = String(d.getUTCMonth() + 1).padStart(2, "0");
  const utcDate = String(d.getUTCDate()).padStart(2, "0");
  return `${utcYear}-${utcMonth}-${utcDate}`;
}

function getYesterdayStr() {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - 1);
  const utcYear = d.getUTCFullYear();
  const utcMonth = String(d.getUTCMonth() + 1).padStart(2, "0");
  const utcDate = String(d.getUTCDate()).padStart(2, "0");
  return `${utcYear}-${utcMonth}-${utcDate}`;
}

function computeNewStreak(lastStudyDate, currentStreak) {
  const today = getTodayStr();
  const yesterday = getYesterdayStr();
  if (lastStudyDate === today) return currentStreak;
  if (lastStudyDate === yesterday) return currentStreak + 1;
  return 1;
}

/**
 * Read the user's current daily AI count from the DB row.
 */
async function readAiCount(supabaseClient, clerkUserId) {
  const today = getTodayStr();

  const { data, error } = await supabaseClient
    .from("user_progress")
    .select("daily_ai_count, last_ai_date")
    .eq("clerk_user_id", clerkUserId)
    .single();

  if (error) {
    console.error("Failed to read AI count:", error);
    return { currentCount: 0, today };
  }

  const lastDate = data?.last_ai_date;
  const currentCount =
    lastDate === today ? data?.daily_ai_count || 0 : 0;

  return { currentCount, today };
}

// ---------------------------------------------------------------------------
// V1 → V2 migration helpers
// ---------------------------------------------------------------------------

/**
 * All Python V1 lesson IDs in curriculum order.
 * Used to count how many V1 lessons a migrated user had completed,
 * so we can auto-unlock the equivalent number of V2 lessons.
 *
 * This list is static and will never change (V1 is frozen).
 */
const PYTHON_V1_LESSON_IDS = [
  "python-phase0-m1-l1",
  "python-phase1-m1-l1",
  "python-phase1-m1-l2",
  "python-phase1-m1-l3",
  "python-phase1-m1-l4",
  "python-phase1-m1-l5",
  "python-phase1-m1-l6",
  "python-phase1-m1-l7",
  "python-phase1-m1-l8",
  "python-phase1-m1-l9",
  "python-phase1-m1-l10",
  "python-phase1-m2-l1",
  "python-phase1-m2-l2",
  "python-phase1-m2-l3",
  "python-phase1-m2-l4",
  "python-phase1-m2-l5",
  "python-phase1-m2-l6",
  "python-phase1-m2-l7",
  "python-phase1-m2-l8",
  "python-phase1-m2-l9",
  "python-phase1-m2-l10",
  "python-phase2-m1-l1",
  "python-phase2-m1-l2",
  "python-phase2-m1-l3",
  "python-phase2-m1-l4",
  "python-phase2-m1-l5",
  "python-phase2-m1-l6",
  "python-phase2-m1-l7",
  "python-phase2-m1-l8",
  "python-phase2-m1-l9",
  "python-phase2-m1-l10",
  "python-phase3-m1-l1",
  "python-phase3-m1-l2",
  "python-phase3-m1-l3",
  "python-phase3-m1-l4",
  "python-phase3-m1-l5",
  "python-phase3-m1-l6",
  "python-phase3-m1-l7",
  "python-phase3-m1-l8",
  "python-phase3-m1-l9",
  "python-phase3-m1-l10",
  "python-phase3-m2-l1",
  "python-phase3-m2-l2",
  "python-phase3-m2-l3",
];

const PYTHON_V1_ID_SET = new Set(PYTHON_V1_LESSON_IDS);

/**
 * Count how many V1 Python lessons appear in a completed_lessons array.
 *
 * @param {string[]} completedLessons
 * @returns {number}
 */
export function countV1PythonCompletions(completedLessons) {
  if (!completedLessons || !Array.isArray(completedLessons)) return 0;
  return completedLessons.filter((id) => PYTHON_V1_ID_SET.has(id)).length;
}

// ---------------------------------------------------------------------------

export const progressDb = {
  // ─────────────────────────────────────────────────────────────────────
  // Core progress helpers
  // ─────────────────────────────────────────────────────────────────────

  async getProgress(supabaseClient, clerkUserId, email) {
    const { data, error } = await supabaseClient
      .from("user_progress")
      .select("*")
      .eq("clerk_user_id", clerkUserId)
      .single();

    if (error && error.code === "PGRST116") {
      return this.createProgress(supabaseClient, clerkUserId, email);
    }

    if (error) {
      console.error("Failed to get progress:", error);
      return null;
    }

    // Fix stale streak on load
    if (data && data.last_study_date) {
      const today = getTodayStr();
      const yesterday = getYesterdayStr();
      if (
        data.last_study_date !== today &&
        data.last_study_date !== yesterday
      ) {
        if (data.streak_days > 0) {
          const { data: fixed } = await supabaseClient
            .from("user_progress")
            .update({ streak_days: 0, updated_at: new Date().toISOString() })
            .eq("clerk_user_id", clerkUserId)
            .select()
            .single();
          return fixed || data;
        }
      }
    }

    const lang = data.language || "python";
    const version =
      data.curriculum_version || (lang === "python" ? 2 : 1);

    // Attach V1 completion count so the UI can use it for unlocking
    const v1PythonCount = countV1PythonCompletions(data.completed_lessons);

    return {
      ...data,
      curriculum_version: version,
      v1_python_completed_count: v1PythonCount,
    };
  },

  async createProgress(supabaseClient, clerkUserId, email) {
    const { data, error } = await supabaseClient
      .from("user_progress")
      .insert({
        clerk_user_id: clerkUserId,
        email,
        language: "python",
        completed_lessons: [],
        completed_quizzes: [],
        streak_days: 0,
        last_study_date: null,
        total_exercises: 0,
        correct_exercises: 0,
        mistake_patterns: [],
        daily_ai_count: 0,
        last_ai_date: null,
        curriculum_version: 2,
      })
      .select()
      .single();

    if (error) {
      console.error("Failed to create progress:", error);
      return null;
    }

    return { ...data, v1_python_completed_count: 0 };
  },

  async updateProgress(supabaseClient, clerkUserId, updates) {
    const { data, error } = await supabaseClient
      .from("user_progress")
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq("clerk_user_id", clerkUserId)
      .select()
      .single();

    if (error) {
      console.error("Failed to update progress:", error);
      return null;
    }

    return data;
  },

  async completeLesson(supabaseClient, clerkUserId, lessonId, extraUpdates = {}) {
    const { data, error } = await supabaseClient
      .from("user_progress")
      .select("completed_lessons, streak_days, last_study_date")
      .eq("clerk_user_id", clerkUserId)
      .single();

    if (error) {
      console.error("Failed to fetch progress for lesson completion:", error);
      return null;
    }

    const completed = data.completed_lessons || [];
    const alreadyDone = completed.includes(lessonId);
    const newCompleted = alreadyDone ? completed : [...completed, lessonId];

    const newStreak = computeNewStreak(
      data.last_study_date,
      data.streak_days || 0
    );
    const today = getTodayStr();

    const updates = {
      completed_lessons: newCompleted,
      streak_days: newStreak,
      last_study_date: today,
      ...extraUpdates,
      updated_at: new Date().toISOString(),
    };

    const { data: updated, error: updateError } = await supabaseClient
      .from("user_progress")
      .update(updates)
      .eq("clerk_user_id", clerkUserId)
      .select()
      .single();

    if (updateError) {
      console.error("Failed to complete lesson:", updateError);
      return null;
    }

    // Recompute the V1 count on the returned object
    const v1Count = countV1PythonCompletions(updated.completed_lessons);
    return { ...updated, v1_python_completed_count: v1Count };
  },

  async completeQuiz(supabaseClient, clerkUserId, lessonId) {
    const { data, error } = await supabaseClient
      .from("user_progress")
      .select("completed_quizzes, streak_days, last_study_date")
      .eq("clerk_user_id", clerkUserId)
      .single();

    if (error) {
      console.error("Failed to fetch progress for quiz completion:", error);
      return null;
    }

    const completed = data.completed_quizzes || [];
    const alreadyDone = completed.includes(lessonId);
    const newCompleted = alreadyDone ? completed : [...completed, lessonId];

    const newStreak = computeNewStreak(
      data.last_study_date,
      data.streak_days || 0
    );
    const today = getTodayStr();

    const updates = {
      completed_quizzes: newCompleted,
      streak_days: newStreak,
      last_study_date: today,
      updated_at: new Date().toISOString(),
    };

    const { data: updated, error: updateError } = await supabaseClient
      .from("user_progress")
      .update(updates)
      .eq("clerk_user_id", clerkUserId)
      .select()
      .single();

    if (updateError) {
      console.error("Failed to complete quiz:", updateError);
      return null;
    }

    return updated;
  },

  async syncGuestProgress(supabaseClient, clerkUserId, email) {
    if (!localProgressDb.hasProgress()) return null;

    const guestData = localProgressDb.getProgress();
    const serverProgress = await this.getProgress(
      supabaseClient,
      clerkUserId,
      email
    );
    if (!serverProgress) return null;

    const mergedLessons = [
      ...new Set([
        ...(serverProgress.completed_lessons || []),
        ...(guestData.completed_lessons || []),
      ]),
    ];

    const mergedQuizzes = [
      ...new Set([
        ...(serverProgress.completed_quizzes || []),
        ...(guestData.completed_quizzes || []),
      ]),
    ];

    const mergedMistakes = [
      ...new Set([
        ...(serverProgress.mistake_patterns || []),
        ...(guestData.mistake_patterns || []),
      ]),
    ].slice(-5);

    const updates = {
      completed_lessons: mergedLessons,
      completed_quizzes: mergedQuizzes,
      total_exercises:
        (serverProgress.total_exercises || 0) +
        (guestData.total_exercises || 0),
      correct_exercises:
        (serverProgress.correct_exercises || 0) +
        (guestData.correct_exercises || 0),
      mistake_patterns: mergedMistakes,
    };

    const result = await this.updateProgress(
      supabaseClient,
      clerkUserId,
      updates
    );

    if (result) {
      localProgressDb.clearProgress();
      console.log("Guest progress synced successfully");
    }

    return result;
  },

  async trackEvent(supabaseClient, eventName, data = {}) {
    try {
      await supabaseClient.from("analytics_events").insert({
        event_name: eventName,
        lesson_id: data.lessonId || null,
        language: data.language || null,
        clerk_user_id: data.userId || null,
        is_guest: data.isGuest || false,
        metadata: data.metadata || {},
      });
    } catch (err) {
      console.error("Analytics error:", err);
    }
  },

  // ─────────────────────────────────────────────────────────────────────
  // AI quota helpers
  // ─────────────────────────────────────────────────────────────────────

  async checkAiLimit(supabaseClient, clerkUserId, isPro) {
    if (isPro) return { allowed: true, remaining: null };
    const { currentCount } = await readAiCount(supabaseClient, clerkUserId);
    if (currentCount >= FREE_DAILY_LIMIT) {
      return { allowed: false, remaining: 0 };
    }
    return { allowed: true, remaining: FREE_DAILY_LIMIT - currentCount };
  },

  async incrementAiCount(supabaseClient, clerkUserId, isPro) {
    if (isPro) return { allowed: true, remaining: null };
    const { currentCount, today } = await readAiCount(
      supabaseClient,
      clerkUserId
    );
    if (currentCount >= FREE_DAILY_LIMIT) {
      return { allowed: false, remaining: 0 };
    }
    const newCount = currentCount + 1;
    await supabaseClient
      .from("user_progress")
      .update({
        daily_ai_count: newCount,
        last_ai_date: today,
        updated_at: new Date().toISOString(),
      })
      .eq("clerk_user_id", clerkUserId);
    return { allowed: true, remaining: FREE_DAILY_LIMIT - newCount };
  },

  /**
   * DEPRECATED – kept for backward compatibility.
   */
  async checkAndIncrementAiCount(supabaseClient, clerkUserId, isPro) {
    if (isPro) return { allowed: true, remaining: null };
    const { currentCount, today } = await readAiCount(
      supabaseClient,
      clerkUserId
    );
    if (currentCount >= FREE_DAILY_LIMIT) {
      return { allowed: false, remaining: 0, limit: FREE_DAILY_LIMIT };
    }
    const newCount = currentCount + 1;
    await supabaseClient
      .from("user_progress")
      .update({
        daily_ai_count: newCount,
        last_ai_date: today,
        updated_at: new Date().toISOString(),
      })
      .eq("clerk_user_id", clerkUserId);
    return {
      allowed: true,
      remaining: FREE_DAILY_LIMIT - newCount,
      limit: FREE_DAILY_LIMIT,
    };
  },

  async getAiRequestsRemaining(supabaseClient, clerkUserId, isPro) {
    if (isPro) return null;
    const { currentCount } = await readAiCount(supabaseClient, clerkUserId);
    return Math.max(0, FREE_DAILY_LIMIT - currentCount);
  },
};