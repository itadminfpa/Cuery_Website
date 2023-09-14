import axios from 'axios';
import { baseUrl } from '@/app.config';
import { getHeaderConfig, clearAuthInfo } from '@/helpers/utils'

export let api = axios.create({
    baseURL: baseUrl,
    timeout: 100000,
    headers: getHeaderConfig().headers
 })
 

export function updateAxiosHeader(){
    api=axios.create({
        baseURL: baseUrl,
        timeout: 100000,
        headers: getHeaderConfig().headers
    })
     
    api.interceptors.response.use(function (response) {
        return response;
        }, function (error) {
        if(error.response.status == 401){
            clearAuthInfo()
        }
    });
}
