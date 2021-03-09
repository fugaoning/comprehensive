import { get, post,getLocation } from './helper'
//常用
const getPhoneCodeAPI = get('/code/shield/getMsgCode') //获取手机短信验证码
const getVialImgAPI = get('/code/shield/getImgCode') //获取图片验证码
const getcity = get('/area/shield/findByPid')//获取行政区域城市
const areaAPI = get('/area/shield/findByPid') //获取行政区域地区
const getServiceAreaAPI = get('/serviceArea/shield/findByPid') //获取服务区域(pid:'')
const serveClass = get('/itemCategory/findBySysCode')//服务类目一级
const getserve = get('/item/findBySysCode') // 获取服务类目二级
// const getLocationAPI = getLocation('https://restapi.amap.com/v3/ip?key=9e1678cad8b95a0c4d3fede01f12ef91')
const getLocationAPI = getLocation('http://api.yiji365.com/area/shield/getArea')


//文章
const getArticalAPI = get('/article/shield/list')// 获取创头条文章
const getArticleInfoAPI = get('/article/shield/findById')// 根据ID获取文章详情
const getArticleChangeAPI = get('/article/shield/next')// 文章详情 上/下一篇

//h5接口 登录、注册
const postRegisterAPI = post('/h5/customer/shield/phoneRegister') //用户注册   
const postLoginAPI = post('/h5/customer/shield/login') //用户登录
const postFindPswdOneAPI = post('/h5/customer/shield/findPswdOne') //修改密码第一步
const postFindPswdTwoAPI = post('/h5/customer/shield/findPswdTwo') //修改密码第二步
const postVialMsgAPI = post('/code/shield/vialMsg') //修改手机号第一步//用户短信验证身份，在操作账户管理前的必备操作
const postUpdatePhone = post('/zhg/cust/updateCustomerPhone') //修改手机号第二步

export {
  
  getcity,
  getserve,
  serveClass,
  getPhoneCodeAPI,
  getVialImgAPI,
  areaAPI,
  getServiceAreaAPI,
  getLocationAPI,
  getArticalAPI,
  getArticleInfoAPI,
  getArticleChangeAPI,
  //移动
  postRegisterAPI,
  postLoginAPI,
  postFindPswdOneAPI,
  postFindPswdTwoAPI,
  postVialMsgAPI,
  postUpdatePhone,
  
}
