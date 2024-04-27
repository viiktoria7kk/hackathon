import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'
import { ChatService } from './chat.service'
import { Prisma } from '@prisma/client'
import { env } from '@core/configs/env.config'

@WebSocketGateway({
  cors: {
    origin: env.FRONTEND_URL,
    methods: ['GET', 'POST']
  }
})
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private chatService: ChatService) {}
  @WebSocketServer()
  server: Server

  @SubscribeMessage('sendMessage')
  async handleMessage(payload: Prisma.ChatCreateInput): Promise<void> {
    await this.chatService.createMessage(payload)
    this.server.emit('recMessage', payload)
  }

  afterInit() {
    console.log('Init')
  }

  handleConnection(client: Socket) {
    if (client.handshake.query.token) {
      this.chatService.addClient(client)
      this.server.emit('clients', this.chatService.getClients())
    }
  }

  handleDisconnect(client: Socket) {
    this.chatService.removeClient(client)
    this.server.emit('clients', this.chatService.getClients())
  }
}
