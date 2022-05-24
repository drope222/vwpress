<script setup lang="ts">
import { useSidebar, getActive } from "../composables/sidebar-links"
import { WButton } from "vue-windi"
const { sidebarLinks } = useSidebar();

console.log(getActive())



</script>
<template>
<div class="my-8">
<WButton variant="link" tag="a" target="_blank" :href="getActive()">
<svg class="h-5 mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M2 26h28v2H2z" fill="currentColor"></path><path d="M25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6c-.8-.8-2-.8-2.8 0l-15 15V24h6.4l15-15zm-5-5L24 7.6l-3 3L17.4 7l3-3zM6 22v-3.6l10-10l3.6 3.6l-10 10H6z" fill="currentColor"></path></svg>
Suggest changes to this page
</WButton>
</div>


</template>