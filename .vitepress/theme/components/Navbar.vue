<script setup lang="ts">
import { computed } from "vue";
import { isOpen, toggleSidebar } from "../composables/sidebar";
import { IconLogo, IconMenu, IconClose } from "./icons";

import NavbarLinks from "./NavbarLinks.vue";
import { useData } from "vitepress";
const { theme, site } = useData();

const data = {
  site: site.value,
  theme: theme.value,
};

const hasLogo = computed(() => data.theme.logo !== undefined );


</script>
<template>
  <nav
    class="flex fixed h-$navbar-height top-0 pr-2 z-40 flex-none py-3 mx-auto w-full bg-base-100 border-b"
  >
    <div
      class="flex justify-between items-center px-3 mx-auto w-full max-w-8xl lg:px-4"
    >
      <div class="flex">
        <button
          @click.prevent="toggleSidebar"
          type="button"
          class="inline-flex items-center p-2 mr-2 text-sm text-zinc-500 rounded-lg lg:hidden hover:bg-zinc-300/10 focus:outline-none focus:ring-2 focus:ring-zinc-300/10 active:bg-zinc-300/10"
        >
          <span class="sr-only">Open main menu</span>
          <IconClose v-if="isOpen" />
          <IconMenu v-else />
        </button>
        <a class="flex gap-3 items-center" href="/">
          <transition name="bounce" appear>

            <IconLogo v-if="!hasLogo" class="h-7" color="fill-primary-200" />
            <img
              v-else
              :src="`${data.theme.logo}`"
              class="mx-auto h-7"
            />
          </transition>
          <span
            class="self-center text-lg font-semibold whitespace-nowrap"
            >{{ data.site.title }}</span
          >
        </a>
      </div>

      <NavbarLinks />
    </div>
  </nav>
</template>
<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  opacity: 0;
  position: absolute;
}
@keyframes bounce-in {
  0% {
    transform: scale(1.05);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
</style>
