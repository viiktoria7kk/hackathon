import { UsersService } from 'src/services/users.service'
import { User } from '@prisma/client'
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'

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

  @Post()
  async createUser(@Body() data: User): Promise<User> {
    return await this.usersService.createUser(data)
  }

  @Put('/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() data: Partial<User>
  ): Promise<User> {
    return await this.usersService.updateUser({ where: { id }, data })
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return await this.usersService.deleteUser({ id })
  }

  @Get('email/:email')
  async getUserByEmail(@Param('email') email: string): Promise<User | null> {
    return await this.usersService.getUserByEmail(email)
  }
}
