# 🔍 COMPREHENSIVE CODE AUDIT REPORT
**FluentCode React + Vite + Tailwind + Supabase Project**
**Date: May 8, 2026**

---

## 🚨 1. SECURITY VULNERABILITIES

### HIGH PRIORITY

#### 1.1 CORS Configuration Too Broad
**File:** `supabase/functions/evaluate-code/index.ts` (line 13-15) & `supabase/functions/ai-chat/index.ts` (line 8-9)
**Severity:** HIGH
**Issue:** 
```typescript
origin && (ALLOWED_ORIGINS.includes(origin) || origin.endsWith(".vercel.app"))
```
Allows **ANY** Vercel deployment to call your Edge Functions. Attacker could deploy malicious code to `attacker.vercel.app` and abuse your API.

**Fix:**
```typescript
origin && ALLOWED_ORIGINS.includes(origin)  // Remove the .endsWith(".vercel.app") wildcard
```

---

#### 1.2 Race Condition in AI Rate Limiting
**File:** `src/lib/progressDb.js` (lines 262-289)
**Severity:** HIGH
**Issue:**
```javascript
const { data, error } = await supabaseClient
  .from("user_progress")
  .select("daily_ai_count, last_ai_date")  // ← Read
  .eq("clerk_user_id", clerkUserId)
  .single();

if (currentCount >= FREE_DAILY_LIMIT) return { allowed: false };

await supabaseClient
  .from("user_progress")
  .update({ daily_ai_count: currentCount + 1 })  // ← Write (separate transaction)
  .eq("clerk_user_id", clerkUserId);
```
If 2 requests arrive simultaneously:
- Both read count = 9
- Both see 9 < 10 → allow both
- Both increment → count becomes 10 twice
- **User gets 2 free AI reviews instead of 1**

**Fix:** Use Postgres `CHECK` constraint + single UPDATE query:
```sql
UPDATE user_progress 
SET daily_ai_count = daily_ai_count + 1
WHERE clerk_user_id = $1 AND (
  last_ai_date != TODAY OR daily_ai_count < 10
)
RETURNING daily_ai_count;
```

---

#### 1.3 Unsafe Default on Auth Error
**File:** `src/lib/progressDb.js` (lines 275-277)
**Severity:** MEDIUM-HIGH
**Issue:**
```javascript
if (error) {
  console.error("Failed to check AI count:", error);
  return { allowed: true, remaining: null };  // ← Default to ALLOWING if Supabase is down!
}
```
If Supabase API fails, user gets unlimited free AI requests. Should fail safely.

**Fix:**
```javascript
if (error) {
  console.error("Failed to check AI count:", error);
  return { allowed: false, remaining: 0 };  // Deny if we can't verify
}
```

---

#### 1.4 Email Validation Missing in FeedbackWidget
**File:** `src/components/FeedbackWidget.jsx` (lines 131-139)
**Severity:** MEDIUM
**Issue:**
```javascript
{...register("email", {
  pattern: {
    value: /^[A-Z0-9._%+-]*@?[A-Z0-9.-]*$/i,  // Regex allows empty string!
    message: "Invalid email",
  },
})}
```
Regex `/^[A-Z0-9._%+-]*@?[A-Z0-9.-]*$/i` allows:
- Empty string ("")
- Just "@" ("")
- "invalid.com" (no @)

**Fix:**
```javascript
{...register("email", {
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Please enter a valid email",
  },
})}
```

---

### MEDIUM PRIORITY

#### 1.5 FeedbackWidget Floating Button Logic Broken
**File:** `src/components/FeedbackWidget.jsx` (lines 74-89)
**Severity:** MEDIUM (UX/Logic Bug)
**Issue:**
```javascript
onClick={() => {
  if (isOpen) {
    handleCancel();
  } else {
    localStorage.removeItem("feedbackWidget_dismissed");
    // But this doesn't call openFeedbackWidget()!
  }
}}
```
The floating button tries to open the widget but never actually calls `openFeedbackWidget()` from the context. The modal won't open.

**Fix:**
```javascript
const { openFeedbackWidget } = useFeedbackWidget();  // Add to imports

onClick={() => {
  if (isOpen) {
    handleCancel();
  } else {
    localStorage.removeItem("feedbackWidget_dismissed");
    openFeedbackWidget(false);  // Actually open it
  }
}}
```

---

#### 1.6 Sensitive Data Access Pattern Missing Auth Check
**File:** `src/pages/Dashboard.jsx` (lines 35-46)
**Severity:** MEDIUM
**Issue:**
```javascript
const loadProgress = async () => {
  // NO CHECK that user.id matches the data being fetched
  const data = await progressDb.getProgress(
    supabaseClient,
    clerkUserId,
    email
  );
  setProgress(data);  // Assumes Supabase RLS prevents abuse
};
```
Relies entirely on Supabase RLS. No defensive programming if RLS is accidentally disabled.

**Fix:** Add explicit auth check:
```javascript
if (!isSignedIn || !user?.id) {
  console.warn("Unauthorized access attempt");
  return;
}

// Only then fetch
const data = await progressDb.getProgress(
  supabaseClient,
  user.id,
  user.primaryEmailAddress?.emailAddress
);
```

---

#### 1.7 Formspree Accepts Unvalidated Email
**File:** `src/components/FeedbackWidget.jsx` (lines 45-50)
**Severity:** MEDIUM
**Issue:**
```javascript
const response = await fetch(FORMSPREE_ENDPOINT, {
  method: "POST",
  body: JSON.stringify({
    email: data.email || "anonymous@feedback.local",  // Could be invalid format
    type: feedbackType,
    message: data.message,
    timestamp: new Date().toISOString(),
  }),
});
```
Email field is optional, so it can be empty string or invalid. Sending to Formspree with invalid email might cause issues.

**Fix:**
```javascript
email: data.email?.trim() || undefined,  // Only include if valid
```

---

## ⚠️ 2. LOGIC BUGS

### HIGH PRIORITY

#### 2.1 FeedbackWidget Auto-Open Logic Broken
**File:** `src/lib/FeedbackContext.jsx` (lines 9-24)
**Severity:** HIGH
**Issue:**
```javascript
const openFeedbackWidget = (autoOpen = false) => {
  const isDismissed = localStorage.getItem("feedbackWidget_dismissed");
  if (isDismissed && !autoOpen) {  // ← Problem: even with autoOpen=true, checks this
    setIsOpen(true);
    return;
  }
  if (isDismissed) {  // ← If dismissed, still exits without opening
    return;  // Never sets isOpen = true!
  }
  setShouldAutoOpen(autoOpen);
  setIsOpen(true);  // ← Only reaches here if NOT dismissed
};
```

When CodingPage triggers `openFeedbackWidget(true)` after success, if user dismissed it before, widget won't open even with the autoOpen flag.

**Fix:**
```javascript
const openFeedbackWidget = (autoOpen = false) => {
  const isDismissed = localStorage.getItem("feedbackWidget_dismissed");
  
  // If explicitly requested (manual button), always allow override
  if (!autoOpen && isDismissed) {
    return;  // Don't auto-open if dismissed
  }
  
  // Always open if we get here
  setShouldAutoOpen(autoOpen);
  setIsOpen(true);
};
```

---

#### 2.2 Double-Submit Race Condition
**File:** `src/pages/CodingPage.jsx` (lines 310-397)
**Severity:** HIGH
**Issue:**
```javascript
const handleSubmit = async () => {
  if (submitting) return;  // ← Only checks once at start
  setSubmitting(true);
  
  // ... lots of async code ...
  
  const aiResponse = await evaluateCode(code, language, lesson);  // ← Takes 2-5 seconds
  setFeedback(aiResponse);
  
  // If user clicks Submit again during this time:
  // - submitting=true check has already passed
  // - Second call overwrites state mid-evaluation
};
```

If user clicks Submit, then clicks it again before AI response returns, second submit will overwrite the first evaluation mid-flight.

**Fix:** Add state guard throughout:
```javascript
const handleSubmit = async () => {
  if (submitting) return;
  setSubmitting(true);

  try {
    if (submitting) return;  // Add guards in async sections
    const aiResponse = await evaluateCode(code, language, lesson);
    
    if (submitting === false) return;  // Aborted
    setFeedback(aiResponse);
  } finally {
    setSubmitting(false);
  }
};
```

Or use useCallback with dependency array to prevent stale closures.

---

#### 2.3 Streak Reset Logic Inconsistent
**File:** `src/lib/progressDb.js` (lines 68-84)
**Severity:** MEDIUM
**Issue:**
```javascript
function computeNewStreak(lastStudyDate, currentStreak) {
  const today = getTodayStr();
  const yesterday = getYesterdayStr();

  if (lastStudyDate === today) {
    return currentStreak;  // Already done today, don't increment
  }
  if (lastStudyDate === yesterday) {
    return currentStreak + 1;  // Studied yesterday, extend streak
  }
  return 1;  // Any other date = reset to 1
}
```

**Problem:** Timezone-dependent. If user in UTC+9 and server in UTC, dates might not match:
- User completes lesson Monday 11 PM (UTC+9)
- Server records it as Tuesday 2 AM (UTC)
- User checks streak Tuesday 8 AM (UTC+9) = Monday afternoon in UTC
- Server resets streak because "Tuesday" !== "Monday"

**Fix:** Use timezone-aware comparison:
```javascript
function getTodayStr() {
  const d = new Date();
  // Force UTC for consistency
  return d.toISOString().split('T')[0];  // YYYY-MM-DD in UTC
}
```

---

#### 2.4 Loading State Left Forever if Timeout
**File:** `src/pages/Dashboard.jsx` (lines 65-73)
**Severity:** MEDIUM
**Issue:**
```javascript
useEffect(() => {
  const timeout = setTimeout(() => {
    if (loading) {
      console.warn("Loading timeout hit — forcing render");
      setLoading(false);  // Just sets loading=false, doesn't load actual data
    }
  }, 8000);
  return () => clearTimeout(timeout);
}, [loading]);
```

If data fetch times out, loading state is cleared but `progress` is still null. User sees blank dashboard with no error message.

**Fix:**
```javascript
useEffect(() => {
  const timeout = setTimeout(() => {
    if (loading) {
      console.warn("Loading timeout - showing error state");
      setProgress({  // Provide minimal data
        completed_lessons: [],
        completed_quizzes: [],
        streak_days: 0,
        total_exercises: 0,
        correct_exercises: 0,
        is_pro: false,
        language: "python",
      });
      setLoading(false);
    }
  }, 8000);
  return () => clearTimeout(timeout);
}, [loading]);
```

---

#### 2.5 Async Error Not Handled in Quiz Save
**File:** `src/pages/Quiz.jsx` (lines 146-159)
**Severity:** MEDIUM
**Issue:**
```javascript
try {
  const result = await progressDb.completeQuiz(
    supabaseClient,
    user.id,
    lessonId
  );
  if (result) {
    setSavedProgress(true);  // User never knows if it saved
  }
} catch (err) {
  console.error("Failed to save quiz progress:", err);  // Swallowed
} finally {
  setSaving(false);
}
```

If save fails, user thinks progress saved but it didn't. Next page reload shows no progress.

**Fix:**
```javascript
catch (err) {
  console.error("Failed to save quiz progress:", err);
  // Show toast/error to user
  toast.error("Failed to save your progress. Please try again.");
  setSavedProgress(false);
}
```

---

### MEDIUM PRIORITY

#### 2.6 Hardcoded First Lesson ID
**File:** `src/pages/Lesson.jsx` (line 63)
**Severity:** MEDIUM
**Issue:**
```javascript
if (isLoaded && isGuest && !guestAllowed) {
  navigate(`/lesson/${language}/${language}-phase0-m1-l1`);  // ← Hardcoded!
}
```

If curriculum changes (phase renamed, module restructured), guests get 404 redirect loop.

**Fix:**
```javascript
import { getAllLessons } from "@/lib/curriculum";

if (isLoaded && isGuest && !guestAllowed) {
  const firstLesson = getAllLessons(language)[0];
  if (firstLesson) {
    navigate(`/lesson/${language}/${firstLesson.id}`);
  } else {
    navigate("/courses");
  }
}
```

---

#### 2.7 Unused Import
**File:** `src/pages/CodingPage.jsx` (line 4)
**Severity:** LOW
**Issue:**
```javascript
import { Link } from "react-router-dom";  // Never used
```

**Fix:** Remove the import.

---

## 📦 3. DEPENDENCY ISSUES

### All Clear
- ✅ No circular imports detected
- ✅ No unused dependencies in package.json
- ✅ FeedbackWidget doesn't need @formspree/react (uses native fetch)
- ✅ All imports are either used or are side-effects (like Helmet)

---

## ⚡ 4. PERFORMANCE ISSUES

### MEDIUM PRIORITY

#### 4.1 Stats Array Recreated Every Render
**File:** `src/pages/Dashboard.jsx` (line 106-110)
**Severity:** MEDIUM
**Issue:**
```javascript
const stats = [
  { label: "Day streak", value: streak, icon: Flame },
  { label: "Accuracy", value: `${accuracy}%`, icon: Target },
  { label: "Completed", value: `${completed.length}/${allLessons.length}`, icon: BookOpen },
];  // Recreated on every render

return (
  <motion.div {...stagger(1)} className="grid grid-cols-3 gap-3 mb-4">
    {stats.map(({ label, value, icon: Icon }) => (  // Re-renders all items
```

**Fix:**
```javascript
const stats = useMemo(() => [
  { label: "Day streak", value: streak, icon: Flame },
  { label: "Accuracy", value: `${accuracy}%`, icon: Target },
  { label: "Completed", value: `${completed.length}/${allLessons.length}`, icon: BookOpen },
], [streak, accuracy, completed.length, allLessons.length]);
```

---

#### 4.2 Multiple Resize Listeners Can Accumulate
**File:** `src/pages/Lesson.jsx` (lines 20-29)
**Severity:** MEDIUM
**Issue:**
```javascript
function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);  // Good cleanup
  }, []);  // OK - runs once
  return mobile;
}
```

Actually this is fine since it has empty dependency array and cleans up. But it's defined inside component, so recreated every render (doesn't cause issues but wasteful).

**Fix:** Extract to `src/hooks/use-mobile.jsx` (wait, you already have `/src/hooks/use-mobile.jsx`!)

Should use that instead:
```javascript
import { useIsMobile } from "@/hooks/use-mobile";  // Already exists!
```

---

#### 4.3 Heavy Curriculum Loaded Globally
**File:** `src/lib/curriculum.js` (hundreds of lines)
**Severity:** LOW
**Issue:**
Entire curriculum is bundled even if user only views Python lessons.

**Fix:** Not critical for your scale, but could code-split:
```javascript
// curriculum.js - export function instead of default
export const getCurriculum = async (language) => {
  const module = await import(`./${language}-curriculum.js`);
  return module.default;
};
```

---

## 🗄️ 5. DATA INTEGRITY

### HIGH PRIORITY

#### 5.1 Duplicate Exercise Counting in Guest Sync
**File:** `src/lib/progressDb.js` (lines 234-265)
**Severity:** HIGH
**Issue:**
```javascript
const updates = {
  completed_lessons: mergedLessons,
  completed_quizzes: mergedQuizzes,
  total_exercises:
    (serverProgress.total_exercises || 0) +
    (guestData.total_exercises || 0),  // ← ADDS them!
  correct_exercises:
    (serverProgress.correct_exercises || 0) +
    (guestData.correct_exercises || 0),  // ← ADDS them!
};
```

**Problem:** Guest completed 5 exercises (3 correct). Server has 5 exercises (2 correct).
After sync: total = 10, correct = 5. But user only did 5 exercises total!

Data is now corrupted. Accuracy calculation becomes wrong.

**Fix:** 
```javascript
// Merge lesson/quiz arrays first
const completedLessons = [...new Set([
  ...(serverProgress.completed_lessons || []),
  ...(guestData.completed_lessons || []),
])];

// Calculate stats based on merged completed lessons
const numCompletedLessons = completedLessons.length;
// Assume each completed lesson = 1 exercise
// But this is still a guess...

// Better: track at lesson level, not exercise level
```

Actually, the real fix is more complex - need to track which specific exercises were done, not just counts.

---

#### 5.2 No Size Limit on Cached Code
**File:** `src/lib/localProgressDb.js` (lines 48-52)
**Severity:** MEDIUM
**Issue:**
```javascript
saveCode(lessonId, code) {
  const data = this.getProgress();
  data.saved_code[lessonId] = code;  // ← No length check
  saveProgress(data);
  return data;
}
```

User could paste 10MB of text, localStorage would fail silently or crash browser.

**Fix:**
```javascript
saveCode(lessonId, code) {
  const data = this.getProgress();
  if ((code || "").length > 50000) {  // Max 50KB per code
    console.warn("Code too large, not saving");
    return data;
  }
  data.saved_code[lessonId] = code;
  saveProgress(data);
  return data;
}
```

---

#### 5.3 No Validation on Supabase Inserts
**File:** `src/lib/progressDb.js` (lines 85-103)
**Severity:** MEDIUM
**Issue:**
```javascript
async createProgress(supabaseClient, clerkUserId, email) {
  const { data, error } = await supabaseClient
    .from("user_progress")
    .insert({
      clerk_user_id: clerkUserId,
      email: email,  // ← No validation
      language: "python",  // ← No validation
      completed_lessons: [],
      // ... other fields not validated
    })
    .select()
    .single();
```

If `email` is null or invalid, insert might fail or create bad data.

**Fix:**
```javascript
if (!email || !email.includes("@")) {
  console.error("Invalid email for progress creation");
  return null;
}
```

---

## 🔐 6. AUTH & ROUTING

### HIGH PRIORITY

#### 6.1 Inconsistent Route Protection
**File:** `src/App.jsx` (lines 41-57)
**Severity:** HIGH
**Issue:**
```javascript
{/* These routes work for BOTH guests and logged-in users */}
<Route path="/lesson/:language/:lessonId" element={<Lesson />} />
<Route path="/code/:language/:lessonId" element={<CodingPage />} />

{/* Protected routes */}
<Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
<Route path="/quiz" element={<ProtectedRoute><QuizHub /></ProtectedRoute>} />
```

But `/quiz/:language/:lessonId/start` is NOT protected:
```javascript
<Route path="/quiz/:language/:lessonId/start" element={<Quiz />} />  // ← Can access without auth!
```

Guest can access Quiz page, answer questions, but can't save progress (isGuest check in Quiz.jsx line 149). Confusing UX.

**Fix:**
Either:
1. Protect the quiz route, OR
2. Handle guest quiz progress better

```javascript
<Route path="/quiz/:language/:lessonId/start" element={
  <ProtectedRoute><Quiz /></ProtectedRoute>
} />
```

---

#### 6.2 Dashboard Returns Null Instead of Redirecting
**File:** `src/pages/Dashboard.jsx` (line 84)
**Severity:** HIGH
**Issue:**
```javascript
if (!isSignedIn) return null;  // ← Just renders nothing
```

Should redirect or show error, not silently render null.

**Fix:**
```javascript
if (!isSignedIn) {
  return <Navigate to="/courses" replace />;
}
```

But Profile does it correctly:
```javascript
// src/pages/Profile.jsx lines 24-27
useEffect(() => {
  if (isLoaded && !isSignedIn) {
    navigate("/courses");
  }
}, [isLoaded, isSignedIn, navigate]);
```

Make Dashboard consistent:
```javascript
useEffect(() => {
  if (isLoaded && !isSignedIn) {
    navigate("/courses");
  }
}, [isLoaded, isSignedIn, navigate]);
```

---

#### 6.3 Unlocked Lesson Check Not Frontend-Enforced
**File:** `src/pages/Courses.jsx` (lines 94-105)
**Severity:** MEDIUM
**Issue:**
```javascript
const isUnlocked = (lessonId) => {
  if (isGuest) {
    return isGuestAccessible(selectedLang, lessonId);
  }
  const idx = allFlat.findIndex((l) => l.id === lessonId);
  if (idx === 0) return true;
  if (idx === -1) return false;
  return completedLessons.includes(allFlat[idx - 1]?.id);  // ← Logic only in UI
};
```

This check is only in UI. User could manually navigate to `/lesson/:language/:unlocked-lesson-id` even if they haven't completed the previous one.

While Lesson.jsx prevents access to non-guest lessons (line 62), it doesn't prevent unlocked-lesson bypass.

**Fix:** Add check in Lesson.jsx:
```javascript
const allLessons = getAllLessons(language);
const currentIdx = allLessons.findIndex(l => l.id === lessonId);
const prevLesson = currentIdx > 0 ? allLessons[currentIdx - 1] : null;

// Check if user has completed previous lesson (or if first lesson)
if (prevLesson && !isGuest && !progress?.completed_lessons?.includes(prevLesson.id)) {
  navigate(`/lesson/${language}/${prevLesson.id}`);
}
```

---

#### 6.4 No Flash-of-Content Protection
**File:** Multiple pages (Dashboard, Profile, Lesson)
**Severity:** MEDIUM
**Issue:**
```javascript
// Dashboard.jsx
if (!isLoaded || loading) return <Spinner />;
if (!isSignedIn) return null;  // ← Between these checks, content might flash

// Profile.jsx  
useEffect(() => {
  if (isLoaded && !isSignedIn) {
    navigate("/courses");  // ← Race condition window
  }
}, [isLoaded, isSignedIn, navigate]);
```

If auth completes between render cycles, user might briefly see protected content.

**Fix:**
```javascript
if (!isLoaded) {
  return <Spinner />;  // Wait for auth to fully load first
}

if (!isSignedIn) {
  return <Navigate to="/courses" replace />;
}

// Now safe to render protected content
```

---

## ❌ 7. ERROR HANDLING

### HIGH PRIORITY

#### 7.1 Silent Failures in Progress Loading
**File:** `src/pages/Dashboard.jsx` (lines 44-56)
**Severity:** HIGH
**Issue:**
```javascript
const loadProgress = async () => {
  try {
    const data = await progressDb.getProgress(...);
    setProgress(data);  // If data is null, no error indication
  } catch (err) {
    console.error("Failed to load progress:", err);  // Swallowed
  } finally {
    setLoading(false);  // Marks done regardless of success
  }
};
```

If fetch fails, user sees blank dashboard with no error message.

**Fix:**
```javascript
const [error, setError] = useState(null);

const loadProgress = async () => {
  try {
    setError(null);
    const data = await progressDb.getProgress(...);
    if (!data) {
      setError("Failed to load progress. Please refresh.");
      return;
    }
    setProgress(data);
  } catch (err) {
    console.error("Failed to load progress:", err);
    setError("Something went wrong. Please refresh the page.");
  } finally {
    setLoading(false);
  }
};

// Then in render:
if (error) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-red-500 mb-4">{error}</p>
        <button onClick={() => window.location.reload()}>Refresh</button>
      </div>
    </div>
  );
}
```

---

#### 7.2 AI Chat Fetch Error Leaves UI in Bad State
**File:** `src/components/editor/AIFeedbackPanel.jsx` (lines 80-102)
**Severity:** HIGH
**Issue:**
```javascript
const sendMessage = async (text) => {
  setLoading(true);
  try {
    const res = await fetch(...);
    const data = await res.json();
    setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
  } catch (err) {
    console.error("AI Assistant error:", err);  // ← Just logs
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: "Sorry, I couldn't process that. Please try again." },
    ]);
  } finally {
    setLoading(false);  // Loading spinner stops, user can't retry
  }
};
```

Network error is caught but user can't retry. Just shows generic message.

**Fix:**
```javascript
catch (err) {
  console.error("AI Assistant error:", err);
  setError("Network error. Check your connection and try again.");
  setMessages((prev) => [
    ...prev,
    { 
      role: "assistant", 
      content: "Network error. Check your connection and try again.",
      isError: true,
    },
  ]);
}
```

---

#### 7.3 Invalid Quiz State Not Handled
**File:** `src/pages/Quiz.jsx` (lines 30-33)
**Severity:** MEDIUM
**Issue:**
```javascript
const initQuiz = useCallback(() => {
  const result = getLessonById(language, lessonId);
  if (!result) return;  // ← Silently returns, nothing happens
  setLesson(result.lesson);
  // ...
}, [language, lessonId]);
```

If lesson not found, quiz remains in loading state forever.

**Fix:**
```javascript
const initQuiz = useCallback(() => {
  const result = getLessonById(language, lessonId);
  if (!result) {
    setError("Quiz not found");  // Add error state
    return;
  }
  // ...
}, [language, lessonId]);

// In render:
if (error) {
  return (
    <div className="text-center py-20">
      <p className="text-red-500 mb-4">{error}</p>
      <button onClick={() => navigate("/courses")}>Back to Courses</button>
    </div>
  );
}
```

---

#### 7.4 Unvalidated Lesson Data from Curriculum
**File:** `src/lib/curriculum.js` (entire file)
**Severity:** MEDIUM
**Issue:**
All lesson data is hardcoded. If you accidentally break a field (e.g., missing `solution` in tests array), code will crash without warning:

```javascript
exercise: {
  prompt: "...",
  // starterCode: "...",  // ← Accidentally commented out
  tests: [...],
}
```

Then `CodingPage.jsx` line 182:
```javascript
setCode(result.lesson.exercise.starterCode || "");  // ← Returns undefined, then "" is fallback
```

Actually this is OK because of the `||` fallback. But if tests field is undefined:

```javascript
// CodingPage.jsx line 313
const tests = lesson.exercise.tests || [];  // OK, falls back to []
```

Also OK. Actually the code is defensive about this. Good!

---

## 📋 SUMMARY TABLE

| Category | Issue | Severity | File | Line |
|----------|-------|----------|------|------|
| Security | CORS too broad | HIGH | functions/evaluate-code/index.ts | 13-15 |
| Security | AI rate limit race condition | HIGH | progressDb.js | 262-289 |
| Security | Auth error defaults to allow | HIGH | progressDb.js | 275-277 |
| Security | Email validation weak | MEDIUM | FeedbackWidget.jsx | 131-139 |
| Security | Floating button logic broken | MEDIUM | FeedbackWidget.jsx | 74-89 |
| Logic | Feedback widget auto-open broken | HIGH | FeedbackContext.jsx | 9-24 |
| Logic | Double-submit race condition | HIGH | CodingPage.jsx | 310-397 |
| Logic | Streak reset timezone-dependent | MEDIUM | progressDb.js | 68-84 |
| Logic | Loading timeout no error state | MEDIUM | Dashboard.jsx | 65-73 |
| Logic | Quiz save error swallowed | MEDIUM | Quiz.jsx | 146-159 |
| Logic | Hardcoded first lesson ID | MEDIUM | Lesson.jsx | 63 |
| Perf | Stats array recreated | MEDIUM | Dashboard.jsx | 106-110 |
| Data | Duplicate exercise counting | HIGH | progressDb.js | 234-265 |
| Data | No code size limit | MEDIUM | localProgressDb.js | 48-52 |
| Data | No validation on insert | MEDIUM | progressDb.js | 85-103 |
| Auth | Inconsistent route protection | HIGH | App.jsx | 41-57 |
| Auth | Dashboard returns null | HIGH | Dashboard.jsx | 84 |
| Auth | Lesson unlock not enforced | MEDIUM | Courses.jsx | 94-105 |
| Auth | Flash of content risk | MEDIUM | Multiple | Various |
| Error | Silent failures in load | HIGH | Dashboard.jsx | 44-56 |
| Error | AI chat error handling | HIGH | AIFeedbackPanel.jsx | 80-102 |
| Error | Invalid quiz state | MEDIUM | Quiz.jsx | 30-33 |

---

## ✅ NEXT STEPS

1. **Fix HIGH severity items immediately** (security & data integrity)
2. **Add error boundary components** around async operations
3. **Add loading/error states** throughout the app
4. **Implement retry logic** for failed Supabase calls
5. **Add test suite** for race conditions and auth flows
6. **Consider toast notifications** for user-facing errors
