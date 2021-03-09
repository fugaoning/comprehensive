// 微信分享
import Vue from 'vue'
import axios from 'axios'  // 如nuxt已经集成了axios 此处可以去掉
import wx from 'weixin-js-sdk'

Vue.prototype.$axios = axios // 如nuxt已经集成了axios 此处可以去掉
Vue.prototype.$wechat = wx

const wechatShare = {
    install(Vue) {
        Vue.prototype.wxShare = function(shareData, url) {
            console.log('wx-share', shareData, url)
            // return
            this.$axios.get('http://api.jinrilvsi.com/wx/shield/getWxConfig', {
                // 请求配置
                params: {
                    url: url , // 根据后台配置填写
                    sysCode: 'xg_jinrilvsi'
                }
            }).then(res => {
                // console.log('rsdadades',res)

                const result = res.data.body
                //通过config接口注入权限验证配置
                this.$wechat.config({
                    debug: false, // 是否开启调试模式
                    appId: result.appid, // 必填，公众号的唯一标识
                    timestamp: result.timestamp, // 必填，生成签名的时间戳
                    nonceStr: result.noncestr, // 必填，生成签名的随机串
                    signature: result.signature, // 必填，签名
                    // jsApiList: ['checkJsApi','updateAppMessageShareData', 'updateTimelineShareData', 'onMenuShareAppMessage', 'onMenuShareTimeline']
                    jsApiList: ['checkJsApi','onMenuShareAppMessage', 'onMenuShareTimeline'] // 必填，需要使用的JS接口列表
                })
            })
            this.$wechat.ready(() => {
                console.log('shareData', shareData)

                // 测试是否支持指定js接口
                this.$wechat.checkJsApi({
                    // jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData', 'onMenuShareAppMessage', 'onMenuShareTimeline'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
                    jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
                    success: function(res) {
                    // 以键值对的形式返回，可用的api值true，不可用为false
                    // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
                        console.log('checkJsApi',res)
                    }
                });
                
                // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）
                // this.$wechat.updateAppMessageShareData({
                //     title: shareData.title,// 分享标题
                //     desc: shareData.desc,// 分享描述
                //     link: shareData.url,// 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                //     imgUrl: shareData.image,// 分享图标
                //     success: function () {
                //         // 设置成功
                //         console.log('updateAppMessageShareData', '分享成功')
                //         // alert('分享成功')
                //     },
                //     cancel: function () {
                //         console.log('updateAppMessageShareData', '分享取消')
                //     }
                // });

                //获取“分享给朋友”按钮点击状态及自定义分享内容接口（即将废弃）
                this.$wechat.onMenuShareAppMessage({
                    title: shareData.title, // 分享标题
                    desc: shareData.desc, // 分享描述
                    link: shareData.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: shareData.imgUrl, // 分享图标
                    success: function () {
                        // 用户点击了分享后执行的回调函数
                        console.log('onMenuShareAppMessage', '分享成功!')
                    },
                    cancel: function () {
                        console.log('onMenuShareAppMessage', '分享取消!')
                    }
                });


                // 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容（1.4.0）
                // this.$wechat.updateTimelineShareData({
                //     title: shareData.title,
                //     desc: shareData.desc,
                //     link: shareData.url,
                //     imgUrl: shareData.image,
                //     success: function () {
                //         // 设置成功
                //         console.log('updateTimelineShareData', '分享成功')
                //     },
                //     cancel: function () {
                //         console.log('updateTimelineShareData', '分享取消')
                //     }
                // });
                
                //获取“分享到朋友圈”按钮点击状态及自定义分享内容接口（即将废弃）
                this.$wechat.onMenuShareTimeline({
                    title: shareData.title, // 分享标题
                    desc: shareData.desc,
                    link: shareData.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: shareData.imgUrl, // 分享图标
                    success: function () {
                        // 用户点击了分享后执行的回调函数
                        console.log('onMenuShareTimeline', '分享成功!')
                    },
                    cancel: function () {
                        console.log('onMenuShareTimeline', '分享取消')
                    }
                });
            })

            this.$wechat.error(err => {
                console.log('error',err)
                // alert(err)
            })

        }
    }
}

Vue.use(wechatShare)
