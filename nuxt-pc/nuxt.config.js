
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: '蚁集网',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '蚁集网，聚焦为全国中小微企业提供一站式服务企业平台，包括：工商财税、知识产权、法律服务、办公装修、办公设备、花卉租赁、办公家具、办公用品、IT/通讯、管理咨询、人力资源、市场营销、技术支持、商务行政等。' },
      { hid: 'keywords', name: 'keywords', content: '中小企业，企业税收优惠，企业优惠政策，中小企业贷款，蚁集网，服务平台，企业贷款，扶持政策，专项资金，融资贷款，项目申报，担保，企业管理培训。' },
      { name: 'referrer', content: 'no-referrer'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  // loading: './components/loading.vue',
  loading: { color: '#ff5500'},
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/common.css',
    'element-ui/lib/theme-chalk/index.css',
    
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/common.js', ssr: true },
    {src: '~/plugins/ElementUI', ssr: true },
    {src: '~/plugins/location', ssr: false },
    // {src: '~/plugins/route', ssr: false },
    
  ],
  /*
  ** Nuxt.js dev-modul    es
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    less: [
      './assets/css/variables.less',
      './assets/css/mixins.less'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    vendor: ['element-ui'],
    extend (config, ctx) {
    }
  },
  server: {
    // port: 8074, // default: 3000
    // host: '192.168.0.45' // default: localhost
  }
}
