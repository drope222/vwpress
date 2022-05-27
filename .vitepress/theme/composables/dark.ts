import { ref, onMounted } from "vue";

const isDark = ref<boolean>(false);

const useDark = () => {
  onMounted(() => {
    const storaged = localStorage.getItem("dark");

    if (storaged !== null) isDark.value = storaged === "dark" ?? true;

    document.documentElement.classList.add(isDark.value ? "dark" : "light");
  });

  function setDark() {
    document.documentElement.classList.remove(isDark.value ? "dark" : "light");
    isDark.value = !isDark.value;
    document.documentElement.classList.add(isDark.value ? "dark" : "light");
    localStorage.setItem("dark", isDark.value ? "dark" : "light");
  }

  return { isDark, setDark };
};

export { useDark };
