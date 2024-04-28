import { ReactElement } from 'react'

import { Role } from '~/constants/enums'
import { Categories } from '~/containers/home/constants'

export enum ProfileTabsEnum {
  Profile = 'profile',
  Posts = 'posts',
  EditProfile = 'edit-profile'
}

export type ProfileTab = {
  title: string
  content: ReactElement
  icon: ReactElement
}

export type ProfileTabsData = {
  [key in ProfileTabsEnum]: ProfileTab
}

export type UserType = {
  id: string
  firstName: string
  lastName: string
  email: string
  role: Role.USER | Role.VOLUNTEER
  avatar: string | null
  password: string
  bio?: string
  phone?: string
  requests: RequestType[]
}

export type UserFormType = Omit<
  UserType,
  'id' | 'password' | 'role' | 'requests'
>

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

export type ChatMessage = {
  id: string
  userId: string
  name: string
  message: string
  time: string
  avatar: string
}
