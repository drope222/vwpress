import { defineConfig } from 'windicss/helpers'
import vueWindi from "vue-windi/plugin"

export default defineConfig({
    darkMode: 'class',
    preflight: {
      blocklist: 'h1 h2'
    },
    plugins: [vueWindi],
    vueWindi: {
        themes: [
          "blue",
          "teal",
          "rose",
          "violet",
          "orange",
        ],
      },
})