

export default ({ app }) => {
    app.router.beforeEach((to, from, next) => {
        const agent = navigator.userAgent
        const isiOS = !!agent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
        console.log('isiOS', isiOS)
        console.log('location.pathname', location.pathname)
        console.log( to.path)
        // XXX: 修复iOS版微信HTML5 History兼容性问题
        if (isiOS && to.path !== location.pathname) {
            // 此处不可使用location.replace
            location.assign(to.fullPath)
        } else {
            next()
        }
        
    })
}
  
