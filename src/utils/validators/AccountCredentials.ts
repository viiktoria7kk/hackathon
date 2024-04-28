import { z } from 'zod'

const email = z.string().email({ message: 'Неправильно введений e-mail' })

const name = z.string({ message: 'Це поле не може бути порожнім' })

export const AuthSignInCredentialsValiador = z.object({
  email,
  password: z.string({ message: 'Пароль не має бути порожнім' })
})

export const AuthSignUpCredentialsValiador = z
  .object({
    lastName: name,
    firstName: name,
    email,
    password: z
      .string()
      .min(8, { message: 'Пароль має бути не коротше 8 символів' })
      .refine((password) => /[a-z]/.test(password), {
        message: 'Пароль повинен містити принаймні 1 маленьку літеру'
      })
      .refine((password) => /[A-Z]/.test(password), {
        message: 'Пароль повинен містити принаймні 1 велику літеру'
      })
      .refine((password) => /[0-9]/.test(password), {
        message: 'Пароль повинен містити принаймні 1 цифру'
      })
      .refine((password) => /\W|_/.test(password), {
        message: 'Пароль повинен містити принаймні 1 спеціальний символ'
      }),
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Паролі не збігаються'
  })

export type TAuthSignUpCredentialsValiador = z.infer<
  typeof AuthSignUpCredentialsValiador
>

export type TAuthSignInCredentialsValiador = z.infer<
  typeof AuthSignInCredentialsValiador
>
