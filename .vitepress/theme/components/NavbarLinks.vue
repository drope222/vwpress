<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useDark } from "../composables/dark";
import { windowWidth  } from "../composables/window-width"
import { IconLight, IconDark, IconGithub } from "./icons";
import { WButton } from "vue-windi";
import { useData } from "vitepress";
import ThemeSelect from "./ThemeSelect.vue";

const isNavIcons = ref(false);
const { theme } = useData();
const { isMdSize } = windowWidth();
const { isDark, setDark } = useDark();


const props = defineProps({
  component: {
      type: String,
      default: 'navbar'
  }
})


const data = {
  theme: theme.value,
};


onMounted(() => {
  isNavIcons.value = true;
});
const hasRepo = computed(() => data.theme.repo !== undefined);

const showRepo = computed(() => {
  if(!hasRepo)
    return false

  if(props.component === "navbar" && isMdSize.value){
    return true
  }  

  if(props.component === "sidebar")
    return true

  return false 
})


</script>
<template>
    <div v-if="isNavIcons" class="md:flex md:order-2">        
        <WButton
          v-if="showRepo"
          tag="a"
          :href="`https://github.com/${data.theme.repo}`"
          target="_blank"
          variant="transparent"
          color="secondary"
          class="fill-base-text"
        >
          <IconGithub />
        </WButton>
        <ThemeSelect />
        <WButton
          variant="transparent"
          color="secondary"
          @click="setDark"
          class="fill-base-text"
        >
          <IconLight v-show="!isDark" />
          <IconDark v-show="isDark" />
        </WButton>
      </div>
</template>