export type APIResponse<T extends unknown> = {
  data: T
  error: null | object[] | object | Error
  status: 'success' | 'failed'
}
