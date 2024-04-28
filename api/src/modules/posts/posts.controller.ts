import { PostsService } from './posts.service'
import { Posts } from '@prisma/client'
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards
} from '@nestjs/common'
import { AuthGuard } from '@core/guards/auth.guard'

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  async getAllPosts(): Promise<Posts[]> {
    return await this.postsService.getAllPosts()
  }

  @Get(':id')
  async getPostById(@Param('id') id: string): Promise<Posts | null> {
    return await this.postsService.getPostById(id)
  }

  @UseGuards(AuthGuard)
  @Post()
  async createPost(@Body() data: Posts): Promise<Posts> {
    return await this.postsService.createPost(data)
  }

  @UseGuards(AuthGuard)
  @Put('/:id')
  async updatePost(
    @Param('id') id: string,
    @Body() data: Partial<Posts>
  ): Promise<Posts> {
    return await this.postsService.updatePost({ where: { id }, data })
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async deletePost(@Param('id') id: string): Promise<Posts> {
    return await this.postsService.deletePost({ id })
  }
}
