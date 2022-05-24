import { useData } from "vitepress";

const useSidebar = () => {
  const { theme } = useData();

  //get links of sidebar
  const sidebarLink = theme.value.sidebar["/"];

  const sidebarLinks: any= {};

  for (const key in sidebarLink) {
    const parent = sidebarLink[key];
    console.log(sidebarLink[key].text)
    sidebarLinks[parent.text] = {text: sidebarLink[key].text, children: []};
    for (const key in parent.children) {
      const children = Object.assign({}, parent.children[key]);
      sidebarLinks[parent.text]['children'].push(children);
    }
  }

  return { sidebarLinks }
};

export { useSidebar };
