import { Module } from '@nestjs/common'
import { CryptoModule } from '@seishinverse/crypto'

import { AuthService } from '@modules/auth/auth.service'
import { AuthController } from '@modules/auth/auth.controller'

@Module({
  imports: [CryptoModule.forRoot({ isGlobal: false })],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
