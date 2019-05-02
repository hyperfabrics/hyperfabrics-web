const StoryblokClient = require('storyblok-js-client')
const bodyParser = require('body-parser')
const devKeys = require('./env.json')

const env = {
  mode: process.env.MODE || 'universal',
  StoryblokToken: process.env.STORYBLOCK_TOKEN || devKeys.STORYBLOCK_TOKEN,
  StoryblokApiToken: process.env.STORYBLOCK_API_TOKEN || devKeys.STORYBLOCK_API_TOKEN,
  fbDatabaseUrl: process.env.FB_DATABASE_URL || devKeys.FB_DATABASE_URL,
  fbAPIKey: process.env.FB_API_KEY || devKeys.FB_API_KEY,
  mixpanel: process.env.MIXPANEL || devKeys.MIXPANEL, //TODO
  cdnPublicPath: process.env.CDN_PUBLIC_PATH || '/_nuxt/',
  googleAnalytics: process.env.GOOGLE_ANALYTICS || devKeys.GOOGLE_ANALYTICS, // TODO
  mapboxKey: process.env.MAPBOX_KEY, //TODO

  linkexchangeRecipientAddress: process.env.LINKEXCHANGE_RECIPIENT_ADDRESS || devKeys.LINKEXCHANGE_RECIPIENT_ADDRESS,
  linkexchangeTillDate: process.env.LINKEXCHANGE_TILL_DATE || devKeys.LINKEXCHANGE_TILL_DATE,
  linkexchangeWhitelistAddress: process.env.LINKEXCHANGE_WHITELIST_ADDRESS || devKeys.LINKEXCHANGE_WHITELIST_ADDRESS
}


module.exports = {
  mode: env.mode,

  env: {
    fbDatabaseUrl: env.fbDatabaseUrl,
    fbAPIKey: env.fbAPIKey,
    mixpanel: env.mixpanel
  },

  modules: [
    ['storyblok-nuxt', { accessToken: env.StoryblokToken, cacheProvider: 'memory' }],
    ['bootstrap-vue/nuxt'],
    ['@nuxtjs/axios']
  ],
    bootstrapVue: {
      bootstrapCSS: `css`, // or `css`
      bootstrapVueCSS: `bvCSS` // or `bvCSS`
    },
  axios: {
    baseURL: process.env.BASE_URL || 'https://hyperfabrics-marketing.firebaseio.com/',
    fbAPIKey: 'AIzaSyDv5fttneuieG62-jm-RHuhtVRysVcrGG8',
    credentials: false
  },

  vendor: [
    'mixpanel-browser'
  ],

  plugins: [
    { src: '~/plugins/mixpanel', ssr: false },
    { src: '~/plugins/components' },
    { src: '~/plugins/filters' }
  ],

  router: {
    middleware: ['languageDetection', 'log']
  },

  serverMiddleware: [bodyParser.json(), '~/api'],

  generate: {
    routes () {
      let routes = []

      const StoryblokClientInstance = new StoryblokClient({
        accessToken: env.StoryblokToken
      })

      return StoryblokClientInstance.get('cdn/links')
        .then((res) => {
          for (i in res.data.links) {
            routes.push({
              route: '/' + res.data.links[i].slug
            })
          }

          return routes
        })
    }
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'HyperFabrics',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Storyblok project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.9/css/all.css' },
      // { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i' }
    ]
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Build configuration
  */
  build: {
    optimization: {
      splitChunks: {
        chunks: 'async'
      }
    },
    splitChunks: {
      pages: false,
      vendor: true,
      commons: true,
      runtime: true,
      layouts: false
    },
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
