import { Module } from '@nestjs/common'
import { PrismaModule } from '@core/prisma/prisma.module'
import { PostsService } from 'src/services/posts.service'
import { PostsController } from 'src/controllers/posts.controller'

@Module({
  controllers: [PostsController],
  imports: [PrismaModule],
  providers: [PostsService],
  exports: [PostsService]
})
export class PostsModule {}
