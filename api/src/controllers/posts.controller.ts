import { PostsService } from 'src/services/posts.service'
import { Posts, Categories } from '@prisma/client'
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'

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

  @Post()
  async createPost(@Body() data: Posts): Promise<Posts> {
    return await this.postsService.createPost(data)
  }

  @Put('/:id')
  async updatePost(
    @Param('id') id: string,
    @Body() data: Partial<Posts>
  ): Promise<Posts> {
    return await this.postsService.updatePost({ where: { id }, data })
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string): Promise<Posts> {
    return await this.postsService.deletePost({ id })
  }

  @Get('title/:title')
  async getPostsByTitle(@Param('title') title: string): Promise<Posts[]> {
    return await this.postsService.getPostsByTitle(title)
  }

  @Get('category/:category')
  async getPostsByCategory(
    @Param('category') category: Categories
  ): Promise<Posts[]> {
    return await this.postsService.getPostsByCategory(category)
  }

  @Get('author/:user_id')
  async getPostsByAuthor(@Param('user_id') user_id: string): Promise<Posts[]> {
    return await this.postsService.getPostsByAuthor(user_id)
  }
}
