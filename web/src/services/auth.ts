import { api } from '~/configs/ky'

import { Routes } from '~/constants/routes'
import {
  SignInParams,
  SignInResponse,
  SignUpParams,
  SignUpResponse
} from '~/types'
import { createUrlPath } from '~/utils'

export const AuthService = {
  signIn: (data: SignInParams): Promise<SignInResponse> => {
    return api
      .post(createUrlPath(Routes.SIGN_IN), {
        json: data
      })
      .json()
  },
  signUp: (data: SignUpParams): Promise<SignUpResponse> => {
    return api
      .post(createUrlPath(Routes.SIGN_UP), {
        json: data
      })
      .json()
  }
}
