import ky from 'ky'

export const api = ky.create({
  prefixUrl: import.meta.env.VITE_SERVER_URL,
  hooks: {
    beforeRequest: [
      (request) =>
        request.headers.set(
          'Authorization',
          `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        )
    ]
  }
})
