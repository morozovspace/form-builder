export default {
  vue: {
    config: {
      productionTip: true,
      devtools: true,
    }
  },
  devtools: true,
  target: "static",
  ssr: false,
  srcDir: "src",
  components: true,
  head: {
    title: "Form-builder example",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'msapplication-TileColor',
        content: '#2b2b2b'
      },
      {
        name: 'theme-color',
        content: '#2b2b2b'
      },
    ],
    link: [
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Heebo:100,300,400,500,700,800,900" },
    ],
  },
  router: {
    base: `/${process.env.REPOSITORY_NAME}`
  },
  axios: {
    baseURL: `/${process.env.REPOSITORY_NAME}`
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
  plugins: [
    "~/plugins/components.client",
    "~/plugins/axios",
  ],
  buildModules: [
    "@nuxtjs/eslint-module",
  ],
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/style-resources",
    "@nuxtjs/svg-sprite",
  ],
  styleResources: {
    scss: [
      "@/assets/styles/default/_reset.scss",
      "@/assets/styles/default/_variables.scss",
      "@/assets/styles/default/_mixins.scss",
    ],
  },
  svgSprite: {
    input: "~/assets/svg",
    output: "~/static/icons/",
  },
}