var config = require("./config.json")
export default {
  server: {
    port: 1101, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: "Best WoW DM! - Asthriona" || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Hi! I'm Asthriona, And here i'm posting all the best DM I got on WOW not just a DM randomly sended, I love to troll a bit when the player is angry so It make funny thing quite often ahah :p" || '' },
      { hid: 'twitter:card', name: 'twitter:card', content: "summary" },
      { hid: 'twitter:site', name: 'twitter:site', content: "Asthriona" },
      { hid: 'twitter:site', name: 'twitter:creator', content: "@Asthriona" },
      {
        hid: 'og:title',
        property: 'og:title',
        content: "Best WoW DM! - Asthriona"
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: "https://wow.asthriona.com/"
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: "Hi! I'm Asthriona, And here i'm posting all the best DM I got on WOW not just a DM randomly sended, I love to troll a bit when the player is angry so It make funny thing quite often ahah :p"
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: "https://cdn.asthriona.com/TheWallHeader.png"
      },
      { hid: 'og:site_name', name: 'og:site_name', content: "Best WoW DM! - Asthriona" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap' }
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
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
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
    '@nuxtjs/pwa',
    'bootstrap-vue/nuxt',
    ['storyblok-nuxt', 
    { accessToken: 'PCuqllAlvi2AxoiFn6y16Att', cacheProvider: 'memory' },
    ],
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
