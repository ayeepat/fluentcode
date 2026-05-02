// src/App.jsx
import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientInstance } from "@/lib/query-client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import PageNotFound from "./lib/PageNotFound";
import { AuthProvider } from "@/lib/AuthContext";
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
  return (
    <AuthProvider>
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

            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/lesson/:language/:lessonId" element={<ProtectedRoute><Lesson /></ProtectedRoute>} />
            <Route path="/code/:language/:lessonId" element={<ProtectedRoute><CodingPage /></ProtectedRoute>} />
            <Route path="/quiz" element={<ProtectedRoute><QuizHub /></ProtectedRoute>} />
            <Route path="/quiz/:language/:lessonId" element={<ProtectedRoute><QuizIntro /></ProtectedRoute>} />
            <Route path="/quiz/:language/:lessonId/start" element={<ProtectedRoute><Quiz /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;