<script setup lang="ts">
import HomeNews from "./HomeNews.vue";
import HomeHero from "./HomeHero.vue";
import HomeFeatures from "./HomeFeatures.vue";
</script>
<template>
  <div class="flex items-center justify-center home md:px-6">
    <div>
      <HomeHero />
      <HomeNews />
    </div>    
  </div>
      <HomeFeatures />

</template>

