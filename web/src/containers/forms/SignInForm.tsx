import { FC, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { ArrowRight, Loader2 } from 'lucide-react'

import { Button, buttonVariants } from '~/components/Button'
import { Input } from '~/components/Input'
import { Role } from '~/constants/enums'
import { Label } from '~/components/Label'

import { cn, createUrlPath } from '~/utils'
import {
  AuthSignInCredentialsValiador,
  TAuthSignInCredentialsValiador
} from '~/utils/validators/AccountCredentials'
import { Routes } from '~/constants/routes'
import { AuthService } from '~/services/auth'

const SignInForm: FC = () => {
  const [searchParams] = useSearchParams()

  const isVolunteer = searchParams.get('as') === 'volunteer'

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TAuthSignInCredentialsValiador>({
    resolver: zodResolver(AuthSignInCredentialsValiador)
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  const onSubmit = ({ email, password }: TAuthSignInCredentialsValiador) => {
    setIsLoading(true)
    AuthService.signIn({
      email,
      password,
      role: Role.USER
    })
      .then((res) => {
        toast.success('Успішно увійшли')
        localStorage.setItem('ACCESS_TOKEN', res.accessToken)
        localStorage.setItem('USER_ID', res.id)
        navigate(Routes.HOME)
      })
      .catch((error) => {
        console.error('Error:', error)
        toast.error('Помилка')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <div className='max-w-[450px] py-7 px-8 border rounded-md bg-white'>
      <div className='flex flex-col gap-3'>
        <div className='flex flex-col items-center space-y-2 text-center'>
          <h1 className='text-xl font-bold'>
            Увійти як {isVolunteer ? 'волонтер' : 'користувач'}
          </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='grid gap-2'>
            <div className='grid gap-1 py-2'>
              <Label htmlFor='email'>Пошта</Label>
              <Input
                {...register('email')}
                className={cn({
                  'focus-visible:ring-red-500': errors.email
                })}
                placeholder='you@example.com'
              />
              {errors?.email && (
                <p className='text sm text-red-500'>{errors.email.message}</p>
              )}
            </div>
            <div className='grid gap-1 py-2'>
              <Label htmlFor='password'>Пароль</Label>
              <Input
                {...register('password')}
                className={cn({
                  'focus-visible:ring-red-500': errors.password
                })}
                placeholder='Введіть пароль'
                type='password'
              />
              {errors?.password && (
                <p className='text sm text-red-500'>
                  {errors.password.message}
                </p>
              )}
            </div>
            <Button disabled={isLoading} type='submit'>
              {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
              Увійти
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
        <Link
          className={cn(buttonVariants({ variant: 'secondary' }))}
          to={createUrlPath(Routes.SIGN_IN, '', {
            as: isVolunteer ? 'user' : 'volunteer'
          })}
        >
          Продовжити як {isVolunteer ? 'користувач' : 'волонтер'}
        </Link>
        <div className='flex flex-col items-center space-y-2 text-center'>
          <Link
            className={cn(
              buttonVariants({ variant: 'link', className: 'gap-1.5' })
            )}
            to={Routes.SIGN_UP}
          >
            Досі немаєте акаунту? Зареєструватися
            <ArrowRight className='h-4 w-4' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignInForm
