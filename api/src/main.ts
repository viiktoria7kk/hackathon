import { NestFactory } from '@nestjs/core'

import { AppModule } from '@modules/app.module'
import { env } from '@configs/env.config'

async function main() {
  const port = env.PORT

  const app = await NestFactory.create(AppModule)

  app.enableCors({
    origin: env.FRONTEND_URL,
    methods: ['POST', 'GET', 'DELETE', 'PATCH', 'PUT', 'OPTIONS']
  })

  await app.listen(port, () =>
    console.log('Server started on http://localhost:' + port)
  )
}

main()
