import Vue from 'vue'
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV == 'production') { // 生产环境
    Vue.prototype._toHome = 'http://benlai58.com' // 同集网前台首页

    Vue.prototype._imgBase = 'http://dl.benlai58.com/'
    Vue.prototype._domain = 'benlai58.com'
    Vue.prototype._user = 'http://customer.buyer.benlai58.com'
    
} else if (process.env.NODE_ENV == 'test') { // 测试环境
    Vue.prototype._toHome = 'http://192.168.0.152:8066/' // 同集网前台首页
    Vue.prototype._imgBase = 'http://192.168.0.152:8888/'
    Vue.prototype._user = 'http://customer.buyer.benlai58.com'    

} else { // 开发环境
    // Vue.prototype._toHome = 'http://localhost:3000' //同集网前台首页
    // Vue.prototype._toHome = 'http://benlai58.com' // 同集网前台首页
    Vue.prototype._toHome = 'http://0.0.0.0:3000' // 同集网前台首页

    // Vue.prototype._imgBase = 'http://121.40.103.79:8888/'
    Vue.prototype._imgBase = 'http://dl.benlai58.com/'
    Vue.prototype._user = 'http://customer.buyer.benlai58.com'


}

Vue.prototype.defaultShareImg = Vue.prototype._imgBase + 'group1/M00/00/8A/rBDK9126i1eAV8yLAAAwpw_a1ug102.png'
Vue.prototype.shareDesc = '本来同集，创业创新企业服务平台，是一个集中开放平台资源的整合，联合地方政府、协会等地方机构，通过创业基地、本来学院、服务中心、活动行、融媒体、PLUS服务，连接中国7000万中小企业，打造出中国最大的创新创业商圈。'


