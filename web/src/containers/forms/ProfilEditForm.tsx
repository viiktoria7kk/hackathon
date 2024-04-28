import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { useUserStore } from '~/store/userStore'

import {
  TProfileEditValiador,
  ProfileEditValiador
} from '~/utils/validators/ProfileEdit'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '~/components/Form'
import { Input } from '~/components/Input'
import { Button } from '~/components/Button'
import { Label } from '~/components/Label'
import { Textarea } from '~/components/Textarea'
import ProfileAvatarWrapper from '~/containers/layouts/ProfileAvatarWrapper'

import { UserFormType } from '~/types'

const ProfilEditForm = () => {
  const updateUser = useUserStore((state) => state.updateUser)
  const user = useUserStore((state) => state.user!)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [avatar, setAvatar] = useState<string>(user.avatar || ' ')
  const form = useForm<TProfileEditValiador>({
    defaultValues: user,
    resolver: zodResolver(ProfileEditValiador)
  })

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      if (file) {
        const reader: FileReader = new FileReader()
        reader.onloadend = () => {
          const base64Image = reader.result as string
          setAvatar(base64Image)
        }
        reader.readAsDataURL(file)
      }
    }
  }

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const onSubmit = (data: UserFormType) => {
    data.avatar = avatar
    updateUser(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-4 mb-4'>
          <ProfileAvatarWrapper
            avatar={avatar}
            className='cursor-pointer hover:brightness-75 transition'
            firstName={user.firstName}
            lastName={user.lastName}
            onClick={handleImageClick}
          />
          <div className='flex w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor='picture'>Picture</Label>
            <Input
              accept='image/*'
              className='hidden'
              id='picture'
              onChange={handleAvatarChange}
              ref={fileInputRef}
              type='file'
            />
          </div>

          <div className='flex items-center gap-5 mb-5'>
            <FormField
              control={form.control}
              name='firstName'
              render={({ field }) => (
                <FormItem className='flex-1'>
                  <FormLabel>Ім&apos;я</FormLabel>
                  <FormControl>
                    <Input placeholder="Ваше ім'я" {...field} />
                  </FormControl>
                  <FormDescription>
                    Це ім&apos;я буде відображатися на вашому профілі та в
                    електронних листах.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='lastName'
              render={({ field }) => (
                <FormItem className='flex-1'>
                  <FormLabel>Прізвище</FormLabel>
                  <FormControl>
                    <Input placeholder='Ваше прізвище' {...field} />
                  </FormControl>
                  <FormDescription>
                    Це прізвище буде відображатися на вашому профілі та в
                    електронних листах.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='flex items-center gap-5 '>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='flex-1'>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='Ваш email' type='email' {...field} />
                  </FormControl>
                  <FormDescription>Введіть свій email.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='phone'
              render={({ field }) => (
                <FormItem className='flex-1'>
                  <FormLabel>Телефон</FormLabel>
                  <FormControl>
                    <Input placeholder='Ваш телефон' {...field} />
                  </FormControl>
                  <FormDescription>
                    Введіть свій номер телефону.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name='bio'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Біографія</FormLabel>
                <FormControl>
                  <Textarea
                    className='min-h-32 max-h-56'
                    placeholder='Ваша біографія'
                    {...field}
                  />
                </FormControl>
                <FormDescription>Розкажіть нам трохи про себе.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type='submit'>Зберегти</Button>
      </form>
    </Form>
  )
}

export default ProfilEditForm
