
/**
 * 客户端信息
 * @property {string} TENANTE_ID 租户ID
 * @property {string} MODULE_ALIAS_NAME 模块别名
 */
const CLIENT_INFO = {
  TENANT_ID: "0",
  MODULE_ALIAS_NAME: "-1"
} 

const VERSION = 'neunb'
const DEVICE_TYPE = 'pc_g'
const BASE_BEARER = 'Basic dGVjaF9zdHVkd29ya190ZWFjaGVyOmtlYmVzdA=='

const BASE_URL = 'http://192.168.0.180:9199'

const LOGIN_INFO = {
  param: ['password'],
  key: 'kebest@2020cloud' 
}
export { CLIENT_INFO, VERSION,  DEVICE_TYPE, BASE_BEARER, BASE_URL, LOGIN_INFO }