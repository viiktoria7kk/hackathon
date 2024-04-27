import { z } from 'zod'

export const AuthCredentialsValiador = z.object({
  email: z.string().email({ message: 'Неправильно введений e-mail' }),
  password: z
    .string()
    .min(8, { message: 'Пароль має бути не коротше 8 символів' })
})

export type TAuthCredentialsValiador = z.infer<typeof AuthCredentialsValiador>
