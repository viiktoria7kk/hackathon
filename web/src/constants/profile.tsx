import { ProfileTabsEnum, ProfileTabsData } from '~/types'

import ProfilEditForm from '~/containers/forms/ProfilEditForm'
import UserInfo from '~/containers/profile/UserInfo'

import { CircleUserRound, UserRoundCog, BookMarked } from 'lucide-react'
import UserRequests from '~/containers/profile/UserRequests'

export const tabsData: ProfileTabsData = {
  [ProfileTabsEnum.Profile]: {
    title: 'Profile',
    content: <UserInfo />,
    icon: <CircleUserRound />
  },
  [ProfileTabsEnum.Posts]: {
    title: 'Posts',
    content: <UserRequests />,
    icon: <BookMarked />
  },
  [ProfileTabsEnum.EditProfile]: {
    title: 'Edit Profile',
    content: <ProfilEditForm />,
    icon: <UserRoundCog />
  }
}
