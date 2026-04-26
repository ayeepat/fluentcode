import { supabase } from "./supabaseClient";

export const progressDb = {
  async getProgress(clerkUserId, email) {
    const { data, error } = await supabase
      .from("user_progress")
      .select("*")
      .eq("clerk_user_id", clerkUserId)
      .single();

    if (error && error.code === "PGRST116") {
      return this.createProgress(clerkUserId, email);
    }

    if (error) {
      console.error("Failed to get progress:", error);
      return null;
    }

    return data;
  },

  async createProgress(clerkUserId, email) {
    const { data, error } = await supabase
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
      })
      .select()
      .single();

    if (error) {
      console.error("Failed to create progress:", error);
      return null;
    }

    return data;
  },

  async updateProgress(clerkUserId, updates) {
    const { data, error } = await supabase
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
};