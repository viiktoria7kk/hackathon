import { PrismaService } from '@core/prisma/prisma.service'
import {
  APPWRITE_STORAGE,
  IFile,
  FileService
} from '@seishinverse/storage-manager'
import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { User } from '@prisma/client'

@Injectable()
export class UsersService {
  constructor(
    private prismaService: PrismaService,

    @Inject(APPWRITE_STORAGE)
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

  async updateUserAvatarById(id: string, file: IFile) {
    const response = await this.fileService.upload(file)

    if (
      response.success &&
      'url' in response &&
      typeof response.url === 'string'
    ) {
      await this.prismaService.user.update({
        where: { id },
        data: { avatar: response.url }
      })

      return
    }

    throw new BadRequestException(response.error?.message)
  }

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
