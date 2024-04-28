import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { PrismaService } from '@core/prisma/prisma.service'
import { Categories, Posts, Roles } from '@prisma/client'
import { MailService } from '@core/mail/mail.service'
import { env } from '@core/configs/env.config'
import { IUserRequestPayload } from '@core/decorators/user.decorator'

@Injectable()
export class PostsService {
  constructor(
    private prisma: PrismaService,
    private readonly mailService: MailService
  ) {}

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
      return await this.prisma.posts.create({
        data
      })
    } catch (error) {
      throw error
    }
  }

  async getMyRespondedPosts(user: IUserRequestPayload) {
    const { id, role } = user

    if (role !== Roles.VOLUNTEER)
      throw new BadRequestException('Ти не є волонтером')

    return await this.prisma.respondedPosts.findMany({
      where: { volunteerId: id }
    })
  }

  async respondToPost(postId: string, volunteerId: string) {
    const post = await this.prisma.posts.findFirst({
      where: { id: postId },
      include: { user: true }
    })
    if (!post) throw new NotFoundException('Не знайдено')

    if (post.userId === volunteerId)
      throw new BadRequestException('Ти не можеш відгукнутись на свій пост')

    const volunteer = await this.prisma.user.findFirst({
      where: { id: volunteerId }
    })

    if (volunteer.role !== Roles.VOLUNTEER)
      throw new ForbiddenException('Ти не волонтер')

    await this.prisma.respondedPosts.create({ data: { postId, volunteerId } })

    await this.mailService.sendMail({
      from: 'HopeHand <hopehand@gmail.com>',
      subject: 'Відгук волонтера на ваш запит про допомогу',
      text: '',
      to: post.user.email,
      html: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Відгук волонтера на ваш запит про допомогу</title>
      </head>
      <body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
              <tr>
                  <td style="padding: 20px;">
                      <h2 style="color: #333;">Відгук волонтера на ваш запит про допомогу</h2>
                      <p>Шановний(а) ${post.user.firstName},</p>
                      <p>Волонтер відгукнувся на ваш пост про допомогу та готовий надати вам допомогу. Щоб отримати більше інформації та зв'язатися з волонтером, будь ласка, перейдіть на наш веб-сайт за посиланням:</p>
                      <p><a href="${env.FRONTEND_URL}" style="text-decoration: none; color: #007bff;">Перейти на веб-сайт</a></p>
                      <p>Дякуємо за ваш запит та сподіваємося, що вам вдалося знайти потрібну допомогу.</p>
                      <p>З повагою,<br>Ваша команда підтримки HopeHand</p>
                  </td>
              </tr>
          </table>
      </body>
      </html>
      `
    })
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

  async getPostsByTitleAndCategory(params: {
    title: string
    category: Categories
  }): Promise<Posts[]> {
    const { title, category } = params
    return await this.prisma.posts.findMany({
      where: {
        title,
        category
      }
    })
  }
}
