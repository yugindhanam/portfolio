import { createClient } from '@supabase/supabase-js'

const rawUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').trim()
const supabaseAnonKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').trim()

// Format URL safely to ensure valid HTTPS endpoint for Supabase client
const formatSupabaseUrl = (url) => {
  if (!url || url.includes('your-project-ref')) return 'https://placeholder.supabase.co'
  if (url.startsWith('http://') || url.startsWith('https://')) return url
  if (url.includes('.supabase.co')) return `https://${url}`
  return `https://${url}.supabase.co`
}

const supabaseUrl = formatSupabaseUrl(rawUrl)

export const supabase = createClient(supabaseUrl, supabaseAnonKey || 'placeholder')
