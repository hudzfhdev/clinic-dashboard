import type { APIResponse } from '@/lib/api'
import type {
  Query,
  QueryOptions,
  UseQueryOptions,
} from '@tanstack/react-query'
import ky from 'ky'

class BaseAPIService {
  controller: AbortController
  proxyURL: string

  constructor() {
    this.controller = new AbortController()
    this.proxyURL = '/server'
  }

  makeQueryKey(...keys: string[]) {
    return `${this.proxyURL}/`.concat(keys.join('/'))
  }
}

export class PatientAPIService extends BaseAPIService {
  constructor() {
    super()
  }

  /** @url `/api/patients` */
  fetchListQueryOpt<TResponse extends APIResponse<{ patients: [] }>>(
    opt?: Omit<UseQueryOptions<TResponse>, 'queryKey' | 'queryFn'>,
  ) {
    const url = this.makeQueryKey('api', 'patients')
    return {
      ...opt,
      queryKey: [url],
      queryFn: async () => {
        const res = await ky
          .get<TResponse>(url, {
            signal: this.controller.signal,
          })
          .json()
          .catch((err) => {
            throw new Error(JSON.stringify(err))
          })
        return res
      },
    } as UseQueryOptions<TResponse>
  }
}
