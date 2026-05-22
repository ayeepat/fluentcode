import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientInstance } from "@/lib/query-client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import PageNotFound from "./lib/PageNotFound";
import { AuthProvider } from "@/lib/AuthContext";
import { FeedbackProvider } from "@/lib/FeedbackContext";
import FeedbackWidget from "@/components/FeedbackWidget";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Lesson from "./pages/Lesson";
import CodingPage from "./pages/CodingPage";
import Profile from "./pages/Profile";
import Upgrade from "./pages/Upgrade";
import Subscription from "./pages/Subscription";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import Quiz from "./pages/Quiz";
import QuizHub from "./pages/QuizHub";
import QuizIntro from "./pages/QuizIntro";
import ErrorBoundary from "./components/ErrorBoundary";

// ✅ Add this import
import { SpeedInsights } from "@vercel/speed-insights/react";

const ProtectedRoute = ({ children }) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

function App() {
  console.log("✅ App rendering started");
  return (
    <ErrorBoundary>
      <AuthProvider>
        <FeedbackProvider>
          <QueryClientProvider client={queryClientInstance}>
            <Router>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/sign-in/*" element={<SignInPage />} />
                <Route path="/sign-up/*" element={<SignUpPage />} />
                <Route path="/upgrade" element={<Upgrade />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/subscription" element={<Subscription />} />

                {/* Guest routes */}
                <Route path="/lesson/:language/:lessonId" element={<Lesson />} />
                <Route path="/code/:language/:lessonId" element={<CodingPage />} />
                <Route path="/quiz/:language/:lessonId" element={<QuizIntro />} />
                <Route path="/quiz/:language/:lessonId/start" element={<Quiz />} />

                {/* Protected routes */}
                <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                <Route path="/quiz" element={<ProtectedRoute><QuizHub /></ProtectedRoute>} />
                <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

                <Route path="*" element={<PageNotFound />} />
              </Routes>
              <FeedbackWidget />

              {/* ✅ Add SpeedInsights here – inside Router but outside Routes */}
              <SpeedInsights />
            </Router>
            <Toaster />
          </QueryClientProvider>
        </FeedbackProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;