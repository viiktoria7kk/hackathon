import { create } from 'zustand'
import { requestsService } from '~/services/requests'
import type { RequestType } from '~/types'

type RequestsStore = {
  requests: RequestType[]
  request: RequestType | null
  getRequests: () => Promise<void>
  getRequestById: (id: string) => Promise<void>
  createRequest: (request: RequestType) => void
  updateRequest: (request: RequestType) => void
  deleteRequest: (request: RequestType) => void
  isLoading: boolean
  error: unknown
}
export const request = {
  id: '1',
  title: 'Родина ВПО потребує допомоги.',
  description: 'This is the first post',
  createdAt: '2021-07-01T00:00:00.000Z',
  content: 'This is the first post content',
  category: 'First Category',
  isActive: true,
  user_id: 1,
  createdBy: 'First User'
}
export const requests = [
  {
    id: '1',
    title: 'Родина asd допомоги.',
    description:
      'Ви чи ваші близькі опинилися в складній ситуації і потребують допомоги? Наша команда готова стати на вашу сторону. Коли життя принесе несподівані випробування, важливо мати підтримку. Незалежно від того, чи потрібні фінансова допомога, консультація або просто плече для вислуховування, ми тут, щоб надати вам допомогу.',
    createdAt: '2021-07-01T00:00:00.000Z',
    content: 'This is the first post content',
    category: 'Правова допомога',
    isActive: true,
    user_id: 1,
    user: {
      firstName: 'vikaaa',
      lastName: 'z',
      avatar: null
    }
  },

  {
    id: '2',
    title: 'Родина dddd потребує допомоги.',
    description:
      'Ви чи ваші близькі опинилися в складній ситуації і потребують допомоги? Наша команда готова стати на вашу сторону. Коли життя принесе несподівані випробування, важливо мати підтримку. Незалежно від того, чи потрібні фінансова допомога, консультація або просто плече для вислуховування, ми тут, щоб надати вам допомогу.',
    createdAt: '2021-07-02T00:00:00.000Z',
    content: 'This is the second post content',
    category: 'Правова допомога',
    isActive: true,
    user_id: 2,
    user: {
      firstName: 'vikaaa',
      lastName: 'z',
      avatar: null
    }
  },

  {
    id: '3',
    title: 'asdasdsad ВПО потребує допомоги.',
    description:
      'Ви чи ваші близькі опинилися в складній ситуації і потребують допомоги? Наша команда готова стати на вашу сторону. Коли життя принесе несподівані випробування, важливо мати підтримку. Незалежно від того, чи потрібні фінансова допомога, консультація або просто плече для вислуховування, ми тут, щоб надати вам допомогу.',
    createdAt: '2021-07-03T00:00:00.000Z',
    content: 'This is the third post content',
    category: 'Категорії',
    isActive: true,
    user_id: 3,
    user: {
      firstName: 'vikaaa',
      lastName: 'z',
      avatar: null
    }
  }
]

for (let i = 4; i <= 15; i++) {
  requests.push({
    id: `${i}`,
    title: `qwe ВПО потребує допомоги.`,
    description:
      'Ви чи ваші близькі опинилися в складній ситуації і потребують допомоги? Наша команда готова стати на вашу сторону. Коли життя принесе несподівані випробування, важливо мати підтримку. Незалежно від того, чи потрібні фінансова допомога, консультація або просто плече для вислуховування, ми тут, щоб надати вам допомогу.',
    createdAt: `2021-07-0${i}T00:00:00.000Z`,
    content: `This is the ${i}th post content`,
    category: 'Правова допомога',
    isActive: true,
    user_id: i,
    user: {
      firstName: 'vikaaa',
      lastName: 'z',
      avatar: null
    }
  })
}
export const useRequestsStore = create<RequestsStore>((set) => ({
  requests: requests,
  request: null,
  isLoading: false,
  error: null,
  getRequests: async () => {
    set({ isLoading: true })
    try {
      const requests = await requestsService.getRequests()
      set({ requests })
      set({ isLoading: false })
    } catch (error) {
      const err =
        error && typeof error === 'object' && 'message' in error
          ? error.message
          : error
      set({
        error: err,
        isLoading: false
      })
    }
  },
  getRequestById: async (id: string) => {
    set({ isLoading: true })
    try {
      const request = await requestsService.getRequestById(id)
      set({ request })

      set({ isLoading: false })
    } catch (error) {
      set({ isLoading: false })
    }
  },
  deleteRequest: (request) =>
    set((state) => ({
      requests: state.requests.filter((r) => r.id !== request.id)
    })),
  updateRequest: (request) =>
    set((state) => ({
      requests: state.requests.map((r) => (r.id === request.id ? request : r))
    })),
  createRequest: (request) =>
    set((state) => ({ requests: [...state.requests, request] }))
}))
