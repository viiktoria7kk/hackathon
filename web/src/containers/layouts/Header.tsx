import { FC } from 'react'
import { Link } from 'react-router-dom'
import { buttonVariants } from '~/components/button'

import Wrapper from '~/containers/layouts/Wrapper'

import { cn } from '~/utils/utils'

type HeaderProps = {
  className?: string
}

const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <div className='bg-white sticky z-50 top-0 inset-x-0 h-16 border-b border-gray-200'>
      <header
        className={cn(
          'flex items-center h-full justify-center mx-auto max-w-screen-xl px-2.5 md:px-20 ',
          className
        )}
      >
        <Wrapper>
          <div className='flex items-center justify-between h-full'>
            <div>App</div>
            <div className='flex items-center gap-3'>
              <Link className={cn(buttonVariants({ variant: 'ghost' }))} to='/'>
                Login
              </Link>
              <span aria-hidden='true' className='h-8 w-px bg-gray-200' />
              <Link className={cn(buttonVariants())} to='/'>
                Register
              </Link>
            </div>
          </div>
        </Wrapper>
      </header>
    </div>
  )
}

export default Header
