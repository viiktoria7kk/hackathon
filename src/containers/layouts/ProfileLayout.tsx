import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '~/components/Breadcrumb'

import SidebarNav from '~/containers/profile/SideBarNav'

type ProfileLayoutProps = {
  children: React.ReactNode
}

const ProfileLayout = ({ children }: ProfileLayoutProps) => {
  return (
    <div className='space-y-6 p-10 pb-16 block'>
      <div className='space-y-0.5'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink to='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink to='/profile'>Component</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className='flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0'>
        <aside className='-mx-4 lg:w-1/5'>
          <SidebarNav />
        </aside>
        <div className='w-full flex-1'>{children}</div>
      </div>
    </div>
  )
}

export default ProfileLayout
