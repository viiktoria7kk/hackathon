import { env } from '@configs/env.config'

export const mailOptions =
  env.NODE_ENV === 'production'
    ? {
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: env.MAIL_USER,
          pass: env.MAIL_PASS,
          clientId: env.MAIL_CLIENT_ID,
          clientSecret: env.MAIL_CLIENT_SECRET,
          refreshToken: env.MAIL_REFRESH_TOKEN
        }
      }
    : {
        host: 'localhost',
        port: '1025'
      }
