<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { isDark, setDark } from "../composables/dark";
import { IconLight, IconDark, IconGithub } from "./icons";
import { WButton } from "vue-windi";

import { useData } from "vitepress";
import ThemeSelect from "./ThemeSelect.vue";
const { theme } = useData();
const data = {
  theme: theme.value,
};

const isNavIcons = ref(false);
onMounted(() => {
  isNavIcons.value = true;
});
const hasRepo = computed(() => data.theme.repo !== undefined);
</script>
<template>
    <div v-if="isNavIcons" class="md:flex md:order-2">
        
        <WButton
          v-if="hasRepo"
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