import { api } from '~/configs/ky'
import { Requests } from '~/constants/requestsUrls'

import { UserType } from '~/types'
import { createUrlPath } from '~/utils'

export const userService = {
  getUsers: (): Promise<UserType[]> => {
    return api.get(Requests.USERS).json()
  },
  getUser: (id: string): Promise<UserType> => {
    return api.get(createUrlPath(Requests.USERS, id)).json()
  },
  createUser: (data: UserType): Promise<UserType> => {
    return api
      .post(Requests.USERS, {
        json: data
      })
      .json()
  },
  updateUser: (data: UserType): Promise<UserType> => {
    return api
      .put(createUrlPath(Requests.USERS, data.id), {
        json: data
      })
      .json()
  },
  deleteUser: (id: string): Promise<UserType> => {
    return api.delete(createUrlPath(Requests.USERS, id)).json()
  }
}
