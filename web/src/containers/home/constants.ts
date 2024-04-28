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
  MEDICAL_HELP: 'Медична допопога',
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
    title: 'Медична допомога',
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
    title: 'Чому волонтерство важливе?',
    description:
      'Волонтерство важливе, оскільки воно сприяє покращенню якості життя уразливих груп населення, розвитку спільнот та підтримці недооцінених справ. Волонтери відіграють ключову роль у вирішенні соціальних проблем, сприяючи змінам у суспільстві та вносячи позитивний вклад у світ.'
  },
  {
    title:
      'Які переваги та користі можна отримати від участі в волонтерських програмах?',
    description:
      "Участь у волонтерських програмах дарує можливість розвитку нових навичок, розширенню соціальних зв'язків та отриманню задоволення від допомоги іншим. Волонтерство також сприяє самореалізації та підвищенню самооцінки, допомагаючи відчути себе частиною чогось більшого і значущого."
  },
  {
    title: 'Як можна знайти відповідну волонтерську можливість?',
    description:
      'Знаходження волонтерських можливостей може розпочатися з пошуку організацій, які працюють у сфері, яка вас цікавить. Важливо враховувати власні цінності, інтереси та доступні можливості для волонтерства. Деякі ресурси, такі як сайти волонтерських організацій або платформи для знаходження волонтерських проектів, можуть також допомогти в цьому процесі.'
  },
  {
    title:
      "Які обов'язки і відповідальності зазвичай пов'язані з волонтерством?",
    description:
      "Волонтерство передбачає виконання різноманітних завдань, що можуть варіюватися від підтримки у виконанні рутинних обов'язків до участі у складних проектах або подіях. Від волонтера очікується відданість цілям організації, згуртованість з іншими волонтерами та дотримання внутрішніх правил і процедур, щоб забезпечити успішне виконання місії організації."
  }
]
