
import { CLIENT_INFO, VERSION, DEVICE_TYPE } from '@/config/env'
import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios'
// import qs from 'qs'
import { message } from 'ant-design-vue';
const DEFAUTL_TIMEOUT = 60000
axios.defaults.timeout = DEFAUTL_TIMEOUT
axios.defaults.withCredentials = true

axios.defaults.validateStatus = (status) => {
  return status >= 200 && status <= 500
}


axios.interceptors.request.use(config => {

  config.headers['Accept-Language'] = 'zh-CN'
  const { TENANT_ID } = CLIENT_INFO
  const DEPT_POST = '' // TODO 获取部门信息
  if (DEPT_POST) config.headers['DEPT-POST'] = DEPT_POST
  const isToken = (config.headers || {}).isToken === false
  const token =  localStorage.getItem('token') || '' // TODO 获取token

  if (!token) window.sessionStorage.clear
  if (token && !isToken) config.headers['Authorization'] = 'Bearer ' + token
  if (TENANT_ID) config.headers['TENANT-ID'] = TENANT_ID

  config.headers['VERSION'] = VERSION
  config.headers['device_type'] = DEVICE_TYPE

  const cType = config.headers['Content-Type'] === 'form' ? 'application/x-www-form-urlencoded' : config.headers['Content-Type'];
  if (config.method === 'post' && cType) {
    config.headers['Content-Type'] = cType;
    if (cType === 'application/x-www-form-urlencoded') {
      // config.data = qs.stringify(config.data);
    }
    delete config.data.serialize;
  } else if (config.method === 'post' && config.headers.serialize) {
    // config.data = serialize(config.data);
    delete config.data.serialize;
  }

  if (config.method === 'get') {
    // config.paramsSerializer = params => qs.stringify(params, { arrayFormat: 'repeat' });
  }
  return config
})
interface ICodeMessage {
  [propName: number]: string
}

const StatusCodeMessage: ICodeMessage = {
  200: '服务器成功返回请求的数据',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）',
  204: '删除数据成功',
  400: '请求错误(400)',
  401: '未授权，请重新登录(401)',
  403: '拒绝访问(403)',
  404: '请求出错(404)',
  408: '请求超时(408)',
  500: '服务器错误(500)',
  501: '服务未实现(501)',
  502: '网络错误(502)',
  503: '服务不可用(503)',
  504: '网络超时(504)'
}
// 响应拦截器
axios.interceptors.response.use(
  (response: AxiosResponse) => {
    const { status, data } = response

    const { code, msg } = data
    console.log("🚀 ~ resMessage:", msg)

    if (status === 401 || status === 424) {
      message.error(StatusCodeMessage[status])
      return Promise.reject(new Error('token失效'))
    }

    if (status === 403) {
      message.error('没有权限')
      return Promise.reject(new Error('没有权限'))
    }

    if ((status !== 200 || code === 1) && msg) {
      message.error(msg)
      return Promise.reject(new Error(msg))
    }
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)


export default axios
