import { Module } from '@nestjs/common'
import { ChatController } from './chat.controller'
import { ChatService } from './chat.service'
import { ChatGateway } from './chat.gateway'
import { PrismaService } from '@core/prisma/prisma.service'

@Module({
  controllers: [ChatController],
  providers: [ChatService, ChatGateway, PrismaService]
})
export class ChatModule {}
