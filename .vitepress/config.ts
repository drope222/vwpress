 import { defineConfig } from 'vitepress'

export default defineConfig({  
  title: 'VWPress',
  description: 'VueWindi + vitepress template',
  
  themeConfig: {
    logo: '/logo.svg',
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
        { text: 'Item 1', link: '/docs/item-one' },
        { text: 'Item 2', link: '/docs/item-two' },
        { text: 'Item 3', link: '/docs/item-three' },
        { text: 'Item 4', link: '/docs/item-four' },
        { text: 'page 404', link: '/docs/404' },
      ]
    }
  ]
}