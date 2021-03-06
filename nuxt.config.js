
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  target: 'static',
  router: {
    base: '/FrontEnter/'
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'swiper/css/swiper.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    
    '~plugins/element-ui',
    // '@/plugins/swiper',
    // { src: '~/plugins/swiper.js', ssr: false },
    '~/plugins/vue-awesome-swiper'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    publicPath: '/nuxt/',
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
