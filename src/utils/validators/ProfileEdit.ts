import { z } from 'zod'

export const ProfileEditValiador = z.object({
  firstName: z
    .string()
    .min(2, {
      message: "Ім'я повинно містити принаймні 2 символи."
    })
    .max(30, {
      message: "Ім'я не повинно бути довшим за 30 символів."
    }),
  lastName: z
    .string()
    .min(2, {
      message: 'Прізвище повинно містити принаймні 2 символи.'
    })
    .max(30, {
      message: 'Прізвище не повинно бути довшим за 30 символів.'
    }),
  email: z
    .string()
    .email({ message: 'Будь ласка, введіть дійсну адресу електронної пошти.' }),
  bio: z.string({
    required_error: 'Будь ласка, введіть свою біографію.'
  }),
  phone: z.string().min(10, {
    message: 'Будь ласка, введіть дійсний номер телефону.'
  })
})

export type TProfileEditValiador = z.infer<typeof ProfileEditValiador>
