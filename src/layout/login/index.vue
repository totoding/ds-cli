<template>
  <div class="bg h-full w-full flex justify-center items-center">
    <div class="h-[400px]">
      <a-card class="w-[400px] pt-10">
        <a-form
          :model="formState"
          name="basic"
          :label-col="{ span: 8 }"
          :wrapper-col="{ span: 16 }"
          autocomplete="off"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
        >
          <a-form-item
            label="Username"
            name="username"
            :rules="[{ required: true, message: 'Please input your username!' }]"
          >
            <a-input v-model:value="formState.username" />
          </a-form-item>

          <a-form-item
            label="Password"
            name="password"
            :rules="[{ required: true, message: 'Please input your password!' }]"
          >
            <a-input-password v-model:value="formState.password" />
          </a-form-item>

          <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
            <a-button type="primary" html-type="submit" @click="login">Submit</a-button>
          </a-form-item>
        </a-form>
      </a-card>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { userStore } from '@/stores/modules/user/index'
import { useRouter } from 'vue-router'

const { loginByUsername, getUserInfo } = userStore()
const router = useRouter()

interface FormState {
  username: string
  password: string
}

const formState = reactive<FormState>({
  username: 'superu6',
  password: 'superu6'
})
const onFinish = (values: any) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}

const login = async () => {
  const result = await loginByUsername(formState)
  localStorage.setItem('token', result.data.access_token)
  console.log("🚀 ~ login ~ result:", result)
  // window.localStorage.setItem('setSessionData', JSON.stringify(window.sessionStorage))
  // window.localStorage.removeItem('setSessionData')
  getUserInfo()
  // router.push('/')
}
</script>

<style lang="scss" scoped>
/**
 * TODO 替换自己的背景图片
 */
.bg {
  background-image: url('https://store.antdv.com/pro/preview/assets/background-d7103c44.svg');
}
</style>
