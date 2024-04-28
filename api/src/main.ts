import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'

import { AppModule } from '@core/app.module'
import { env } from '@configs/env.config'

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function main() {
  const port = env.PORT

  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('Hope Hand')
    .setDescription('The Hope Hand API description')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  app.enableCors({
    origin: env.FRONTEND_URL,
    methods: ['POST', 'GET', 'DELETE', 'PATCH', 'PUT', 'OPTIONS']
  })

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(port, () =>
    console.log('Server started on http://localhost:' + port)
  )
}

main()
