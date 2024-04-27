import { Role } from '~/constants/enums'
import { Categories } from '~/containers/Home/constants'

export type RequestType = {
  id: string
  title: string
  description: string
  createdAt: string
  content: string
  category: string
  isActive: boolean
  user_id: number
  createdBy: string
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

export type SignInData = {
  email: string
  password: string
  role: Role.USER | Role.VOLUNTEER
}

export type SignUpData = {
  lastName: string
  firstName: string
  email: string
  password: string
  confirmPassword: string
  role: Role.USER | Role.VOLUNTEER
}
