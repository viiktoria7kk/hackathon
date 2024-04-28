import { useEffect, FC } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '~/components/Form'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '~/components/Select'
import { Input } from '~/components/Input'
import { Textarea } from '~/components/Textarea'
import { DialogFooter } from '~/components/Dialog'
import { useUserStore } from '~/store/userStore'
import { Button } from '~/components/Button'

import { TRequestValidator, RequestValidator } from '~/utils/validators/Post'
import { Categories } from '~/containers/home/constants'
import { toast } from 'sonner'
import { RequestType } from '~/types'

type PostFormProps = {
  id?: string
  setIsOpen: (isOpen: boolean) => void
}
const PostForm: FC<PostFormProps> = ({ id, setIsOpen }) => {
  const user = useUserStore((state) => state.user!)
  const requestById = useUserStore((state) => state.requestById)
  const updataRequest = useUserStore((state) => state.updataRequest)
  const createRequest = useUserStore((state) => state.createRequest)

  const form = useForm<TRequestValidator>({
    resolver: zodResolver(RequestValidator),
    defaultValues: {
      title: '',
      description: '',
      content: '',
      category: ''
    }
  })

  useEffect(() => {
    if (!id) return
    const request = requestById(id)
    if (!request) return
    form.reset(request)
  }, [id, form, requestById])

  const onSubmit = (data: z.infer<typeof RequestValidator>) => {
    console.log(data)
    const completeData: RequestType = {
      ...data,
      id: id || Math.random().toString(36).substring(2),
      createdAt: new Date().toISOString(),
      isActive: true,
      user_id: user.id,
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        avatar: user.avatar || null
      }
    }
    console.log(completeData)
    if (id) {
      updataRequest(completeData)
      toast.success('Успішно оновлено оголшення')
      setIsOpen(false)
      return
    }
    createRequest(completeData)
    toast.success('Успішно додано оголшення')
    setIsOpen(false)
    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='grid gap-2 py-4'>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <>
                    <FormLabel>Name</FormLabel>
                    <Input
                      onChange={field.onChange}
                      placeholder='Enter title'
                      value={field.value}
                    />
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='category'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <>
                    <FormLabel>Role</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className='w-[180px]'>
                        <SelectValue placeholder='Select Role' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {Object.values(Categories).map((category) => (
                            <SelectItem
                              className='flex items-center gap-x-10 bg-white rounded-xl shadow-md py-4 px-6 transition cursor-pointer hover:-translate-y-1'
                              key={category}
                              value={category}
                            >
                              {category}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Біографія</FormLabel>
                <FormControl>
                  <Textarea
                    className='min-h-28 max-h-32'
                    onChange={field.onChange}
                    placeholder='Ваша опис'
                    value={field.value}
                  />
                </FormControl>
                <FormDescription>
                  Розкажіть щось про ваше оголшення.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='content'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Детальний опис</FormLabel>
                <FormControl>
                  <Textarea
                    className='min-h-28 max-h-36'
                    onChange={field.onChange}
                    placeholder='Опишіть більш детально ваше оголшення'
                    value={field.value}
                  />
                </FormControl>
                <FormDescription>
                  Розкажіть щось про ваше оголшення.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <DialogFooter>
          <Button type='submit' variant='secondary'>
            {id ? 'Оновити' : 'Додати'}
          </Button>
        </DialogFooter>
      </form>
    </Form>
  )
}

export default PostForm
