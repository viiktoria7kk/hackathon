import zod from 'zod'

import { parseEnvs } from '@utils/parse-envs'

const schema = zod.object({
  PORT: zod
    .string()
    .transform((val) => (typeof val === 'string' ? parseInt(val) : val)),
  FRONTEND_URL: zod.string(),
  ACCESS_TOKEN_SECRET_KEY: zod.string(),
  ACCESS_TOKEN_EXPIRES_IN: zod.string(),
  NODE_ENV: zod.enum(['development', 'production']),
  // Supabase
  SUPABASE_BUCKET_NAME: zod.string(),
  SUPABASE_ENDPOINT: zod.string(),
  SUPABASE_API_KEY: zod.string()
})

export const env = parseEnvs(schema)
