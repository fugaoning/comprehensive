<template>
    <h3>微信分享</h3>
</template>

<script>
export default {
    mounted(){
        let wxlink = window.location.href
        let wxconfig =  {
            title: '律司查',// 分享标题
            desc: this.shareDesc,// 分享描述
            link: wxlink,// 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: this.defaultShareImg// 分享图标
        }
		// this.wxShare(wxconfig,wxlink)
    }
}
</script>

<style>

</style>