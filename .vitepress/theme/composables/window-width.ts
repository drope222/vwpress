import { ref, onMounted, onUnmounted, computed } from "vue";

export function windowWidth() {
  const windowWidth = ref<Number>(0);

  const onWidthChange = () => (windowWidth.value = window.innerWidth);

  onMounted(() => {
    windowWidth.value = window.innerWidth;
    window.addEventListener("resize", onWidthChange);
  });
  onUnmounted(() => window.removeEventListener("resize", onWidthChange));

  const isLgSize = computed(() => {
    if (windowWidth.value && windowWidth.value >= 1024 && windowWidth.value) {
      return true;
    }
    return false;
  });

  return { isLgSize };
}
