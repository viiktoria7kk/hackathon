import { FC } from 'react'
import { Link } from 'react-router-dom'

import { buttonVariants } from '~/components/Button'
import Wrapper from '~/containers/layouts/Wrapper'

import { Routes } from '~/constants/routes'

import { cn } from '~/utils'
import { useUserStore } from '~/store/userStore'

const Header: FC = () => {
  const user = useUserStore((state) => state.user)

  return (
    <header className='bg-white sticky z-50 top-0 inset-x-0 h-16 border-b border-gray-200'>
      <div className='flex items-center h-full justify-center mx-auto max-w-screen-xl px-2.5'>
        <Wrapper>
          <div className='flex items-center justify-between h-full'>
            <Link to={Routes.HOME}>
              <img
                src='https://www.pngall.com/wp-content/uploads/5/Help-PNG.png'
                alt='logo'
                className='h-12 w-12 object-cover'
              />
            </Link>
            <div className='flex items-center gap-3'>
              {user ? (
                <>
                  <Link
                    className={cn(buttonVariants({ variant: 'ghost' }))}
                    to={Routes.REQUESTS}
                  >
                    Запити
                  </Link>
                  <Link
                    className={cn(buttonVariants({ variant: 'ghost' }))}
                    to={Routes.PROFILE}
                  >
                    Профіль
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    className={cn(buttonVariants({ variant: 'ghost' }))}
                    to={Routes.SIGN_UP}
                  >
                    Зареєструватися
                  </Link>
                  <span aria-hidden='true' className='h-8 w-px bg-gray-200' />
                  <Link className={cn(buttonVariants())} to={Routes.SIGN_IN}>
                    Увійти
                  </Link>
                </>
              )}
            </div>
          </div>
        </Wrapper>
      </div>
    </header>
  )
}

export default Header
