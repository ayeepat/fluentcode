// src/lib/localStorageDb.js

const STORAGE_KEY_PROGRESS = "fluentcode_progress";

// Safe JSON parse — never throws
const safeGet = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
};

const safeSet = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error("localStorage write failed:", e);
  }
};

export const localDb = {
  // auth.me() reads the mock user if DEV_BYPASS is active,
  // or returns null (Clerk pages use useUser() directly)
  auth: {
    me: async () => {
      try {
        const stored = localStorage.getItem("mock_user");
        if (stored) return JSON.parse(stored);
        return null;
      } catch {
        return null;
      }
    },
  },

  entities: {
    UserProgress: {
      filter: async (query) => {
        const all = safeGet(STORAGE_KEY_PROGRESS);
        return all.filter((p) =>
          Object.entries(query).every(([k, v]) => p[k] === v)
        );
      },

      get: async (id) => {
        const all = safeGet(STORAGE_KEY_PROGRESS);
        return all.find((p) => p.id === id) || null;
      },

      create: async (data) => {
        const all = safeGet(STORAGE_KEY_PROGRESS);
        const newRecord = {
          id: `progress_${Date.now()}`,
          ...data,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        all.push(newRecord);
        safeSet(STORAGE_KEY_PROGRESS, all);
        return newRecord;
      },

      update: async (id, updates) => {
        const all = safeGet(STORAGE_KEY_PROGRESS);
        const index = all.findIndex((r) => r.id === id);
        if (index === -1) return null;
        all[index] = {
          ...all[index],
          ...updates,
          updatedAt: new Date().toISOString(),
        };
        safeSet(STORAGE_KEY_PROGRESS, all);
        return all[index];
      },

      delete: async (id) => {
        const all = safeGet(STORAGE_KEY_PROGRESS);
        const filtered = all.filter((r) => r.id !== id);
        safeSet(STORAGE_KEY_PROGRESS, filtered);
        return true;
      },

      // Upsert — create if not exists, update if exists
      // Used to safely sync progress without duplicates
      upsert: async (query, data) => {
        const all = safeGet(STORAGE_KEY_PROGRESS);
        const index = all.findIndex((p) =>
          Object.entries(query).every(([k, v]) => p[k] === v)
        );
        if (index === -1) {
          const newRecord = {
            id: `progress_${Date.now()}`,
            ...data,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          };
          all.push(newRecord);
          safeSet(STORAGE_KEY_PROGRESS, all);
          return newRecord;
        } else {
          all[index] = {
            ...all[index],
            ...data,
            updatedAt: new Date().toISOString(),
          };
          safeSet(STORAGE_KEY_PROGRESS, all);
          return all[index];
        }
      },
    },
  },
};