<script setup lang="ts">
import { useData } from "vitepress";
const { frontmatter } = useData();
const features = frontmatter.value.features;
</script>
<template>
  <div class="max-w-960px mx-auto px-2 py-1 md:px-10 pb-10">
    <div class="wrapper">
      <div class="container">
        <div class="features flex flex-wrap flex-shrink-0 w-full">
          <section v-for="feature in features" class="feature">
            <h2
              class="title mb-0 font-medium text-xl md:text-2xl text-base-text"
              v-if="feature.title"
            >
              {{ feature.title }}
            </h2>
            <p
              class="details m-0 pt-1 text-base-text leading-relaxed"
              v-if="feature.details"
            >
              {{ feature.details }}
            </p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.features {
  margin: -20px -24px;
}
.feature {
  padding: 20px 24px;
}
@media (min-width: 720px) {
  .feature {
    width: calc(100% / 3);
  }
}
</style>
