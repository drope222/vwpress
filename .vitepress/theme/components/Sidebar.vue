<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vitepress";
import { isOpen, toggleSidebar, closeSidebar } from "../composables/sidebar";
import { windowWidth } from "../composables/window-width";
import { useSidebar } from "../composables/sidebar-links";
import { WMenu, WButton } from "vue-windi";
import { IconArrowBack } from "./icons";
import NavbarLinks from "./NavbarLinks.vue";
import BackDrop from "./BackDrop.vue";

const { isLgSize } = windowWidth();
const { sidebarLinks } = useSidebar();

const route = useRoute();
const isHome = computed(() => !!route.data.frontmatter.home);
</script>
<template>
  <BackDrop @click="toggleSidebar" :show="isOpen" />
  <transition name="sidebar-slide">
    <aside
      v-show="isOpen || isLgSize"
      :class="{ '!lg:hidden': isHome }"
      class="fixed inset-0 z-40 flex-none w-72 h-screen bg-base-100 border-r lg:(z-30 static h-auto overflow-y-visible  w-62 block)"
    >
      <div
        class="lg:hidden flex items-center justify-between h-$navbar-height bg-primary-200/10 px-2"
      >
        <WButton
          @click="toggleSidebar"
          variant="transparent"
          color="secondary"
          class="!fill-base-text"
        >
          <IconArrowBack />
        </WButton>
        <NavbarLinks component="sidebar" />
      </div>
      <div
        class="overflow-hidden overflow-y-auto h-full scrolling-touch max-w-2xs h-screen lg:(fixed mr-0 w-62)"
      >
        <nav
          class="pt-2 px-1 pl-3 overflow-y-auto text-base lg:(pl-0 pt-9 text-sm pb-10 h-(screen-18))"
          aria-label="Docs navigation"
        >
          <WMenu
            v-for="parent in sidebarLinks"
            
            padding
            class="w-full shadow-0 pt-0"
          >
          
            <span class="menu-title"> {{ parent.text }}</span>
            <WButton
              menu-item
              v-for="child in parent.children"
              @click="closeSidebar"
              tag="a"
              :href="child.link"
              >{{ child.text }}</WButton
            >
          </WMenu>
        </nav>
      </div>
    </aside>
  </transition>
</template>
<style>
@media (max-width: 1024px) {
  .sidebar-slide-enter-active {
    transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  }

  .sidebar-slide-leave-active {
    transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  }

  .sidebar-slide-enter-from.right,
  .sidebar-slide-leave-to.right {
    transform: translate(100%);
    opacity: 0;
  }

  .sidebar-slide-enter-from,
  .sidebar-slide-leave-to {
    transform: translate(-100%);
    opacity: 0;
  }
}
</style>
