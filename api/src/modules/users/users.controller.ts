import { UsersService } from '@modules/users/users.service'
import { User } from '@prisma/client'
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  UseGuards
} from '@nestjs/common'
import { AuthGuard } from '@core/guards/auth.guard'

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

  @Get('email/:email')
  async getUserByEmail(@Param('email') email: string): Promise<User | null> {
    return await this.usersService.getUserByEmail(email)
  }
}
