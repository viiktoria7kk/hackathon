import { Body, Controller, Post } from '@nestjs/common'

import { AuthService } from '@modules/auth/auth.service'
import { SignUpDto } from '@modules/auth/dto/sign-up.dto'
import { SignInDto } from '@modules/auth/dto/sign-in.dto'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  async signUp(@Body() dto: SignUpDto) {
    return this.authService.signUp(dto)
  }

  @Post('sign-in')
  async signIn(@Body() dto: SignInDto) {
    return this.authService.signIn(dto)
  }
}
