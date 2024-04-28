import { Client, InputFile, Storage } from 'node-appwrite'

import {
  FileStorage,
  SETTER_BUCKET_WRONG_VALUE
} from '@seishinverse/storage-manager'
import {
  IAppWriteStorageOptions,
  IFile,
  TAppWriteOptions
} from './appwrite.types'

export class AppWriteStorage implements FileStorage {
  private storage: Storage
  private client: Client
  constructor(options: IAppWriteStorageOptions) {
    const { apiKey, ...appwriteOptions } = options
    this.client = new Client()
      .setEndpoint(appwriteOptions.endpoint)
      .setProject(appwriteOptions.projectId)
      .setKey(apiKey)

    this.storage = new Storage(this.client)
    this.options = appwriteOptions
  }

  async getUrl(key: string): Promise<string> {
    const url = `${this.options.endpoint}/storage/buckets/${this.bucket}/files/${key}/view?project=${this.options.projectId}&mode=admin`

    return url
  }

  async upload(file: IFile) {
    const inputFile = InputFile.fromBuffer(file.buffer, file.originalname)
    const response = await this.storage.createFile(
      this.bucket,
      file.originalname,
      inputFile
    )
    return {
      key: response.$id,
      success: true
    }
  }

  async delete(key: string) {
    await this.storage.deleteFile(this.bucket, key)

    return {
      success: true
    }
  }

  async download(key: string) {
    const file = await this.storage.getFile(this.bucket, key)
    const buffer = await this.storage.getFileDownload(this.bucket, key)

    return {
      buffer: Buffer.from(buffer),
      size: file.sizeOriginal,
      mimetype: file.mimeType,
      originalname: file.name
    }
  }

  get bucket(): string {
    return this.$bucket
  }

  set bucket(value: string) {
    if (typeof value === 'string' && value.trim().length) {
      this.$bucket = value
      return
    }
    throw new Error(SETTER_BUCKET_WRONG_VALUE)
  }

  get options() {
    return this.$options
  }

  set options(value: TAppWriteOptions) {
    this.$options = value
  }

  private $options: TAppWriteOptions
  private $bucket: string
}
