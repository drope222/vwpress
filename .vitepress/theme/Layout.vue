<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vitepress";
import { applyDark } from "./composables/dark"
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import Home from "./components/Home.vue";

applyDark()

const route = useRoute();
const isHome = computed(() => !!route.data.frontmatter.home);
</script>
<template>
  
  <div class="bg-base-100">
    <Navbar />
    <section>
      <div class="px-4 mx-auto max-w-7xl">
        <div class="lg:flex">
          <Sidebar v-if="!isHome" />
          <main
            id="content-wrapper"
            class="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible"
          >
            <Home v-if="isHome" />

            <div v-else class="flex w-full">
              <div
                class="flex-auto pt-6 min-w-0 max-w-4xl lg:px-8 lg:pt-10 pb:12 xl:pb-24 lg:pb-16 mb-10"
              >
                <Content />
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>

    <Debug />
  </div>
</template>
<style>
/* cant import /VWPress/.vitepress/theme/index.ts
error when build */
@import 'vue-windi/css';
</style>
