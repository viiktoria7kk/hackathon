import { create } from 'zustand'
import { userService } from '~/services/user'
import type { UserFormType, UserType, RequestType } from '~/types'
import { Role } from '~/constants/enums'
import { toast } from 'sonner'
import { requests } from '~/constants/requests'

type UserStore = {
  user: UserType | null
  accessToken: string | null
  getUser: (id: string) => Promise<void>
  updateUser: (user: UserFormType) => void
  deleteUser: () => Promise<void>
  requestById: (id: string) => RequestType | undefined
  createRequest: (request: RequestType) => void
  updataRequest: (request: RequestType) => void
  deleteRequest: (id: string) => void
  isLoading: boolean
  error: unknown
}

export const user: UserType = {
  id: '74304823048230948320948',
  firstName: 'Viktoriia',
  lastName: 'Kostak',
  email: 'viktoriakostak579@gmail.com',
  password: 'rkoepri0493i2-ir3pir0-23jr2r0k2r32-03rr',
  phone: '+380 99 999 99 99',
  bio: 'Мене звуть Вікторія Костак, і я віддана справі благодійності та допомоги людям у потребі. Я засновниця фонду "Добра Дія" і активно підтримую дітей з малозабезпечених сімей, організовуючи збори коштів для лікування хворих та сприяючи розвитку освіти й культури серед вразливих груп населення. Крім того, маю вражаючі навички у back-end розробці і завжди відкрита до можливостей отримати оффер у цій галузі.',
  role: Role.USER,
  requests,
  avatar:
    'https://media.discordapp.net/attachments/1167013602436333570/1233888723738038422/399574366_319409037486614_5708100644022967783_n.jpg?ex=662ebbec&is=662d6a6c&hm=f9d113af73faf5749d632dd9758db7ca82e629070789f58c255a5f4e8c6ea21e&=&format=webp&width=662&height=662'
}

export const useUserStore = create<UserStore>((set, get) => ({
  user: null,
  accessToken: localStorage.getItem('ACCESS_TOKEN') || null,
  getUser: async (id) => {
    if (!id) return set({ error: 'User ID is required' })
    set({ isLoading: true })
    try {
      const fetchedUser = await userService.getUser(id)
      set({
        user: {
          ...fetchedUser,
          requests,
          avatar:
            'https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png'
        },
        isLoading: false
      })
    } catch (error) {
      set({ error, isLoading: false })
    }
  },
  updateUser: (data) => {
    const currentUser = get().user
    if (!currentUser) return
    const newUser = { ...currentUser, ...data, avatar: data.avatar! }
    set({ user: newUser })
    toast.success('Profile updated successfully!')
  },
  deleteUser: async () => {
    set({ isLoading: true })
    try {
      const { user } = get()
      if (user) {
        await userService.deleteUser(user.id)
        set({ user: null, isLoading: false })
      }
    } catch (error) {
      set({ error, isLoading: false })
    }
  },
  requestById: (id) => {
    const user = get().user
    if (!user) return
    const request = user.requests.find((request) => request.id === id)
    if (request) return request
    return undefined
  },
  updataRequest: (request) => {
    const user = get().user
    if (!user) return
    const updatedRequests = user.requests.map((item) =>
      item.id === request.id ? { ...item, ...request } : item
    )
    set({ user: { ...user, requests: updatedRequests } })
  },
  createRequest: (request) => {
    const user = get().user
    if (!user) return
    const updatedRequests = [request, ...user.requests]
    set({ user: { ...user, requests: updatedRequests } })
  },
  deleteRequest: (id) => {
    const user = get().user
    if (!user) return
    const updatedRequests = user.requests.filter((request) => request.id !== id)
    set({ user: { ...user, requests: updatedRequests } })
  },
  isLoading: false,
  error: null
}))
