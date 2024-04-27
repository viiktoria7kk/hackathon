import { Module } from '@nestjs/common'
import { FileService, SUPABASE_STORAGE } from '@seishinverse/storage-manager'

import { UsersController } from '@modules/users/users.controller'
import { UsersService } from '@modules/users/users.service'

import { env } from '@core/configs/env.config'
import { SupabaseStorage } from '@core/file-storage/supabase.storage'
import { supabaseConfig } from '@core/configs/file-storage.config'

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: SUPABASE_STORAGE,
      useFactory: () =>
        new FileService({
          storage: new SupabaseStorage(supabaseConfig),
          bucket: env.SUPABASE_BUCKET_NAME,
          include: { url: true, key: true }
        })
    }
  ]
})
export class UsersModule {}
