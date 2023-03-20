import request from '../config/instance'
import type {loginData} from './login'
import { api_2, api_3 } from '../config/URL'

// 登录
export const userLogin = (data: loginData) => {
    return request({
        baseURL:api_3,
        url:'/login',
        method: 'post',
        data
    })   
}
  
//   // 获取用户的信息
//   export const getInfo = () => {
//     return instance({
//       url: `${api_2}/user/getInfo`,
//       method: 'get',
//     })
//   }
  