<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { isDark, setDark } from "../composables/dark"
import { IconLight, IconDark, IconGithub } from "../icons";
import { WButton } from "vue-windi"
import { useData } from 'vitepress'
const { theme, site } = useData()


const data = {
  site: site.value,
  theme: theme.value
}
const isNavIcons = ref(false);
onMounted(()=>{
  isNavIcons.value = true
})

const hasLogo = computed(()=> data.theme.logo !== undefined) 
const hasRepo = computed(()=> data.theme.repo !== undefined)


function sidebarToggler(){

}
</script>
<template>
  <nav
    class="flex sticky h-[73px] top-0 z-40 flex-none py-3 mx-auto w-full bg-base-100 border-b"
  >
    <div
      class="flex justify-between items-center px-3 mx-auto w-full max-w-7xl lg:px-4"
    >
      <div class="flex">
        <button
          @click.prevent="sidebarToggler"
          type="button"
          class="inline-flex items-center p-2 mr-2 text-sm text-zinc-500 rounded-lg lg:hidden hover:bg-zinc-300/10 focus:outline-none focus:ring-2 focus:ring-zinc-300/10 active:bg-zinc-300/10"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            ></path>
          </svg>
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      <a class="flex gap-3 " href="/">
        <transition name="bounce" appear>
           <img v-if="hasLogo" :src="`${data.theme.logo}`" 
           class="mx-auto h-7" />    
        </transition>
        <span
          class="self-center text-lg font-semibold whitespace-nowrap text-primaryFg"
          >{{data.site.title}}</span
        >
        </a>
      </div>
      <div   v-if="isNavIcons" class="md:flex md:order-2">
        <WButton v-if="hasRepo"  
        tag="a" 
        :href="`https://github.com/${data.theme.repo}`"
        target="_blank"
        variant="transparent" 
        color="secondary"
        class="fill-base-text" 
         >
            <IconGithub />
            </WButton>
         <WButton       
            variant="transparent"
            color="secondary"
            @click="setDark" 
            class="fill-base-text" >
          <IconLight v-show="!isDark" />
          <IconDark  v-show="isDark" />
          </WButton>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  opacity: 0;
  position: absolute;
}
@keyframes bounce-in {
  0% {
    transform: scale(1.05);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
</style>
