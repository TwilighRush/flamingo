/*
 * @Author: wang,shuang
 * @Date: 2021-12-24 14:04:01
 * @Description: filte description
 */
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: true,
  head: {
    title: "flamingo",
    htmlAttrs: {
      lang: "zh",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      // aplayer https://gitcode.net/mirrors/metowolf/MetingJS?utm_source=csdn_github_accelerator
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css",
      },
    ],
    script: [
      {
        src: "//at.alicdn.com/t/font_3065393_lfe2hj5rnsb.js",
      },
      // aplayer https://gitcode.net/mirrors/metowolf/MetingJS?utm_source=csdn_github_accelerator
      {
        src: "https://s3.pstatp.com/cdn/expire-1-M/jquery/3.3.1/jquery.min.js",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/styles/_global.scss"],
  styleResources: {
    scss: ["@/assets/styles/_screen.scss"],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://www.npmjs.com/package/@nuxtjs/style-resources
    "@nuxtjs/style-resources",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
};
