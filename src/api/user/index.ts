import request from '@/utils/http'
import qs from 'qs'
import { CLIENT_INFO, BASE_BEARER } from '@/config/env'
import type * as User from './type'



export const loginByUsernameApi = (data: User.UserLoginParams) => {
  const grant_type = 'password'
  const { username, password, randomStr, code } = data
  const userInfoToForm = qs.stringify(
    { 
      'username': username, 
      'password': password
    }
  )
  return request(
    {
      url: '/api/auth/oauth/token',
      headers: {
        isToken: false,
        'TENANT-ID': CLIENT_INFO.TENANT_ID,
        'Authorization': BASE_BEARER
      },
      method: 'post',
      params: { randomStr, code, grant_type },
      data: userInfoToForm
    })
}

export const getUserInfoApi = (type: User.UserType) => {
  return request({
    url: '/api/admin/user/info',
    method: 'get',
    params: type
  })
}