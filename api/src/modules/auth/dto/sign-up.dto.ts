import { Roles } from '@prisma/client'
import {
  IsString,
  IsEmail,
  IsIn,
  IsOptional,
  IsStrongPassword
} from 'class-validator'

export class SignUpDto {
  @IsString()
  firstName: string

  @IsString()
  lastName: string

  @IsEmail()
  email: string

  @IsIn([Roles.USER, Roles.VOLUNTEER])
  role: Roles

  @IsOptional()
  @IsString()
  avatar: string

  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    minUppercase: 1
  })
  password: string
}
