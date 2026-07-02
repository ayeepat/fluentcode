// vite.config.js
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const clerkKey = env.VITE_CLERK_PUBLISHABLE_KEY || ''
  // Placeholder or missing key would crash ClerkProvider at startup —
  // swap in the guest-mode stub so local dev still runs (see src/lib/clerk-stub.jsx).
  const clerkKeyValid = /^pk_(test|live)_/.test(clerkKey)

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(process.cwd(), "src"),
        ...(clerkKeyValid
          ? {}
          : { "@clerk/clerk-react": path.resolve(process.cwd(), "src/lib/clerk-stub.jsx") }),
      }
    },
    server: {
      port: process.env.PORT ? Number(process.env.PORT) : 5173,
      open: false
    }
  }
})
