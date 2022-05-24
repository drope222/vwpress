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
        { text: 'Theme', link: '/docs/theme' },
      ]
    },
    {
      text: 'Components',
      children: [
        { text: 'Button', link: '/docs/button' },
        { text: 'Dropdown', link: '/docs/dropdown' },
        { text: 'Menu', link: '/docs/menu' },
        { text: 'Modal', link: '/docs/menu' },
      ]
    }
  ]
}