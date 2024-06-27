
export interface UserLoginParams {
  username: string,
  password: string,
  randomStr: string | undefined,
  code: string | undefined
}

export type UserType = {
  type: 'normal' | 'thirdParty'
} 