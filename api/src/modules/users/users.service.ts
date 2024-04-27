import { PrismaService } from '@core/prisma/prisma.service'
import { SUPABASE_STORAGE, FileService } from '@seishinverse/storage-manager'
import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { User } from '@prisma/client'

@Injectable()
export class UsersService {
  constructor(
    private prismaService: PrismaService,

    @Inject(SUPABASE_STORAGE)
    private readonly fileService: FileService
  ) {}

  async getAllUsers(): Promise<User[]> {
    return await this.prismaService.user.findMany()
  }

  async getUserById(id: string): Promise<User | null> {
    try {
      return await this.prismaService.user.findUnique({ where: { id } })
    } catch (error) {
      throw new NotFoundException(`User with id ${id} not found`)
    }
  }

  async createUser(data: User): Promise<User> {
    return await this.prismaService.user.create({ data })
  }

  async saveFile() {}

  async updateUser(params: {
    where: { id: string }
    data: Partial<User>
  }): Promise<User> {
    const { where, data } = params
    try {
      const existingUser = await this.getUserById(where.id)
      if (!existingUser) {
        throw new NotFoundException(`User with id ${where.id} not found`)
      }
      return await this.prismaService.user.update({ where, data })
    } catch (error) {
      throw error
    }
  }

  async deleteUser(where: { id: string }): Promise<User> {
    const existingUser = await this.getUserById(where.id)
    if (!existingUser) {
      throw new NotFoundException(`User with id ${where.id} not found`)
    }
    return await this.prismaService.user.delete({ where })
  }

  async getUserByEmail(email: string): Promise<User | null> {
    try {
      return await this.prismaService.user.findFirst({ where: { email } })
    } catch (error) {
      throw error
    }
  }
}
