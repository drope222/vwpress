import { ref } from "vue"

const isOpen = ref<boolean>(false)

const toggleSidebar = () =>{
    isOpen.value = !isOpen.value ;
}

const closeSidebar = () => {
    isOpen.value = false;
}


export { isOpen, toggleSidebar, closeSidebar }