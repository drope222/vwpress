 import { defineConfig } from 'vitepress'

export default defineConfig({  
  title: 'VWPress',
  description: 'VueWindi + vitepress template',
  
  themeConfig: {
    //logo: '/logo.svg',
    repo: 'drope222/vwpress',
    sidebar: {

      '/': getGuideSidebar(),
    }
  }, 
})

function getGuideSidebar() {
  return [
    {
      text: 'Introduction',
      children: [
        { text: 'Getting Started', link: '/docs/getting-started' },       
      ]
    },
    {
      text: 'Something',
      children: [
        { text: 'Item One', link: '/docs/item-one' },
        { text: 'Item Two', link: '/docs/item-two' },
        { text: 'Item Three', link: '/docs/item-three' },
        { text: 'Item Four', link: '/docs/item-four' },
        { text: 'page 404', link: '/docs/404' },
      ]
    }
  ]
}