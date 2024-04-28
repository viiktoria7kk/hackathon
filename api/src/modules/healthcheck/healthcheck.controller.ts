import { Controller, Get } from '@nestjs/common'

@Controller('')
export class HealthcheckController {
  @Get('ping')
  async ping() {
    return 'pong'
  }
}
