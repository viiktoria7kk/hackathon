import { Controller, Get } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Healthcheck')
@Controller('')
export class HealthcheckController {
  @Get('ping')
  async ping() {
    return 'pong'
  }
}
