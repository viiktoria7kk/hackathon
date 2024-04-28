import { UsersService } from '@modules/users/users.service'
import { User } from '@prisma/client'
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors
} from '@nestjs/common'
import { AuthGuard } from '@core/guards/auth.guard'
import { FileInterceptor } from '@nestjs/platform-express'
import { IFile } from '@seishinverse/storage-manager'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return await this.usersService.getAllUsers()
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User | null> {
    return await this.usersService.getUserById(id)
  }

  @UseGuards(AuthGuard)
  @Patch(':id/avatar')
  @UseInterceptors(
    FileInterceptor('avatar', {
      limits: { fileSize: 15 * 1024 * 1024, files: 1 }
    })
  )
  async saveFile(@Param('id') id: string, @UploadedFile() file: IFile) {
    return this.usersService.updateUserAvatarById(id, file)
  }

  @UseGuards(AuthGuard)
  @Put('/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() data: Partial<User>
  ): Promise<User> {
    return await this.usersService.updateUser({ where: { id }, data })
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return await this.usersService.deleteUser({ id })
  }
}
