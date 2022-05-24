<script setup lang="ts">
import HomeNews from "./HomeNews.vue";
import HomeHero from "./HomeHero.vue";
import HomeFeatures from "./HomeFeatures.vue";
import HomeFooter from "./HomeFooter.vue";
</script>
<template>
  <div class="pb-12">
    <div class="flex items-center justify-center home md:px-6">
      <div>
        <HomeHero />
        <HomeNews />
      </div>
    </div>
    <HomeFeatures />
  </div>
  <HomeFooter />
</template>
