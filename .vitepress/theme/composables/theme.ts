import { ref, onMounted  } from "vue"

const useTheme = () => {
    
    const isTheme = ref<string>('theme-default')

    onMounted(()=> {
        const storaged = localStorage.getItem('theme')

        if(storaged)        
            isTheme.value = storaged  
            
        document.documentElement.classList.add(isTheme.value);     
    })

    function changeTheme(color:string) {
        document.documentElement.classList.remove(isTheme.value);
        isTheme.value = color;

        document.documentElement.classList.add(isTheme.value);
        localStorage.setItem("theme", isTheme.value);   
    }  
    
    return { isTheme, changeTheme }

}

export { useTheme }