// src/lib/progressDb.js
const FREE_DAILY_LIMIT = 10;

// ─── Streak helpers ───────────────────────────────────────────────────────────

function getTodayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function getYesterdayStr() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function computeNewStreak(lastStudyDate, currentStreak) {
  const today = getTodayStr();
  const yesterday = getYesterdayStr();

  if (lastStudyDate === today) {
    return currentStreak;
  }
  if (lastStudyDate === yesterday) {
    return currentStreak + 1;
  }
  return 1;
}

// ─── Main export ──────────────────────────────────────────────────────────────

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

    // Fix stale streak on load: if last_study_date is older than yesterday, reset to 0
    if (data && data.last_study_date) {
      const today = getTodayStr();
      const yesterday = getYesterdayStr();
      if (data.last_study_date !== today && data.last_study_date !== yesterday) {
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

    return data;
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

  // ─── Lesson completion (updates streak) ──────────────────────────────────

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

  // ─── Quiz completion (separate from lessons, also updates streak) ─────────

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

  // ─── AI rate limiting ─────────────────────────────────────────────────────

  async checkAndIncrementAiCount(supabaseClient, clerkUserId, isPro) {
    if (isPro) return { allowed: true, remaining: null };

    const { data, error } = await supabaseClient
      .from("user_progress")
      .select("daily_ai_count, last_ai_date")
      .eq("clerk_user_id", clerkUserId)
      .single();

    if (error) {
      console.error("Failed to check AI count:", error);
      return { allowed: true, remaining: null };
    }

    const today = new Date().toDateString();
    const lastDate = data?.last_ai_date;
    const currentCount =
      lastDate === today ? data?.daily_ai_count || 0 : 0;

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

    const today = new Date().toDateString();
    const lastDate = data?.last_ai_date;
    const currentCount =
      lastDate === today ? data?.daily_ai_count || 0 : 0;

    return Math.max(0, FREE_DAILY_LIMIT - currentCount);
  },
};