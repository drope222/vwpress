import { defineConfig } from 'windicss/helpers'
import vueWindi from "vue-windi/plugin"

export default defineConfig({
    darkMode: 'class',
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