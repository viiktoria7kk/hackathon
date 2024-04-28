import { Role } from '~/constants/enums'
import { Categories } from '~/containers/home/constants'

export type UserType = {
  id: string
  firstName: string
  lastName: string
  email: string
  role: Role.USER | Role.VOLUNTEER
  avatar: string
  password: string
}

export type RequestType = {
  id: string
  title: string
  description: string
  createdAt: string
  content: string
  category: (typeof Categories)[keyof typeof Categories]
  isActive: boolean
  user_id: number
  user: {
    firstName: string
    lastName: string
    avatar: null | string
  }
}

export type CategoryType = {
  title: string
  category: (typeof Categories)[keyof typeof Categories]
  image: string
}

export type BannerItemType = {
  title: string
  description: string
  image: string
  path: string
  isUser: boolean
}

export type SignInParams = {
  email: string
  password: string
  role: Role.USER | Role.VOLUNTEER
}

export type SignInResponse = {
  accessToken: string
}

export type SignUpParams = {
  lastName: string
  firstName: string
  email: string
  password: string
  confirmPassword: string
  role: Role.USER | Role.VOLUNTEER
}

export type SignUpResponse = {
  accessToken: string
}

export type RequestsCreateParams = {
  title: string
  description: string
  content: string
  category: (typeof Categories)[keyof typeof Categories]
  isActive: boolean
  userId: string
}
