import { create } from 'zustand'
import { requests } from '~/constants/requests'
import type { RequestType } from '~/types'

type RequestsStore = {
  requests: RequestType[]
  createRequest: (request: RequestType) => void
  updateRequest: (request: RequestType) => void
  deleteRequest: (request: RequestType) => void
  loading: boolean
  error: string | null
}

export const useRequestsStore = create<RequestsStore>((set) => ({
  requests,
  loading: false,
  error: null,
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
