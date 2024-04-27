import { PrismaService } from '@core/prisma/prisma.service'
import { Injectable } from '@nestjs/common'
import { Prisma, Chat } from '@prisma/client'
import { Socket } from 'socket.io'

@Injectable()
export class ChatService {
  constructor(private readonly prisma: PrismaService) {}

  createMessage(data: Prisma.ChatCreateInput) {
    return this.prisma.chat.create({
      data
    })
  }

  getMessages(): Promise<Chat[]> {
    return this.prisma.chat.findMany()
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
}
