import { Module } from '@nestjs/common'

import { HealthcheckController } from '@modules/healthcheck/healthcheck.controller'

@Module({
  controllers: [HealthcheckController]
})
export class HealthcheckModule {}
