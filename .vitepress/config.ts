 import { defineConfig } from 'vitepress'

export default defineConfig({  
  title: 'VWPress',
  description: 'VueWindi + vitepress template',
  
  themeConfig: {
    logo: '/logo.svg',
    repo: 'drope222/vwpress',
    sidebar: {

      '/': getGuideSidebar(),
      '/config/': getGuideSidebar()
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
    }
  ]
}