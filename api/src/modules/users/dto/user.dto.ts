import { IsEmail, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { Posts } from '.prisma/client'

export class UserDto {
  @ApiProperty({
    description: 'Email of the user',
    example: 'viktoriakostak570@gmail.com'
  })
  @IsEmail()
  email: string

  @ApiProperty({
    description: 'Password of the user',
    example: 'TestPass1!'
  })
  @IsString()
  password: string

  @ApiProperty({
    description: 'First name of the user',
    example: 'Viktoriia'
  })
  @IsString()
  firstName: string

  @ApiProperty({
    description: 'Last name of the user',
    example: 'Kostak'
  })
  @IsString()
  lastName: string

  @ApiProperty({
    description: 'Phone number of the user',
    example: '+380111167'
  })
  @IsString()
  phone: string

  @ApiProperty({
    description: 'Bio of the user',
    example: 'Bio of the user'
  })
  @IsString()
  bio: string

  @ApiProperty({
    description: 'Role of the user',
    example: 'VOLUNTEER'
  })
  @IsString()
  role: string

  @ApiProperty({
    description: 'Avatar of the user',
    example:
      'https://instagram.fudj3-1.fna.fbcdn.net/v/t51.2885-19/399574366_319409037486614_5708100644022967783_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fudj3-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=ZhxZxvuJMSsQ7kNvgHi-CXF&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDT3wziaPWRhUaqiphWHvlDNGJ5zOVBDj3r1-MZI8YFAQ&oe=66343624&_nc_sid=8b3546'
  })
  @IsString()
  avatar: string

  @ApiProperty({
    description: 'Posts of the user',
    example: 'Posts of the user'
  })
  @IsString()
  posts: Posts[]
}
