import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { Roles } from '@prisma/client'

export interface IUserRequestPayload {
  id: string
  role: Roles
}

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest()
    return request.user
  }
)
