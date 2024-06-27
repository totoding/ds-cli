import { ref } from 'vue'
import { defineStore } from 'pinia'
import { encryption } from 'neunb-utils'
import { loginByUsernameApi, getUserInfoApi } from '@/api/user/index'
import { LOGIN_INFO } from '@/config/env'
import type * as User from './type'

export const userStore = defineStore('user', () => {
  const userInfo = ref({})

  async function loginByUsername(loginForm: User.loginFormType) {
    const user = encryption({
      data: loginForm,
      type: '',
      param: LOGIN_INFO.param,
      key: LOGIN_INFO.key
    })
    const result = await loginByUsernameApi(user)
    return result
  }

  function setUserInfo(data: any) {
    userInfo.value = data
  }

  async function getUserInfo() {
    const result = await getUserInfoApi({ type: 'normal' })
    console.log("🚀 ~ getUserInfo ~ result:", result)
    if (result) {
      setUserInfo(result)
      return result
    }
    return
  }

  async function logout() {
    // const result = await logoutApi()
    // if (result) {
    //   setUserInfo({})
    //   return true
    // }
    return
  }
  return { userInfo, loginByUsername, setUserInfo, getUserInfo, logout }
})
