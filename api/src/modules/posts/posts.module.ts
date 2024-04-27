import { PrismaModule } from '@core/prisma/prisma.module'
import { Module } from '@nestjs/common'
import { PostsController } from './posts.controller'
import { PostsService } from './posts.service'

@Module({
  controllers: [PostsController],
  imports: [PrismaModule],
  providers: [PostsService],
  exports: [PostsService]
})
export class PostsModule {}
