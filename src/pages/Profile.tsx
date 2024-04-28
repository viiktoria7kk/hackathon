import { FC } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import ProfileLayout from '~/containers/layouts/ProfileLayout'
import { ProfileTabsEnum } from '~/types'
import { tabsData } from '~/constants/profile'
import { useUserStore } from '~/store/userStore'
import { Routes } from '~/constants/routes'
import { useEffect } from 'react'
import { Role } from '~/constants/enums'

const Profile: FC = () => {
  const [searchParams] = useSearchParams()
  const user = useUserStore((state) => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user || user.role === Role.VOLUNTEER) {
      navigate(Routes.HOME)
    }
  }, [navigate, user])

  if (!user || user.role === Role.VOLUNTEER) {
    return null
  }

  const tab =
    (searchParams.get('tab') as ProfileTabsEnum) || ProfileTabsEnum.Profile

  const content = tabsData[tab].content

  return <ProfileLayout>{content}</ProfileLayout>
}

export default Profile
