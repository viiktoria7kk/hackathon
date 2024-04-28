import { createUrlPath } from '~/utils'
import { Routes } from '~/constants/routes'
import { CategoryType } from '~/types'

import psycho from '~/assets/images/categories/psycho.png'
import programs from '~/assets/images/categories/programs.png'
import hotline from '~/assets/images/categories/hotline.png'
import humanitarian from '~/assets/images/categories/humanitarian.png'
import law from '~/assets/images/categories/law.png'
import medical from '~/assets/images/categories/medical.png'
import bannerUserImage from '~/assets/images/banners/user.png'
import bannerVolunteerImage from '~/assets/images/banners/volunteer.png'

export const banners = [
  {
    title: 'Ви можете отримати допомогу',
    description:
      'Ми допомагаємо постраждалим від воєнних дій,біженцім i всім кому потрібна допомога :',
    image: bannerUserImage,
    path: createUrlPath(Routes.SIGN_UP, '', { as: 'user' }),
    isUser: true
  },
  {
    title: 'Ви можете надати допомогу',
    description:
      'Долучайтесь до підтримки ВПО та пострадждалих від воєнних дій i всім тим, кому потрвбна допомога',
    image: bannerVolunteerImage,
    path: createUrlPath(Routes.SIGN_UP, '', { as: 'volunteer' }),
    isUser: false
  }
]

export const Categories = {
  PSYCHOLOGICAL_SUPPORT: 'Психологічна допомога',
  HUMANITARIAN_AID: 'Гуманітарна допомога',
  LEGAL_ASSISTANCE: 'Правова допомога',
  HOTLINE_SERVICES: 'Гарячі лінії',
  MEDICAL_HELP: 'Медична допопмога',
  INITIATIVES_AND_PROGRAMS: 'Ініціативи та програми'
}

export const categories: CategoryType[] = [
  {
    title: 'Психологічна підтримка',
    category: Categories.PSYCHOLOGICAL_SUPPORT,
    image: psycho
  },
  {
    title: 'Правова допомога',
    category: Categories.LEGAL_ASSISTANCE,
    image: law
  },
  {
    title: 'Медична допопмога',
    category: Categories.MEDICAL_HELP,
    image: medical
  },
  {
    title: 'Гуманітарна дпомога',
    category: Categories.HUMANITARIAN_AID,
    image: humanitarian
  },
  {
    title: 'Гарячі лінії',
    category: Categories.HOTLINE_SERVICES,
    image: hotline
  },
  {
    title: 'Ініціативи та програми',
    category: Categories.INITIATIVES_AND_PROGRAMS,
    image: programs
  }
]

type FAQType = {
  title: string
  description: string
}

export const FAQList: FAQType[] = [
  {
    title: 'What is TypeScript?',
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
  },
  {
    title: 'What is AI?',
    description:
      'AI, or Artificial Intelligence, is a branch of computer science that aims to imbue software with the ability to analyze its environment using either predetermined rules and search algorithms, or pattern recognizing machine learning models, and make decisions based on those analyses.'
  },
  {
    title: 'What is Machine Learning?',
    description:
      'Machine Learning is a field of study that gives computers the ability to learn without being explicitly programmed.'
  },
  {
    title: 'What is GitHub Copilot?',
    description: 'GitHub Copilot is an AI-powered code completion tool.'
  }
]
