import axios from "axios";
import apiConfig from "./config";
import Cookie from 'js-cookie';
import tool from '~/assets/js/utils'

const urlMap = {
  development_apiURL: "http://192.168.0.160:8106", // 建雄调试接口
  test_apiURL: "http://192.168.0.152:8106",
  production_apiURL: "http://api.benlai58.com", //线上api URL

};
let baseUrl;
if (process.env.NODE_ENV === "production") {
  //production 生产环境
  baseUrl = urlMap.production_apiURL;

} else if (process.env.NODE_ENV === "test") {
  //test 测试环境
  baseUrl = urlMap.test_apiURL;
} else {
  //development开发环境
  // baseUrl = urlMap.development_apiURL;
  baseUrl = urlMap.production_apiURL;

}
let http = axios.create();
let uuid = tool.uuid()
http.defaults.withCredentials=true
/*为请求头全局加上 Authorization*/
http.interceptors.request.use(
  config => {
    if (
      config.url !==
      "https://restapi.amap.com/v3/ip?key=9e1678cad8b95a0c4d3fede01f12ef91"

    ) {
      if (Cookie.get("benlai_token")) {
        config.headers.Authorization = Cookie.get("benlai_token");
      }
      if (Cookie.get('uuid')) {
        config.headers.uuid = Cookie.get("uuid");
      } else {
        config.headers.uuid = uuid;
      }
    }
    return config;
  },
  err => {
    alert("页面有误");
    return Promise.reject(err);
  }
);

function get(url) {
  return function(params = {}) {
    return http
      .get(baseUrl + url, {
        params: Object.assign(
          {
            sysCode: apiConfig.sysCode
          },
          params
        ),
        timeout: 6000
      })
      .then(res => {
        return res;
      })
      .catch(e => {
        //异常处理
      });
  };
}
function post(url) {
  return function (data = {}) {
    // console.log(data)
    return http
      .post(baseUrl + url, data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        timeout: 10000,
        transformRequest: [// 允许在请求数据发送到服务器之前对其进行更改
          function (data) {
            // console.log(data)
            data.sysCode = apiConfig.sysCode;
            return JSON.stringify(data);
          }
        ]
      })
      .then(res => {
        return res;
      })
      .catch(e => {
        //异常处理
      });
  };
}
function getLocation(url) {
  return function(params = {}) {
    return http
      .get(url, {
        params: params,
        timeout: 6000
      })
      .then(res => {
        return res;
      })
      .catch(e => {
        //异常处理
      });
  };
}
export { post, get, getLocation };
