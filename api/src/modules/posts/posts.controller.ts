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
import { IUserRequestPayload, User } from '@core/decorators/user.decorator'
import { ApiTags } from '@nestjs/swagger'
import { CreatePostDto } from './dto/create.post.dto'

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  async getAllPosts(): Promise<Posts[]> {
    return await this.postsService.getAllPosts()
  }

  @UseGuards(AuthGuard)
  @Get('responds')
  async getMyPostResponds(@User() user: IUserRequestPayload) {
    return await this.postsService.getMyRespondedPosts(user)
  }

  @Get(':id')
  async getPostById(@Param('id') id: string): Promise<Posts | null> {
    return await this.postsService.getPostById(id)
  }

  @UseGuards(AuthGuard)
  @Post()
  async createPost(@Body() data: CreatePostDto): Promise<Posts> {
    return await this.postsService.createPost(data)
  }

  @UseGuards(AuthGuard)
  @Post(':id/respond')
  async respondToPost(
    @Param('id') id: string,
    @User() user: IUserRequestPayload
  ) {
    return this.postsService.respondToPost(id, user.id)
  }

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
