import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function normalizeDate(dateString: string) {
  const date = new Date(dateString)
  return `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}`
}

const createQueryParamsString = (query: { [key: string]: string }) => {
  const queryParams = new URLSearchParams()

  Object.entries(query).forEach(([key, value]) => {
    queryParams.append(key, value)
  })

  return queryParams.toString()
}

export const createUrlPath = (
  URL: string,
  params: string | null = '',
  query = {}
) => {
  const queryParams = createQueryParamsString(query)
  const queryParamsString = queryParams ? `?${queryParams}` : ''
  const paramsString = params ? `/${params}` : ''

  return `${URL}${paramsString}${queryParamsString}`
}
