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

export const useRequestsStore = create<RequestsStore>((set) => ({
  requests: [],
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
