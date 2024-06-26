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
  // Appwrite
  APPWRITE_PROJECT_ID: zod.string(),
  APPWRITE_ENDPOINT: zod.string(),
  APPWRITE_API_KEY: zod.string(),
  APPWRITE_BUCKET_NAME: zod.string(),

  // Mail
  MAIL_USER: zod.string(),
  MAIL_PASS: zod.string(),
  MAIL_CLIENT_ID: zod.string(),
  MAIL_CLIENT_SECRET: zod.string(),
  MAIL_REFRESH_TOKEN: zod.string()
})

export const env = parseEnvs(schema)
