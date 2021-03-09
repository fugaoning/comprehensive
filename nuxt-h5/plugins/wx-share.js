
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
            this.$axios.get('http://api.benlai58.com/wx/shield/getWxConfig', {
                // 请求配置
                params: {
                    url: url , // 根据后台配置填写
                    sysCode: 'xg_tongjiwang'
                }
            }).then(res => {
                console.log('res',res)

                const result = res.data.obj
                this.$wechat.config({
                    debug: false,
                    appId: result.appid,
                    timestamp: result.timestamp,
                    nonceStr: result.noncestr,
                    signature: result.signature,
                    // jsApiList: ['checkJsApi','updateAppMessageShareData', 'updateTimelineShareData', 'onMenuShareAppMessage', 'onMenuShareTimeline']
                    jsApiList: ['checkJsApi','onMenuShareAppMessage', 'onMenuShareTimeline']
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
