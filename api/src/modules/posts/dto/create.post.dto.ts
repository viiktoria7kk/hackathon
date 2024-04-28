import { IsBoolean, IsNotEmpty, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { Categories } from '.prisma/client'

export class CreatePostDto {
  @ApiProperty({
    description: 'Title of the post',
    example: 'Please, i need help'
  })
  @IsString()
  @IsNotEmpty()
  title: string

  @ApiProperty({
    description: 'Description of the post',
    example: 'Description of the post'
  })
  @IsString()
  @IsNotEmpty()
  description: string

  @ApiProperty({
    description: 'Content of the post',
    example: 'Content of the post'
  })
  @IsString()
  @IsNotEmpty()
  content: string

  @ApiProperty({
    description: 'Category of the post',
    example: 'Category of the post'
  })
  @IsString()
  @IsNotEmpty()
  category: Categories

  @ApiProperty({
    description: 'Is active post',
    example: true
  })
  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean

  @ApiProperty({
    description: 'User id',
    example: 'User id'
  })
  @IsString()
  @IsNotEmpty()
  userId: string

  // id String @id @default(uuid())
  // title String
  // description String
  // content String
  // category Categories
  // isActive Boolean @default(true) @map("is_active")
  // createdAt DateTime @default(now()) @map("created_at")
  // userId String @map("user_id")
  // user User @relation(fields: [userId], references: [id])

  //add al mising fields
  //created at delault now

  @ApiProperty({
    description: 'Created at',
    example: 'Created at',
    default: 'now()'
  })
  @IsString()
  @IsNotEmpty()
  createdAt: string
}
