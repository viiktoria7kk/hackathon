import { api } from '~/configs/ky'
import { Requests } from '~/constants/requestsUrls'

import {
  SignInParams,
  SignInResponse,
  SignUpParams,
  SignUpResponse
} from '~/types'

export const AuthService = {
  signIn: (data: SignInParams): Promise<SignInResponse> => {
    return api
      .post(Requests.SIGN_IN, {
        json: data
      })
      .json()
  },
  signUp: (data: SignUpParams): Promise<SignUpResponse> => {
    return api
      .post(Requests.SIGN_UP, {
        json: data
      })
      .json()
  }
}
