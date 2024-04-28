import { IUserRequestPayload } from '@core/decorators/user.decorator'
import { TokenService } from '@core/token/token.service'
import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly tokenService: TokenService,

    private readonly reflector: Reflector
  ) {}

  async canActivate(context: ExecutionContext) {
    const request = context
      .switchToHttp()
      .getRequest<Request & { user: IUserRequestPayload }>()

    const isPublic = this.reflector.getAllAndOverride<boolean>('isPublic', [
      context.getClass(),
      context.getHandler()
    ])

    if (isPublic) return true

    const authHeader = request.headers['authorization']

    if (!authHeader) throw new BadRequestException('Ви не авторизовані')

    if (!authHeader.startsWith('Bearer') || authHeader.split(' ').length != 2)
      throw new BadRequestException('Токен має бути формату Bearer <token>')

    const [, token] = authHeader.split(' ')

    const isValidToken = this.tokenService.validateAccessToken(token)

    request.user = {
      id: isValidToken.id,
      role: isValidToken.role
    }

    if (!isValidToken) throw new BadRequestException('Час сесії вичерпався')

    return true
  }
}
