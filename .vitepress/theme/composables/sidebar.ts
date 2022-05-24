import { ref } from "vue"

const isOpen = ref<boolean>(false)

const toggleSidebar = () =>{
    isOpen.value = !isOpen.value ;
}


export { isOpen, toggleSidebar }