import Vue from 'vue'
import VueJsBridge from 'vue-webview-js-bridge'
Vue.use(VueJsBridge, {
    debug: true,
    nativeHandlerName: 'testObjcCallback',
    mock: true,
    mockHandler (payload, next) {
      // mock by payload
      // call next(data) to mock data
    }
    // ...
  })