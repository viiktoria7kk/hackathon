import zod from 'zod'

import { parseEnvs } from '@utils/parse-envs'

const schema = zod.object({
  PORT: zod
    .string()
    .transform((val) => (typeof val === 'string' ? parseInt(val) : val)),
  FRONTEND_URL: zod.string(),
  ACCESS_TOKEN_SECRET_KEY: zod.string(),
  ACCESS_TOKEN_EXPIRES_IN: zod.string(),
  NODE_ENV: zod.enum(['development', 'production'])
})

export const env = parseEnvs(schema)
