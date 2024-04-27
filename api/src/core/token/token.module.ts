import { Global, Module } from '@nestjs/common'

import { TokenService } from '@core/token/token.service'

@Global()
@Module({
  providers: [TokenService],
  exports: [TokenService]
})
export class TokenModule {}
