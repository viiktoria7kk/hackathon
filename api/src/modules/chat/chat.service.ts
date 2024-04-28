import { PrismaService } from '@core/prisma/prisma.service'
import { Injectable } from '@nestjs/common'
import { Chat } from '@prisma/client'

@Injectable()
export class ChatService {
  constructor(private readonly prisma: PrismaService) {}

  createMessage(data: Chat) {
    return this.prisma.chat.create({
      data
    })
  }

  async getUserData(userId: string) {
    return this.prisma.user.findUnique({
      where: {
        id: userId
      },
      select: {
        avatar: true,
        firstName: true,
        lastName: true
      }
    })
  }

  getMessages(): Promise<Chat[]> {
    return this.prisma.chat.findMany()
  }
}
