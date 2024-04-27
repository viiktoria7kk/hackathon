import { FC, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button, buttonVariants } from '~/components/Button'
import { Input } from '~/components/Input'
import { Label } from '~/components/Label'
import { ArrowRight, EyeIcon, EyeOffIcon, Loader2 } from 'lucide-react'

import { cn } from '~/utils'
import {
  AuthSignUpCredentialsValiador,
  TAuthSignUpCredentialsValiador
} from '~/utils/validators/AccountCredentials'
import { Routes } from '~/constants/routes'

const SignUpForm: FC = () => {
  const [searchParams] = useSearchParams()
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)

  const isVolonteer = searchParams.get('as') === 'volonteer'

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState)
  }

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword((prevState) => !prevState)
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TAuthSignUpCredentialsValiador>({
    resolver: zodResolver(AuthSignUpCredentialsValiador)
  })
  const isLoading = false

  const onSubmit = ({
    lastName,
    firstName,
    email,
    password,
    confirmPassword
  }: TAuthSignUpCredentialsValiador) => {
    console.log(lastName, firstName, email, password, confirmPassword)
  }

  return (
    <div className='max-w-[450px] py-7 px-8 border rounded-md bg-white'>
      <div className='flex flex-col gap-3'>
        <div className='flex flex-col items-center space-y-2 text-center'>
          <h1 className='text-xl font-bold'>
            Зареєструватися як {isVolonteer ? 'волонтер' : 'користувач'}
          </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='grid gap-2'>
            <div className='grid gap-1 py-2 grid-cols-2'>
              <div>
                <Label htmlFor='lastName'>Прізвище</Label>
                <Input
                  {...register('lastName')}
                  className={cn({
                    'focus-visible:ring-red-500': errors.lastName
                  })}
                  placeholder='Введіть прізвище'
                />
                {errors?.lastName && (
                  <p className='text sm text-red-500'>
                    {errors.lastName.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor='firstName'>Ім&apos;я</Label>
                <Input
                  {...register('firstName')}
                  className={cn({
                    'focus-visible:ring-red-500': errors.firstName
                  })}
                  placeholder='Введіть імя'
                  type='text'
                />
                {errors?.firstName && (
                  <p className='text sm text-red-500'>
                    {errors.firstName.message}
                  </p>
                )}
              </div>
            </div>
            <div className='grid gap-1 py-2'>
              <Label htmlFor='email'>Пошта</Label>
              <Input
                {...register('email')}
                className={cn({
                  'focus-visible:ring-red-500': errors.email
                })}
                placeholder='Введіть свою електронну пошту'
                type='email'
              />
              {errors?.email && (
                <p className='text sm text-red-500'>{errors.email.message}</p>
              )}
            </div>
            <div className='grid gap-1 py-2'>
              <Label htmlFor='password'>Пароль</Label>
              <div className='relative'>
                <Input
                  {...register('password')}
                  className={cn({
                    'focus-visible:ring-red-500': errors.password
                  })}
                  placeholder='Введіть пароль'
                  type={showPassword ? 'text' : 'password'}
                />
                <button
                  className='absolute right-0 top-0 mt-2 mr-2'
                  onClick={() => toggleShowPassword()}
                >
                  {showPassword ? (
                    <EyeOffIcon aria-hidden='true' className='h-6 w-6' />
                  ) : (
                    <EyeIcon aria-hidden='true' className='h-6 w-6' />
                  )}
                </button>
              </div>
              {errors?.password && (
                <p className='text sm text-red-500'>
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className='grid gap-1 py-2'>
              <Label htmlFor='confirmPassword'>Підтвердити пароль</Label>
              <div className='relative'>
                <Input
                  {...register('confirmPassword')}
                  className={cn({
                    'focus-visible:ring-red-500': errors.confirmPassword
                  })}
                  placeholder='Введіть підтвердження паролю'
                  type={showConfirmPassword ? 'text' : 'password'}
                />
                <button
                  className='absolute right-0 top-0 mt-2 mr-2'
                  onClick={() => toggleShowConfirmPassword()}
                >
                  {showConfirmPassword ? (
                    <EyeOffIcon aria-hidden='true' className='h-6 w-6' />
                  ) : (
                    <EyeIcon aria-hidden='true' className='h-6 w-6' />
                  )}
                </button>
              </div>
              {errors?.confirmPassword && (
                <p className='text sm text-red-500'>
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <Button disabled={isLoading} type='submit'>
              {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
              Зареєструватись
            </Button>
          </div>
        </form>
        <div className='relative'>
          <div
            aria-hidden='true'
            className='absolute inset-0 flex items-center'
          >
            <span className='w-full border-t'></span>
          </div>
          <div className='relative flex justify-center text-xs'>
            <span className='bg-background px-2 text-muted-foreground'>
              Чи продовжити
            </span>
          </div>
        </div>
        {isVolonteer ? (
          <Button disabled={isLoading} variant='secondary'>
            Зареєструватись як користувач
          </Button>
        ) : (
          <Button disabled={isLoading} variant='secondary'>
            Продовжити як волонтер
          </Button>
        )}
        <div className='flex flex-col items-center space-y-2 text-center'>
          <Link
            className={cn(
              buttonVariants({ variant: 'link', className: 'gap-1.5' })
            )}
            to={Routes.SIGN_IN}
          >
            Вже є акаунт? Авторизуватись
            <ArrowRight className='h-4 w-4' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUpForm
