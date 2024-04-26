import { FC } from 'react'
import { Link } from 'react-router-dom'

import Wrapper from '~/containers/layouts/Wrapper'

import { cn } from '~/utils/Utils'

type FooterProps = {
  className?: string
}

const Footer: FC<FooterProps> = ({ className }) => {
  return (
    <div className='bg-white h-16 border-t border-gray-200'>
      <footer
        className={cn(
          'flex items-center h-full justify-center mx-auto max-w-screen-xl px-2.5 md:px-20 ',
          className
        )}
      >
        <Wrapper>
          <div className='flex items-center justify-between h-full'>
            <div>© 2024 App</div>
            <div className='mt-4 flex items-center justify-center md:mt-0'>
              <div className='flex space-x-8'>
                <Link
                  className='text-sm text-muted-foreground hover:text-gray-600'
                  to='#'
                >
                  Terms
                </Link>
                <Link
                  className='text-sm text-muted-foreground hover:text-gray-600'
                  to='#'
                >
                  Privacy Policy
                </Link>
                <Link
                  className='text-sm text-muted-foreground hover:text-gray-600'
                  to='#'
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </Wrapper>
      </footer>
    </div>
  )
}

export default Footer
