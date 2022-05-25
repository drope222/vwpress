import { useData, useRoute } from "vitepress";
import { computed } from "vue";

const useSidebar = () => {
  const { theme } = useData();

  //get links of sidebar
  const configSidebar = theme.value.sidebar["/"];

  const sidebarLinks = []

  for (const key in configSidebar) {
    const parent = configSidebar[key]; 
    const children: Object[] = []
    const parentLink = {text: configSidebar[key].text, children}   

    for (const key in parent.children) {
      const children = Object.assign({}, parent.children[key]);      
      parentLink.children.push(children)
    
    }
    sidebarLinks.push(parentLink);
  }
  return { sidebarLinks }
};

const getActive = computed(() => {
  const route = useRoute();
  const { theme } = useData();  

  if(route.path.includes('404'))
    return undefined

  const activeLink = `https://github.com/${theme.value.repo}/blob/main${route.path.replace('html', 'md')}`;

 return activeLink
})




export { useSidebar, getActive };
