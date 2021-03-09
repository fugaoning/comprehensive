
import {getLocationAPI} from '~/api/index'
const user = {
  state: {
    userName: '',
    topNavColor: '',
    cityCode:'',
  },
  
  mutations: {
    // 设置顶部导航的颜色
    setTopNavColor(state, data) {
      state.topNavColor = data
    },
    // store 存储定位
    setLocation(state, data) {
      console.log('setLocation',data);
      
      state.cityCode = data
    }
  },

  actions: {
    getLocation({ commit }) {
      return new Promise((resolve, reject) => {
          getLocationAPI().then(res => {
              const obj = res.data
            console.log('getLocation', obj)
              let cityCode = ''
              if (/0000/.test(obj.adcode)) {
                  cityCode = obj.adcode.slice(0, -3) + "100";
              } else {
                  cityCode = obj.adcode;
              }
              commit('setLocation',cityCode)
              resolve(cityCode)
        }).catch(error => {
          console.log('error',error)
          reject(error)
        })
      })
  },
  }
}

export default user
