import { Link, useSearchParams } from 'react-router-dom'

import { cn, createUrlPath } from '~/utils'

import { buttonVariants } from '~/components/Button'
import { tabsData } from '~/constants/profile'
import { ProfileTab } from '~/types'

const SidebarNav = () => {
  const [searchParams] = useSearchParams()
  const tab = searchParams.get('tab')

  const tabs = Object.entries(tabsData).map(
    ([key, item]: [string, ProfileTab]) => (
      <Link
        className={
          (cn(
            buttonVariants({ variant: 'ghost' }),
            tab === key
              ? 'bg-muted hover:bg-muted'
              : 'hover:bg-transparent hover:underline',
            'justify-start'
          ),
          'flex items-center px-4 py-2 gap-2 rounded-md font-normal')
        }
        key={key}
        to={createUrlPath('/profile', '', { tab: key })}
      >
        {item.icon}
        {item.title}
      </Link>
    )
  )

  return (
    <nav className='flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1'>
      {tabs}
    </nav>
  )
}

export default SidebarNav
