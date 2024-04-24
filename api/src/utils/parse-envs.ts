import { Logger } from '@nestjs/common'
import { config } from 'dotenv'
import { expand } from 'dotenv-expand'
import { z } from 'zod'

export const parseEnvs = <S extends z.AnyZodObject>(schema: S, prefix = '') => {
  const logger = new Logger()

  const { parsed } = config({ path: `${prefix}.env` })

  type EnvSchema = z.infer<typeof schema>

  const parsedEnv = schema.safeParse(expand({ parsed }).parsed)

  if (parsedEnv.success === false) {
    logger.error(
      `Environmental variables cannot be parsed${prefix && ` for ${prefix}`}`
    )
    process.exit(1)
  }

  return parsedEnv.data as EnvSchema
}
