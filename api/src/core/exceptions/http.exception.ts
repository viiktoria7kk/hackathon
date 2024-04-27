import { env } from '@configs/env.config'
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException
} from '@nestjs/common'

@Catch(HttpException, Error)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException | Error, host: ArgumentsHost): void {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()

    if (exception instanceof HttpException) {
      const status = exception.getStatus()
      const message = exception.getResponse()

      response
        .status(status)
        .json(typeof message === 'string' ? { status, message } : message)
    } else {
      if (env.NODE_ENV === 'development') {
        response.status(500).json({
          status: 500,
          message: exception.message
        })
      } else {
        response.status(500).json({
          status: 500,
          message: 'Internal server error'
        })
        throw exception
      }
    }
  }
}
