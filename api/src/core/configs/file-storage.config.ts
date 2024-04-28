import { env } from '@core/configs/env.config'

export const appWriteConfig = {
  projectId: env.APPWRITE_PROJECT_ID,
  endpoint: env.APPWRITE_ENDPOINT,
  apiKey: env.APPWRITE_API_KEY
}
