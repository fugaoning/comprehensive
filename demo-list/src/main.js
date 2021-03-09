import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'
import Cookie from 'js-cookie'
import utils from '@/assets/js/utils.js'



Vue.config.productionTip = false;
Vue.use(ElementUI);

let flag = process.env.VUE_APP_FLAG
if (process.env.NODE_ENV === 'production') {
  if (flag === 'pro') {
    // 生产环境
    
  } else {
    // 测试环境

  }
} else {
  
}

Vue.prototype.defaultShareImg = Vue.prototype._imgBase + 'group1/M00/01/00/rBDK913zYWmAXFZcAAAUxY7ebE4744.png'
Vue.prototype.shareDesc = '律司查'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
