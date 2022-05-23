<script setup lang="ts">
import { useData } from "vitepress";
import { ref } from "vue";
const { frontmatter } = useData();
const data = frontmatter.value;

if(!data.newsColor) data.newsColor = 'primary'
const newsColor = ref(data.newsColor)

if(newsColor.value === 'primary') newsColor.value = 'bg-primary-200/10 text-primary-200'
else if(newsColor.value === 'secondary') newsColor.value = 'bg-secondary-200/10 text-secondary-200'
else if(newsColor.value === 'success') newsColor.value = 'bg-success-200/10 text-success-200'
else if(newsColor.value == 'warning') newsColor.value = 'bg-warning-200/10 text-warning-200'
else if(newsColor.value === 'danger') newsColor.value = 'bg-danger-200/10 text-danger-200'

</script>
<template>
  <div v-if="data.newsTitle && data.newsLink" class="px-4 flex justify-center">
    <a
      class=" inline-flex rounded-$rounded-btn font-bold text-center p-3 md:p-4 lg:px-8 text-sm lg:text-base mx-8"
      :class="newsColor"
      :href="data.newsLink"
    >
      {{ data.newsTitle }}
    </a>
  </div>
</template>
