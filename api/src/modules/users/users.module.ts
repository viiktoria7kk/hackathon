import { Module } from '@nestjs/common'
import { APPWRITE_STORAGE, FileService } from '@seishinverse/storage-manager'

import { UsersController } from '@modules/users/users.controller'
import { UsersService } from '@modules/users/users.service'

import { env } from '@core/configs/env.config'
import { appWriteConfig } from '@core/configs/file-storage.config'
import { AppWriteStorage } from '@core/file-storage/appwrite.storage'

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: APPWRITE_STORAGE,
      useFactory: () =>
        new FileService({
          storage: new AppWriteStorage(appWriteConfig),
          bucket: env.APPWRITE_BUCKET_NAME,
          include: { url: true, key: false },
          naming: { random: true },
          limits: {
            extensions: { include: ['.png', '.jpeg', '.jpg', '.webp'] }
          }
        })
    }
  ]
})
export class UsersModule {}
