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

export const progressDb = {
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

    // Always use v2 for Python users, v1 for others
    const lang = data.language || "python";
    const version =
      data.curriculum_version ||
      (lang === "python" ? 2 : 1);

    return { ...data, curriculum_version: version };
  },

  async createProgress(supabaseClient, clerkUserId, email) {
    const { data, error } = await supabaseClient
      .from("user_progress")
      .insert({
        clerk_user_id: clerkUserId,
        email: email,
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

    return data;
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

    return updated;
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
    let serverProgress = await this.getProgress(supabaseClient, clerkUserId, email);
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

  async checkAndIncrementAiCount(supabaseClient, clerkUserId, isPro) {
    if (isPro) return { allowed: true, remaining: null };

    const { data, error } = await supabaseClient
      .from("user_progress")
      .select("daily_ai_count, last_ai_date")
      .eq("clerk_user_id", clerkUserId)
      .single();

    if (error) {
      console.error("Failed to check AI count:", error);
      return { allowed: false, remaining: 0 };
    }

    const today = getTodayStr();
    const lastDate = data?.last_ai_date;
    const currentCount = lastDate === today ? data?.daily_ai_count || 0 : 0;

    if (currentCount >= FREE_DAILY_LIMIT) {
      return { allowed: false, remaining: 0, limit: FREE_DAILY_LIMIT };
    }

    await supabaseClient
      .from("user_progress")
      .update({
        daily_ai_count: currentCount + 1,
        last_ai_date: today,
        updated_at: new Date().toISOString(),
      })
      .eq("clerk_user_id", clerkUserId);

    return {
      allowed: true,
      remaining: FREE_DAILY_LIMIT - (currentCount + 1),
      limit: FREE_DAILY_LIMIT,
    };
  },

  async getAiRequestsRemaining(supabaseClient, clerkUserId, isPro) {
    if (isPro) return null;

    const { data, error } = await supabaseClient
      .from("user_progress")
      .select("daily_ai_count, last_ai_date")
      .eq("clerk_user_id", clerkUserId)
      .single();

    if (error) return FREE_DAILY_LIMIT;

    const today = getTodayStr();
    const lastDate = data?.last_ai_date;
    const currentCount = lastDate === today ? data?.daily_ai_count || 0 : 0;

    return Math.max(0, FREE_DAILY_LIMIT - currentCount);
  },
};