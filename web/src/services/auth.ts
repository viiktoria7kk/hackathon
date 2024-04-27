import ky from 'ky'
import { SignInData, SignUpData } from '~/types'

export const AuthServices = () => {
  const signIn = async (data: SignInData) => {
    const response = await ky
      .post(`${process.env.VITE_SERVER_URL}/auth/sign-in`, {
        json: JSON.stringify(data)
      })
      .json()

    return response
  }

  const signUp = async (data: SignUpData) => {
    const response = await ky
      .post(`${process.env.VITE_SERVER_URL}/auth/sign-up`, {
        json: JSON.stringify(data)
      })
      .json()

    return response
  }

  return { signIn, signUp }
}
