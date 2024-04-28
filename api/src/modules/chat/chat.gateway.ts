import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets'
import { Server } from 'socket.io'
import { ChatService } from './chat.service'

@WebSocketGateway({
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  },
  namespace: 'chat'
})
export class ChatGateway {
  constructor(private chatService: ChatService) {}

  @WebSocketServer()
  server: Server

  @SubscribeMessage('message')
  async handleMessage(@MessageBody() data) {
    const message = await this.chatService.createMessage(data)
    const userData = await this.chatService.getUserData(data.userId)

    const response = {
      message: message.message,
      userId: message.userId,
      lastName: userData.lastName,
      firstName: userData.firstName,
      avatar: userData.avatar
    }
    console.log(response)
    this.server.emit('response', response)
  }
}
