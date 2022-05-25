<script setup lang="ts">
import DocFooter from "./DocFooter.vue"
</script>
<template>
  <div class="flex w-full">
    <div class="flex-auto min-w-0 max-w-4xl lg:px-8 pb-10">
     <slot />

     <DocFooter />
    </div>
  </div>
</template>
