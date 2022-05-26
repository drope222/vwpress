<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useRoute } from "vitepress";
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import Home from "./components/Home.vue";
import Doc from "./components/Doc.vue";
import TableOfContents from "./components/TableOfContents.vue";

const route = useRoute();
const isHome = computed(() => !!route.data.frontmatter.home);

onMounted(() => {
  document.body.classList.add("bg-base-100");
});
</script>
<template>
  <div class="bg-base-100 h-full antialiased">
    <Navbar />
    <section>
      <div class="px-6 mx-auto max-w-8xl pt-$navbar-height">
        <div class="lg:(flex space-x-4 p-0)">
          <Sidebar />
          <main
            id="content-wrapper"
            class="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible"
          >
            <Home v-if="isHome" />
            <Doc v-else>
              <Content />
            </Doc>
          </main>
          <TableOfContents />
        </div>
      </div>
    </section>

    <Debug />
  </div>
</template>
<style>
/* cant import /VWPress/.vitepress/theme/index.ts
error when build */
@import "vue-windi/css";
</style>
