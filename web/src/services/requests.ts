import { api } from '~/configs/ky'
import { Requests } from '~/constants/requestsUrls'

import { RequestType, RequestsCreateParams } from '~/types'
import { createUrlPath } from '~/utils'

export const requestsService = {
  getRequests: (): Promise<RequestType[]> => {
    return api.get(Requests.REQUESTS).json()
  },
  createRequest: (data: RequestsCreateParams): Promise<RequestType> => {
    return api
      .post(Requests.REQUESTS, {
        json: data
      })
      .json()
  },
  deleteRequest: (id: string): Promise<RequestType> => {
    return api.delete(createUrlPath(Requests.REQUESTS, id)).json()
  }
}
