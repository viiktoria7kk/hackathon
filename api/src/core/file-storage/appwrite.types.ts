import { Readable } from 'stream'

export interface IFile {
  fieldname: string
  originalname: string
  encoding: string
  mimetype: string
  size: number
  stream: Readable
  destination: string
  filename: string
  path: string
  buffer: Buffer
}

export interface IAppWriteStorageOptions {
  endpoint: string
  projectId: string
  apiKey: string
}

export type TAppWriteOptions = Omit<IAppWriteStorageOptions, 'apiKey'>
