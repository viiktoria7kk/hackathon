import { Roles } from '@prisma/client'
import { IsEmail, IsIn, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class SignInDto {
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
    description: 'Role of the user',
    example: 'VOLUNTEER'
  })
  @IsIn([Roles.USER, Roles.VOLUNTEER])
  role: Roles
}
