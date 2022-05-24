import { useData, useRoute } from "vitepress";

const useSidebar = () => {
  const { theme } = useData();

  //get links of sidebar
  const sidebarLink = theme.value.sidebar["/"];

  // need fix this type annotation
  const sidebarLinks: {[key: string]: { [key: string]: any } }= {};

  for (const key in sidebarLink) {
    const parent = sidebarLink[key];
    sidebarLinks[parent.text] = {text: sidebarLink[key].text, children: []};
    for (const key in parent.children) {
      const children = Object.assign({}, parent.children[key]);
      sidebarLinks[parent.text]['children'].push(children);
    }
  }

  return { sidebarLinks }
};

const getActive = () => {
  const route = useRoute();
  const { theme } = useData();  

  if(route.path.includes('404'))
    return undefined

  const activeLink = `https://github.com/${theme.value.repo}/blob/main${route.path.replace('html', 'md')}`;

 return activeLink
}

export { useSidebar, getActive };
