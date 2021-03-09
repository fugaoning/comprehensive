import Vue from 'vue'
console.log(process.env.NODE_ENV)


Vue.prototype._jrlsUrl = 'http://www.jinrilvshi.com' // 今日律司
Vue.prototype._toBuyer = 'http://customer.buyer.yiji365.com/#/'// 蚁集网用户工作台
Vue.prototype._toControl = 'http://customer.control.yiji365.com/#/' // 蚁集网控制台
Vue.prototype._toStore = 'http://work.store.yiji365.com/#/overview' // 蚁集网店铺工作台
Vue.prototype._yjzb = 'http://ziben.yiji365.com/#/' // 本来资本
Vue.prototype._yjjf = 'http://jinrong.yiji365.com/#/' // 本来金服
Vue.prototype._ET = 'http://benlai58.com/member' // ET
Vue.prototype._xxy = 'http://xxy.yiji365.com/#/' // 享学院
Vue.prototype._xypj = 'http://xypj.yiji365.com/#/' // 信用评级中心
Vue.prototype._tbgj = 'http://tbgj.yiji365.com/#/' // 土巴工匠
Vue.prototype._tczj = 'http://tczj.yiji365.com/#/' // 同城租街
Vue.prototype._xgyun = 'http://www.xinggeyun.com/#/'// 星阁云
Vue.prototype._yjskUrl = 'http://kzf.yiji365.com/' // 快账房
Vue.prototype._zscqUrl = 'http://ipr.yiji365.com/#/'// 权果果
Vue.prototype._bltjUrl = 'http://benlai58.com'// 本来同集
Vue.prototype._blkjUrl = 'http://ipark.benlai58.com/'// 空间盒子

Vue.prototype._imgBase = 'http://dl.yiji365.com/'

if (process.env.NODE_ENV == 'production') { // 生产环境
    Vue.prototype._toHome = 'http://www.yiji365.com' // 前台首页
    Vue.prototype._domain = 'yiji365.com'
    
} else if (process.env.NODE_ENV == 'test') { // 测试环境
    Vue.prototype._toHome = 'http://192.168.0.152:8060' // 前台首页

} else { // 开发环境
    Vue.prototype._toHome = 'http://localhost:3000' //前台首页
}

