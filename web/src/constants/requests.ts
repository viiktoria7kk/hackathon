export const request = {
  id: '1',
  title: 'Родина ВПО потребує допомоги.',
  description: 'This is the first post',
  createdAt: '2021-07-01T00:00:00.000Z',
  content: 'This is the first post content',
  category: 'First Category',
  isActive: true,
  user_id: 1,
  createdBy: 'First User'
}
export const requests = [
  {
    id: '1',
    title: 'Родина asd допомоги.',
    description:
      'Ви чи ваші близькі опинилися в складній ситуації і потребують допомоги? Наша команда готова стати на вашу сторону. Коли життя принесе несподівані випробування, важливо мати підтримку. Незалежно від того, чи потрібні фінансова допомога, консультація або просто плече для вислуховування, ми тут, щоб надати вам допомогу.',
    createdAt: '2021-07-01T00:00:00.000Z',
    content: 'This is the first post content',
    category: 'Правова допомога',
    isActive: true,
    user_id: 1,
    createdBy: 'First User'
  },

  {
    id: '2',
    title: 'Родина dddd потребує допомоги.',
    description:
      'Ви чи ваші близькі опинилися в складній ситуації і потребують допомоги? Наша команда готова стати на вашу сторону. Коли життя принесе несподівані випробування, важливо мати підтримку. Незалежно від того, чи потрібні фінансова допомога, консультація або просто плече для вислуховування, ми тут, щоб надати вам допомогу.',
    createdAt: '2021-07-02T00:00:00.000Z',
    content: 'This is the second post content',
    category: 'Правова допомога',
    isActive: true,
    user_id: 2,
    createdBy: 'Second User'
  },

  {
    id: '3',
    title: 'asdasdsad ВПО потребує допомоги.',
    description:
      'Ви чи ваші близькі опинилися в складній ситуації і потребують допомоги? Наша команда готова стати на вашу сторону. Коли життя принесе несподівані випробування, важливо мати підтримку. Незалежно від того, чи потрібні фінансова допомога, консультація або просто плече для вислуховування, ми тут, щоб надати вам допомогу.',
    createdAt: '2021-07-03T00:00:00.000Z',
    content: 'This is the third post content',
    category: 'Категорії',
    isActive: true,
    user_id: 3,
    createdBy: 'Third User'
  }
]

for (let i = 4; i <= 15; i++) {
  requests.push({
    id: `${i}`,
    title: `qwe ВПО потребує допомоги.`,
    description:
      'Ви чи ваші близькі опинилися в складній ситуації і потребують допомоги? Наша команда готова стати на вашу сторону. Коли життя принесе несподівані випробування, важливо мати підтримку. Незалежно від того, чи потрібні фінансова допомога, консультація або просто плече для вислуховування, ми тут, щоб надати вам допомогу.',
    createdAt: `2021-07-0${i}T00:00:00.000Z`,
    content: `This is the ${i}th post content`,
    category: 'Правова допомога',
    isActive: true,
    user_id: i,
    createdBy: `${i}th User`
  })
}
