import { StorageClient } from '@supabase/storage-js'

import {
  FileStorage,
  SETTER_BUCKET_WRONG_VALUE
} from '@seishinverse/storage-manager'
import { IFile, ISupabaseStorageOptions } from './supabase.types'

export class SupabaseStorage implements FileStorage {
  private storage: StorageClient
  constructor(options: ISupabaseStorageOptions) {
    const { projectUrl, apiKey } = options

    this.storage = new StorageClient(projectUrl, {
      apiKey: apiKey,
      Authorization: `Bearer ${apiKey}`
    })
  }

  async upload(file: IFile) {
    const response = await this.storage
      .from(this.bucket)
      .upload(file.originalname, file.buffer, { contentType: file.mimetype })
    if (response.error) throw new Error(response.error.message)

    return { key: response.data.path, success: true }
  }

  async delete(key: string) {
    const response = await this.storage.from(this.bucket).remove([key])
    if (response.error) throw new Error(response.error.message)

    return {
      success: true
    }
  }

  async getUrl(key: string) {
    return this.storage.from(this.bucket).getPublicUrl(key).data.publicUrl
  }

  async download(key: string) {
    const file = await this.storage.from(this.bucket).download(key)
    if (file.error) throw new Error(file.error.message)

    return {
      buffer: await file.data.arrayBuffer().then(Buffer.from),
      size: file.data.size,
      mimetype: file.data.type,
      originalname: key
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

  private $bucket: string
}
