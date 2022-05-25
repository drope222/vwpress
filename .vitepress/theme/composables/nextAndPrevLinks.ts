import { computed } from "vue";
import { useRoute } from "vitepress";
import { useSidebarFlat } from "./sidebar-links";

const useNextAndPrevLinks = () => {
  const route = useRoute();
  const { sidebarFlat } = useSidebarFlat();

  const index = computed(() =>
    sidebarFlat.findIndex((e) => e.link === route.path.replace(".html", ""))
  );

  const next = computed(() => sidebarFlat[index.value + 1]);
  const previous = computed(() => sidebarFlat[index.value - 1]);

  return { next, previous };
};

export { useNextAndPrevLinks };
