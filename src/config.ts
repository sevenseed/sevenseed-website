export const SUPABASE_URL = (() => {
  const env = process.env.NEXT_PUBLIC_SUPABASE_URL
  if (!env) throw new Error("NEXT_PUBLIC_SUPABASE_URL is missing")
  return env
})()
export const SUPABASE_ANON_KEY = (() => {
  const env = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!env) throw new Error("NEXT_PUBLIC_SUPABASE_ANON_KEY is missing")
  return env
})()

/**
 * https://github.com/vercel/next.js/issues/5354#issuecomment-520305040
 */
export const IS_SERVER = typeof window === "undefined"