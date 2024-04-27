import { Categories } from '~/containers/home/constants'

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
