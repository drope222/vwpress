//import DefaultTheme from 'vitepress/theme'

import Layout from './Layout.vue'
import NotFound from './NotFound.vue'


 import './styles/vars.css'
 import './styles/code.css'
 import './styles/custom-blocks.css'

 import './styles/layout.css'


import 'virtual:windi.css'


export default {
  //...DefaultTheme,
  Layout,
  NotFound,
  // enhanceApp({ app }) { 
  //    register global components
  // }
}