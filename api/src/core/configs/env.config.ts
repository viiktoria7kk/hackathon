import zod from 'zod'

import { parseEnvs } from '@utils/parse-envs'

const schema = zod.object({
  PORT: zod
    .string()
    .transform((val) => (typeof val === 'string' ? parseInt(val) : val)),
  FRONTEND_URL: zod.string()
})

export const env = parseEnvs(schema)
