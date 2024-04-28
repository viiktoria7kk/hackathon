import { Module } from '@nestjs/common'

import { PrismaModule } from '@core/prisma/prisma.module'
import { TokenModule } from '@core/token/token.module'
import { ExceptionModule } from '@core/exceptions/exception.module'
import { MailModule } from '@core/mail/mail.module'

import { AuthModule } from '@modules/auth/auth.module'
import { UsersModule } from '@modules/users/users.module'
import { HealthcheckModule } from '@modules/healthcheck/healthcheck.module'
import { PostsModule } from '@modules/posts/posts.module'
import { ChatModule } from '@modules/chat/chat.module'

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    TokenModule,
    ExceptionModule,
    UsersModule,
    MailModule,
    PostsModule,
    HealthcheckModule,
    ChatModule,
    PostsModule
  ]
})
export class AppModule {}
