import { Controller, Get } from '@nestjs/common'
import { ChatService } from './chat.service'
import { Socket } from 'socket.io'

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get('/')
  async getMessages() {
    return this.chatService.getMessages()
  }

  @Get('/clients')
  async getClients() {
    return this.chatService.getClients()
  }

  @Get('/add-client')
  async addClient(client: Socket) {
    return this.chatService.addClient(client)
  }

  @Get('/remove-client')
  async removeClient(client: Socket) {
    return this.chatService.removeClient(client)
  }

  @Get('/set-clients')
  async setClients(clients: Socket[]) {
    return this.chatService.setClients(clients)
  }
}
