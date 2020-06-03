import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/city',
    method: 'get',
    params
  })
}
