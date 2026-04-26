// src/App.jsx
import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react'
import PageNotFound from './lib/PageNotFound'
import { AuthProvider } from '@/lib/AuthContext'
import Landing from "./pages/Landing"
import Dashboard from "./pages/Dashboard"
import Courses from "./pages/Courses"
import Lesson from "./pages/Lesson"
import CodingPage from "./pages/CodingPage"
import Profile from "./pages/Profile"
import Upgrade from "./pages/Upgrade"
import Subscription from "./pages/Subscription"
import Terms from "./pages/Terms"
import Privacy from "./pages/Privacy"
import SignInPage from "./pages/SignIn"
import SignUpPage from "./pages/SignUp"

const ProtectedRoute = ({ children }) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  )
}

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Landing />} />
            <Route path="/sign-in/*" element={<SignInPage />} />
            <Route path="/sign-up/*" element={<SignUpPage />} />
            <Route path="/upgrade" element={<Upgrade />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />

            {/* Protected routes */}
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/courses" element={<ProtectedRoute><Courses /></ProtectedRoute>} />
            <Route path="/lesson/:language/:lessonId" element={<ProtectedRoute><Lesson /></ProtectedRoute>} />
            <Route path="/code/:language/:lessonId" element={<ProtectedRoute><CodingPage /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/subscription" element={<ProtectedRoute><Subscription /></ProtectedRoute>} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App