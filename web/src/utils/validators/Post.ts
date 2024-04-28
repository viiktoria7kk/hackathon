import { z } from 'zod'

export const RequestValidator = z.object({
  title: z.string().min(2, {
    message: 'Назва повинна містити принаймні 2 символи.'
  }),
  description: z.string().min(10, {
    message: 'Опис повинен містити принаймні 10 символів.'
  }),
  content: z.string().min(10, {
    message: 'Контент повинен містити принаймні 10 символів.'
  }),
  category: z.string({ message: 'Категорія не може бути порожньою.' })
})

export type TRequestValidator = z.infer<typeof RequestValidator>
