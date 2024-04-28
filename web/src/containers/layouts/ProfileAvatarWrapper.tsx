import { FC } from 'react'
import { cn } from '~/utils'

type ProfileAvatarWrapperProps = {
  firstName: string
  lastName: string
  avatar: string | undefined
  className?: string
  onClick?: () => void
}
const ProfileAvatarWrapper: FC<ProfileAvatarWrapperProps> = ({
  firstName,
  lastName,
  avatar,
  className,
  onClick
}) => {
  return (
    <div
      className={cn(
        ' max-w-80 max-h-80 w-full bg-slate-200 rounded-lg overflow-hidden',
        className
      )}
      onClick={onClick}
    >
      <img
        alt={firstName + ' ' + lastName}
        className=' block w-full h-full'
        src={avatar}
      />
    </div>
  )
}

export default ProfileAvatarWrapper
