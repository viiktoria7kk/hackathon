import { create } from 'zustand'
import { userService } from '~/services/user'
import type { UserType } from '~/types'

type UserStore = {
  user: UserType | null
  accessToken: string | null
  createUser: (user: UserType) => Promise<void>
  updateUser: (user: UserType) => Promise<void>
  deleteUser: () => Promise<void>
  isLoading: boolean
  error: unknown
}

export const useUserStore = create<UserStore>((set, get) => ({
  user: null,
  accessToken: localStorage.getItem('ACCESS_TOKEN') || null,
  createUser: async (user) => {
    set({ isLoading: true })
    try {
      const newUser = await userService.createUser(user)
      set({ user: newUser, isLoading: false })
    } catch (error) {
      set({ error, isLoading: false })
    }
  },
  updateUser: async (user) => {
    set({ isLoading: true })
    try {
      const updatedUser = await userService.updateUser(user)
      set({ user: updatedUser, isLoading: false })
    } catch (error) {
      set({ error, isLoading: false })
    }
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
  isLoading: false,
  error: null
}))
