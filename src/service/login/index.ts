import request from '../config/instance'
import {get, post} from '../config/instance'
import type {loginData, loginRes} from './login'
import { api_2, api_3 } from '../config/URL'

// 登录
export const userLogin  = ( data: loginData ): Promise<loginRes>  => {

    return post<loginRes>(`${api_3}/login`, {data})
}
  
//   // 获取用户的信息
//   export const getInfo = () => {
//     return instance({
//       url: `${api_2}/user/getInfo`,
//       method: 'get',
//     })
//   }
  