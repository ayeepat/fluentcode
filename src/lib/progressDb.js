// src/lib/progressDb.js
const FREE_DAILY_LIMIT = 10;

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
        streak_days: 0,
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
    const currentCount = lastDate === today ? (data?.daily_ai_count || 0) : 0;

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
    const currentCount = lastDate === today ? (data?.daily_ai_count || 0) : 0;

    return Math.max(0, FREE_DAILY_LIMIT - currentCount);
  },
};