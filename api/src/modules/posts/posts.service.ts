import { Injectable } from '@nestjs/common'
import { PrismaService } from '@core/prisma/prisma.service'
import { Categories, Posts } from '@prisma/client'

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async getAllPosts(): Promise<Posts[]> {
    return await this.prisma.posts.findMany({
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            avatar: true
          }
        }
      }
    })
  }

  async getPostById(id: string): Promise<Posts | null> {
    try {
      return await this.prisma.posts.findUnique({
        where: { id },
        include: {
          user: {
            select: {
              firstName: true,
              lastName: true,
              avatar: true
            }
          }
        }
      })
    } catch (error) {
      throw new Error(`Post with id ${id} not found`)
    }
  }

  async createPost(data: Posts): Promise<Posts> {
    try {
      return await this.prisma.posts.create({ data })
    } catch (error) {
      throw error
    }
  }

  async updatePost(params: {
    where: { id: string }
    data: Partial<Posts>
  }): Promise<Posts> {
    const { where, data } = params
    try {
      const existingPost = await this.getPostById(where.id)
      if (!existingPost) {
        throw new Error(`Post with id ${where.id} not found`)
      }
      return await this.prisma.posts.update({ where, data })
    } catch (error) {
      throw error
    }
  }

  async deletePost(where: { id: string }): Promise<Posts> {
    return await this.prisma.posts.delete({ where })
  }

  async getPostsByTitle(title: string): Promise<Posts[]> {
    return await this.prisma.posts.findMany({
      where: { title }
    })
  }

  async getPostsByCategory(category: Categories): Promise<Posts[]> {
    return await this.prisma.posts.findMany({
      where: { category }
    })
  }

  async getPostsByAuthor(userId: string): Promise<Posts[]> {
    return await this.prisma.posts.findMany({
      where: { userId }
    })
  }
}
