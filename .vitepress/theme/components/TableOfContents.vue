<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vitepress";
import { WMenu, WButton } from "vue-windi";

const route = useRoute();
const isHome = computed(() => !!route.data.frontmatter.home);

const pageTitle = computed(() => {
  return route.data.title;
});

const headers = computed(() => {
  return route.data.headers;
});
</script>
<template>
  <aside v-if="!isHome" class="hidden lg:block">
    <div class="sticky top-$navbar-height overflow-y-auto w-42">
      <div v-if="headers.length" class="py-4 lg:pt-10">

    
      <h5 class="ml-2 transition duration-100 font-bold py-2 px-2">
        {{ pageTitle }}
      </h5>
      <WMenu
        v-for="header in headers"
        compact
        hover-border
        class="shadow-0 w-auto"
      >
        <WButton tag="a" :href="`#${header.slug}`" menu-item>{{
          header.title
        }}</WButton>
      </WMenu>
        </div>

 
    </div>
  </aside>
</template>
