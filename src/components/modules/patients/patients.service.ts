import { BaseAPIService, type APIResponse } from '@/lib/api'
import type { UseQueryOptions } from '@tanstack/react-query'
import ky from 'ky'

export class PatientAPIService extends BaseAPIService {
  constructor() {
    super()
  }

  static instantiate() {
    return new PatientAPIService()
  }

  /** @url `/api/patients` */
  fetchListQueryOpt<TResponse extends APIResponse<{ patients: [] }>>(
    opt?: Omit<UseQueryOptions<TResponse>, 'queryKey' | 'queryFn'>,
  ) {
    const url = this.makeURL('api', 'patients')
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
