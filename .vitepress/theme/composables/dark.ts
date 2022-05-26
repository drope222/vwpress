import { ref, onMounted } from "vue"

const isDark = ref<boolean>(false)

const isBrowser = () => typeof window !== "undefined"

const setDark = () => {
    const html = document.getElementsByTagName("html")[0];    
    html.classList.remove(isDark.value ? 'dark' : 'light');
    isDark.value = !isDark.value;
    localStorage.setItem("dark", isDark.value ?  'dark' : 'light');
    html.classList.add(isDark.value ? 'dark' : 'light');    
}

const applyDark = () => {
    onMounted(()=> {
        isDark.value = localStorage.getItem('dark') === null ? false : localStorage.getItem('dark') === 'dark' ? true : false
      
          const html = document.getElementsByTagName("html")[0];    
          html.classList.add(isDark.value ? 'dark' : 'light'); 
   })
   
}

export { isDark, setDark, applyDark }