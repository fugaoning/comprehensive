import { get, post,getLocation } from './helper'

// const getLocationAPI = getLocation('https://restapi.amap.com/v3/ip?key=9e1678cad8b95a0c4d3fede01f12ef91')
const getLocationAPI = getLocation('http://api.benlai58.com/area/shield/getArea')
// 文章
const getArticalAPI = get('/search/article')// 获取创头条文章
const getArticleInfoAPI = get('/article/shield/findById')// 根据ID获取文章详情
const getArticleChangeAPI = get('/article/shield/next')// 文章详情 上/下一篇
const articleStatic = get('/article/shield/statistics')// 文章详情埋点
//常用
const getPhoneCodeAPI = get('/code/shield/getMsgCode') //获取手机短信验证码
const getImgCodeAPI = get('/code/shield/getImgCode') //获取图片验证码
const getAreaAPI = get('/serviceArea/shield/findByPid') // 获取地区
//修改密码
const findPsdOneAPI = post('/zhg/cust/shield/findPswdOne') // 修改密码1
const findPsdTwoAPI = post('/zhg/cust/shield/findPswdTwo') // 修改密码2
//登录、注册
const postLoginAPI = post('/zhg/cust/shield/login') //账号登陆
const postRegisterAPI = post('/zhg/cust/shield/register') //账号注册

export {
  
  getLocationAPI,
  getArticalAPI,
  getArticleInfoAPI,
  getArticleChangeAPI,
  articleStatic,
  getPhoneCodeAPI,
  getAreaAPI,
  postLoginAPI,
  postRegisterAPI,
  getImgCodeAPI,
  findPsdOneAPI,
  findPsdTwoAPI,
  
}
