
import Vue from 'vue'
import Vuex from 'vuex'
import {getLocationAPI} from '../api/index'

Vue.use(Vuex)
let imgBase
if (process.env.NODE_ENV == 'production') {
    imgBase = 'http://dl.benlai58.com/'
} else if (process.env.NODE_ENV == 'test') {
    imgBase = 'http://dl.benlai58.com/'
} else {
    imgBase = 'http://dl.yiji365.cn/'
}
const state = {
    inquireList: [],// 加入询价列表
    code: '', // 取消询价的code
    cityCode: '',
    _imgBase:imgBase,
    step1:false,//
    step2:false,//控制验证码的弹窗
    step3:false,//控制成功弹窗
    step4: false,//控制失败弹窗
    deviceType:'',

    form:{
        linkName:"",
        linkPhone:"",
        msgCode:"",
        msgToken:"",
    },
    checked:false,
    
    form1:{
        linkName:"",
        linkPhone:"",
        msgCode:"",
        msgToken:"",
    },
    checked1:false,
}

const mutations = {
    // 添加询价
    addInquiryList(state, data) {
        state.inquireList.push(data)
    },
    // 删除询价
    removeInquiryList(state, code) {
        let indexDel  
        state.inquireList.map((item, index) => {
            if (item.contactCode == code) {
                console.log('123', index)
                indexDel = index
                return indexDel
            }
        })
        state.inquireList.splice(indexDel,1)
    },
    // 设置删除的询价的code
    getCode(state, code) {
        state.code = code
    },
    // 获取当前定位cityCode
    getCityCode(state, code) {
        state.cityCode = code
    },
    // 控制表单输入弹窗
    singlePage(state,code){
        state.step1 = code
        state.step2 = false
        state.step3 = false
        state.step4 = false

    },
    // 是否打开验证码弹窗
    verification(state, code){
        state.step1 = false
        state.step2 = code
        state.step3 = false
        state.step4 = false

    },
    // 是否打开成功弹窗
    success(state, code){
        state.step1 = false
        state.step2 = false
        state.step3 = code
        state.step4 = false

    },
    // 是否打开失败弹窗
    failure(state, code){
        state.step1 = false
        state.step2 = false
        state.step3 = false
        state.step4 = code
    },
    //清空五个单页表数据
    empty(state){
        state.form.linkName = ''
        state.form.linkPhone = ''
        state.form.msgCode = ''
        state.form.msgToken = ''
        state.checked = false
        // state.form1.linkName = ''
        // state.form1.linkPhone = ''
        // state.form1.msgCode = ''
        // state.form1.msgToken = ''
        // state.checked1 = false
    },
    //判断五个单页上面的复选框是否选中
    onChecked(state){
        state.checked = state.checked ? false : true
    },
    //判断五个单页下面的复选框是否选中
    onChecked1(state){
        state.checked1 = state.checked1 ? false : true
    },

    
}

const actions = {
    // 获取当前定位
    getLocation({ commit }) {
        return new Promise((resolve, reject) => {
            getLocationAPI().then(res => {
                const obj = res.data
                console.log('getLocation',obj)
                commit('getCityCode',obj.adcode)
                resolve()
          }).catch(error => {
            console.log('error',error)
            reject(error)
          })
        })
    },

}

const store = () => new Vuex.Store({
    state,
    mutations,
    actions
})

export default store