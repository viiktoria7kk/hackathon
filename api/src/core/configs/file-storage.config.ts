import { env } from '@core/configs/env.config'
export const supabaseConfig = {
  apiKey: env.SUPABASE_API_KEY,
  projectUrl: env.SUPABASE_ENDPOINT
}
