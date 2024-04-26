import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { CryptoService, InjectCrypto } from '@seishinverse/crypto'

import { SignUpDto } from '@modules/auth/dto/sign-up.dto'
import { SignInDto } from '@modules/auth/dto/sign-in.dto'

import { PrismaService } from '@core/prisma/prisma.service'
import { TokenService } from '@core/token/token.service'

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly tokenService: TokenService,

    @InjectCrypto()
    private readonly cryptoService: CryptoService
  ) {}

  async signUp(dto: SignUpDto) {
    const { email, firstName, lastName, role, password } = dto

    const isExistingUser = await this.prismaService.user.findFirst({
      where: { email, role }
    })

    if (isExistingUser) {
      throw new BadRequestException(
        'Користувач з цією поштою і роллю вже існує'
      )
    }

    const hashedPassword = this.cryptoService.hash(
      password,
      this.cryptoService.genSalt(10)
    )

    await this.prismaService.user.create({
      data: {
        email,
        firstName,
        lastName,
        role,
        password: hashedPassword
      }
    })
  }

  async signIn(dto: SignInDto) {
    const { email, password, role } = dto

    const isExistingUser = await this.prismaService.user.findFirst({
      where: { email, role }
    })

    if (!isExistingUser) throw new NotFoundException('Користувача не знайдено')

    const isValidPassword = this.cryptoService.compare(
      password,
      isExistingUser.password
    )

    if (!isValidPassword) throw new BadRequestException('Некоректний пароль')

    const accessToken = await this.tokenService.generateAccessToken({
      id: isExistingUser.id,
      role: isExistingUser.role
    })

    return {
      accessToken
    }
  }
}
