import { FC } from 'react'

import ProfileAvatarWrapper from '../layouts/ProfileAvatarWrapper'

import { useUserStore } from '~/store/userStore'

const UserInfo: FC = () => {
  const user = useUserStore((state) => state.user)

  return (
    <div className='w-full flex gap-14'>
      <ProfileAvatarWrapper
        avatar={user.avatar}
        firstName={user.firstName}
        lastName={user.lastName}
      />
      <div className='flex flex-col flex-1 '>
        <h1 className='text-4xl font-semibold'>
          {user.firstName + ' ' + user.lastName}
        </h1>
        <span className=' text-xs text-slate-400 cursor-pointer'>
          {user.email}
        </span>
        <p className='mt-10'>{user.bio}</p>
      </div>
    </div>
  )
}

export default UserInfo
