/**
 * Created by zyut on 2018-09-05.
 */

import axios from 'axios'
import Qs from 'qs'
import Cookie from 'js-cookie'

/*为请求头全局加上 Authorization*/
axios.interceptors.request.use(
    config => {
        if (Cookie.get('token')) {
            config.headers.Authorization = Cookie.get('token');

        } else {
            // config.headers.Authorization = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJzYWlsLXVzZXIiLCJpc3MiOiJzYWlsIiwiY3VzdG9tZXJDb2RlIjoiQTYiLCJleHAiOjE1MzgyMTI5MjQ1NjcsImlhdCI6MTUzODIwOTMyNDU2NywiYWNjb3VudCI6IuadreW3nua1meWzsOS8muiuoeW4iOS6i-WKoeaJgOaciemZkOWFrOWPuCIsImp0aSI6IjEifQ.Wm8uKNUn1g7E2qibGII2NJjDU-mLHS0EDz6nXDlGmo8';
        }
        return config
    },
    err => {
        alert('页面有误')
        return Promise.reject(err)
    })

// const BaseUrl = 'http://192.168.0.152:8102'
const defPostConfig = { // post 请求
    // baseURL: BaseUrl,
    headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
    timeout: 6000,
    transformRequest: [function (data) {// 允许在请求数据发送到服务器之前对其进行更改
        return JSON.stringify(data)
    }]
}

const defGetConfig = (params = {}) => { // get请求
    return {
        params,
        timeout: 6000,
        paramsSerializer: function(params) {// 负责序列化`params`
            return Qs.stringify(params, {arrayFormat: 'repeat'})
        },
    }
}
export default {
    doget(params = {}) {
        return new axios.get(url, defGetConfig(params))
    },
    dopost(data = {}) {
        return new axios.post(url, data, defPostConfig)
    },
    
    
   
}
