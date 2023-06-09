import axios from 'axios';
import type { AxiosInstance ,AxiosRequestConfig, CreateAxiosDefaults, AxiosResponse} from 'axios';
import { api_5 } from './URL'



const instance: AxiosInstance = axios.create({
    baseURL: api_5,
    timeout: 5000
})


instance.interceptors.request.use(
    (config) => {
        return config
    }
)

instance.interceptors.response.use(
    (config:AxiosResponse) => {
        return config.data
    },
    err => {
        // console.log(err);
        return err
    }
)


export function get<T> (url: string, config: any): Promise<T> {
    return instance.get(url, config)
}
export function post<T>  (url: string, config: any): Promise<T> {
    return instance.post(url, config)
}

/* 导出封装的请求方法 */
export default instance

// export default Request