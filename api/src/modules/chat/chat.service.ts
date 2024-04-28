import { PrismaService } from '@core/prisma/prisma.service'
import { Injectable } from '@nestjs/common'
import { Chat } from '@prisma/client'
import { Socket } from 'socket.io'

@Injectable()
export class ChatService {
  constructor(private readonly prisma: PrismaService) {
    this.#clients = []
  }

  createMessage(data: Chat): Promise<Chat> {
    return this.prisma.chat.create({
      data
    })
  }

  getMessages(): Promise<Chat[]> {
    return this.prisma.chat.findMany()
  }

  getMessagesBySender(senderId: string): Promise<Chat[]> {
    return this.prisma.chat.findMany({
      where: {
        senderId
      }
    })
  }

  getMessagesByReceiver(receiverId: string): Promise<Chat[]> {
    return this.prisma.chat.findMany({
      where: {
        receiverId
      }
    })
  }

  #clients: Socket[]
  setClients(clients: Socket[]) {
    this.#clients = clients
  }

  getClients() {
    return this.#clients
  }

  addClient(client: Socket) {
    this.#clients.push(client)
  }

  removeClient(client: Socket) {
    this.#clients = this.#clients.filter((c) => c.id !== client.id)
  }

  getClientId(id: string) {
    if (this.#clients) {
      return this.#clients.find((c) => c.id === id)
    }
    return null
  }
}
