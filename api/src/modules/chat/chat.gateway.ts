import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'
import { ChatService } from './chat.service'
import { Chat } from '@prisma/client'

@WebSocketGateway({
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  },

  namespace: 'chat'
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private chatService: ChatService) {}

  @WebSocketServer()
  server: Server

  @SubscribeMessage('message')
  async handleMessage(@MessageBody() data: Chat) {
    const message = await this.chatService.createMessage(data)
    this.server.emit('message', message)
  }

  @SubscribeMessage('message/sender')
  async getMessagesBySender(@MessageBody() data: { senderId: string }) {
    const messages = await this.chatService.getMessagesBySender(data.senderId)
    this.server.emit('message/sender', messages)
  }

  @SubscribeMessage('message/receiver')
  async getMessagesByReceiver(@MessageBody() data: { receiverId: string }) {
    const messages = await this.chatService.getMessagesByReceiver(
      data.receiverId
    )
    this.server.emit('message/receiver', messages)
  }

  handleConnection(@ConnectedSocket() client: Socket) {
    if (!this.chatService.getClientId(client.id))
      this.chatService.addClient(client)
  }

  handleDisconnect(@ConnectedSocket() client: Socket) {
    this.chatService.removeClient(client)
    client.disconnect()
  }
}
