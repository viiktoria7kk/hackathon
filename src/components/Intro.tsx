import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { cn, createUrlPath } from '~/utils'
import { buttonVariants } from '~/components/Button'
import { Routes } from '~/constants/routes'

type IntroProps = {
  children: React.ReactNode
  isHome: boolean
}

const Intro: FC<IntroProps> = ({ children, isHome }) => {
  return (
    <div
      className={cn('w-auto h-auto p-12', isHome ? 'bg-home' : 'bg-request')}
    >
      <div>{children}</div>
      <Link
        className={cn(
          buttonVariants(),
          'bg-intro-gradient opacity-90 hover:opacity-100 transition text-white text-base py-3 px-8'
        )}
        to={
          isHome
            ? Routes.REQUESTS
            : createUrlPath(Routes.SIGN_UP, '', { as: 'volunteer' })
        }
      >
        {isHome ? 'Перейти до заявок' : 'Приєднатись до команди'}
      </Link>
    </div>
  )
}

export default Intro
