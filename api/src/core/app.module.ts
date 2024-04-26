import { Module } from '@nestjs/common'

import { PrismaModule } from '@core/prisma/prisma.module'
import { TokenModule } from '@core/token/token.module'
import { ExceptionModule } from '@core/exceptions/exception.module'

import { AuthModule } from '@modules/auth/auth.module'

@Module({
  imports: [PrismaModule, AuthModule, TokenModule, ExceptionModule]
})
export class AppModule {}
