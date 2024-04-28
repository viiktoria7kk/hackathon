import { Controller, Get, Post, Body } from '@nestjs/common'
import { ChatService } from './chat.service'
import { Chat } from '@prisma/client'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Chat')
@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get('/')
  async getMessages() {
    return this.chatService.getMessages()
  }

  @Post('/message')
  async createMessage(@Body() data: Chat) {
    return this.chatService.createMessage(data)
  }

  @Post('/message/sender')
  async getMessagesBySender(@Body() data: { senderId: string }) {
    return this.chatService.getMessagesBySender(data.senderId)
  }

  @Post('/message/receiver')
  async getMessagesByReceiver(@Body() data: { receiverId: string }) {
    return this.chatService.getMessagesByReceiver(data.receiverId)
  }
}
