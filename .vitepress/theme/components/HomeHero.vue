<script setup lang="ts">
import { useData } from "vitepress";
import { WButton } from "vue-windi";
const { frontmatter } = useData();
const data = frontmatter.value

</script>
<template>
  <div class="mb-12 md:mb-14">
        <img v-if="data.heroImage" :src="data.heroImage" class="mx-auto mb-4" />
        <div class="text-center">
          <h1
            v-if="data.heroText"
            class="text-base-text text-3xl leading-10 font-semibold sm:text-5xl sm:leading-16"
          >
            {{ data.heroText }}
          </h1>
          <p
            v-if="data.tagline"
            class="m-0 mt-2 text-lg opacity-75 leading-6 px-4 sm:text-xl"
          >
            {{ data.tagline }}
          </p>
          <div class="mt-8 flex space-x-4 justify-center">
            <WButton
              v-if="data.actionLink"
              size="md"
              md="lg"
              tag="a"
              :href="data.actionLink"
              >{{ data.actionText }}</WButton
            >
            <WButton
              v-if="data.altActionLink"
              variant="outline"
              size="md"
              md="lg"
              tag="a"
              :href="data.altActionLink"
              >{{ data.altActionText }}</WButton
            >
          </div>
        </div>
      </div>
</template>
<style>
.home {
  height: calc(100vh - 73px);
}
</style>