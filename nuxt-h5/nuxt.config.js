


module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: '本来同集',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0 minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: '一个创业者帮助创业者，创业者学习创业者，创业者成就创业者的创始人合作体，以“汇集智慧，相伴成长”为核心价值，以分享、交流和互助为特色，团结最广大的创业者，以明星企业家为依托，以本来同集智库专家为支撑，通过经验分享，资源对接，在共同学习和交流中助力会员企业的成长与发展。' },
      { hid: 'keywords', name: 'keywords', content: '本来同集，智慧产业服务平台，是一个为企业提供全生命周期服务，联合地方政府、协会等地方机构，通过企业服务、创新平台、智能营销等多元化布局，满足多维增长需求，连接中国7000万中小微企业，打造出中国最大的智慧产业集群。' },
      { name: 'referrer', content: 'no-referrer'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {src:'/js/flexible.js',type:'text/javascript',charset:'utf-8'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
 loading: { color: '#ff5500'},
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/common.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/common.js', ssr: true },
    {src: '~/plugins/vant.js', ssr: true },
    {src: '~/plugins/route.js', ssr: false },
    {src: '~/plugins/wx-share.js', ssr: false },
    {src: '~/plugins/swiper.js', ssr: false },
    {src: '~/plugins/WebIM.js', ssr: false },
    

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
   postcss:[
    require("postcss-px2rem")({
      remUnit: 75
    })
    // require('autoprefixer')
  ],
    vendor: ['axios', 'vant'],
    extend (config, ctx) {
    },
  },
  server: {
    // port: 8060, // default: 3000
    // host: '192.168.0.230' // default: localhost
  }
  
}
