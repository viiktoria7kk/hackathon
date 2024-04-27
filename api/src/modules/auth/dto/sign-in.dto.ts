import { Roles } from '@prisma/client'
import { IsEmail, IsIn, IsString } from 'class-validator'

export class SignInDto {
  @IsEmail()
  email: string

  @IsString()
  password: string

  @IsIn([Roles.USER, Roles.VOLUNTEER])
  role: Roles
}
