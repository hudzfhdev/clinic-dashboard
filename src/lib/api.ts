export type APIResponse<T extends unknown> = {
  data: T
  error: null | object[] | object | Error
  status: 'success' | 'failed'
}

export class BaseAPIService {
  controller: AbortController
  proxyURL: string

  constructor() {
    this.controller = new AbortController()
    this.proxyURL = '/server'
  }

  makeURL(...keys: string[]) {
    return `${this.proxyURL}/`.concat(keys.join('/'))
  }
}
