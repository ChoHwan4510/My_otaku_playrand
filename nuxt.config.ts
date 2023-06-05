import { defineNuxtConfig } from "nuxt/config";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@pinia/nuxt","@nuxtjs/i18n"],
    vite: {
      // @ts-ignore
      ssr: { noExternal: ["moment"] },
    },
    app: {
        head : {
            meta : [
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
                },
                {
                    name: "description",
                    content: "Global Novelpia"
                },
                {
                    property: "og:type",
                    content: `website`,
                  },
                  {
                    property: "og:site_name",
                    content: `Global Novelpia`,
                  },
                  {
                    property: "og:title",
                    content: `Global Novelpia`,
                  },
                  {
                    property: "og:description",
                    content: `Global Novelpia : The World of Dreaming with Web Novels.`,
                  },
                  {
                    property: "og:url",
                    content: `https://global.novelpia.com`,
                  },
            ]
        }
    },
    css: ["~/assets/sass/init.scss"],
})
