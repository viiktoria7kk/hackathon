import * as jwt from 'jsonwebtoken'
import { randomBytes } from 'crypto'

import { Injectable } from '@nestjs/common'

import { PrismaService } from '@core/prisma/prisma.service'
import { env } from '@core/configs/env.config'
import { IBasicTokenPayload } from '@core/token/token.interface'

@Injectable()
export class TokenService {
  constructor(private readonly prismaService: PrismaService) {}

  async generateAccessToken<P extends IBasicTokenPayload>(payload: P) {
    const token = jwt.sign(payload, env.ACCESS_TOKEN_SECRET_KEY, {
      expiresIn: env.ACCESS_TOKEN_EXPIRES_IN
    })

    return token
  }

  generateRandomToken(size: number) {
    return randomBytes(size)
      .toString('base64')
      .replace(/=/g, '')
      .replace(/\//g, '')
      .replace(/\+/g, '')
  }

  validateAccessToken(token: string) {
    return jwt.verify(token, env.ACCESS_TOKEN_SECRET_KEY)
  }
}
