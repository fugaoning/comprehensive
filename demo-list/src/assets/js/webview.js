function setupWebViewJavascriptBridge (callback) {
  //ios
    if (window.WebViewJavascriptBridge) {
      return callback(window.WebViewJavascriptBridge)
    }
    if (window.WVJBCallbacks) {
      return window.WVJBCallbacks.push(callback)
    }
    window.WVJBCallbacks = [callback]
    let WVJBIframe = document.createElement('iframe')
    WVJBIframe.style.display = 'none'
    // WVJBIframe.src = 'https://__bridge_loaded__'
    WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__'
    document.documentElement.appendChild(WVJBIframe)
    setTimeout(() => {
      document.documentElement.removeChild(WVJBIframe)
    }, 0)
  }
  
  export default {
    callhandler (name, data, callback) {
      setupWebViewJavascriptBridge((bridge) =>{
        bridge.callHandler(name, data, callback)
      })
    },
    registerhandler (name, callback) {
      setupWebViewJavascriptBridge((bridge) =>{
        bridge.registerHandler(name, (data, responseCallback)=> {
          callback(data, responseCallback)
        })
      })
    }
  }
  