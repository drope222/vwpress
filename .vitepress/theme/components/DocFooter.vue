<script setup lang="ts">
import {  getActive } from "../composables/sidebar-links";
import { useNextAndPrevLinks } from "../composables/nextAndPrevLinks"
import { WButton } from "vue-windi";
import { IconEdit, IconArrowBack, IconArrowForward } from "./icons";

 const { next, previous } = useNextAndPrevLinks();

</script>
<template>
  <div v-if="getActive">
    <div class="py-8">
      <WButton variant="link" tag="a" target="_blank" :href="getActive">
      <IconEdit class="mr-2" />      
        Suggest changes to this page
      </WButton>
    </div>
    <div class="flex border-t pt-8 justify-between items-center">
      <div class="max-w-1/2 flex items-center">
        <WButton v-if="previous"  variant="transparent" size="sm" tag="a" :href="previous.link"
          ><IconArrowBack class="mr-3 fill-primary-200" /> {{previous.text}}</WButton
        >
      </div>
      <div  class="max-w-1/2 flex items-center">
        <WButton v-if="next" size="sm" tag="a" :href="next.link"
          >{{next.text}} <IconArrowForward class="ml-3 fill-white"
        /></WButton>
      </div>
    </div>
  </div>
</template>
