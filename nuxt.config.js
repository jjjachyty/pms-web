const nodeExternals = require('webpack-node-externals')
const resolve = (dir) => require('path').join(__dirname, dir)

module.exports = {
  /*
  ** Router config
  */
  router: {
    middleware: 'auth'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'PMS-物业管理系统',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Property management system' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css' }

    ]
  },
  plugins: [
    { src: '~/plugins/vuetify.js', ssr: false },
    { src: '~/plugins/echarts.js', ssr: false },
    { src: '~/plugins/amaps.js', ssr: false },
    { src: '~/plugins/filters.js', ssr: false },
    { src: '~/plugins/globle.js' },
    { src: '~/plugins/axios.js' }
  ],
  css: [
    '~/assets/style/app.styl'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    babel: {
      plugins: [
        ['transform-imports', {
          'vuetify': {
            'transform': 'vuetify/es5/components/${member}',
            'preventFullImport': true
          }
        }]
      ]
    },
    vendor: [
      '~/plugins/vuetify.js',
      '~/plugins/echarts.js',
      '~/plugins/amaps.js',
      'axios'
    ],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    }
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    // proxy: true, // Can be also an object with default options
    credentials: true,
    baseURL: 'http://127.0.0.1:3000'
    // browserBaseURL: 'https://api.bmobcloud.com/1'
  },
  proxy: [[
    // 'https://api.bmobcloud.com/1',

    '/api', { target: 'https://api.bmobcloud.com', pathRewrite: { '^/api': '/' } }
  ]]
}
