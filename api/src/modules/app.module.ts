import { Module } from '@nestjs/common'
import { PrismaModule } from '../core/prisma/prisma.module'
import { UsersModule } from './users.module'
import { PostsModule } from './posts.module'

@Module({
  imports: [PrismaModule, UsersModule, PostsModule]
})
export class AppModule {}
