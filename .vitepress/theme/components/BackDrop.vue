<script setup lang="ts"> 
defineProps({
  show: {
      type: Boolean,
      required: true
  }
})
</script>
<template>
 <transition name="backdrop-fade" appear>
        <div v-show="show"
        class="backdrop fixed inset-0 z-40 flex place-content-center h-screen backdrop-filter backdrop-brightness-60 backdrop-blur-sm" >
        </div>
    </transition>
</template>
<style>

.backdrop-fade-enter-active,
.backdrop-fade-leave-active {
    transition: opacity 0.25s ease;
}

.backdrop-fade-enter-from,
.backdrop-fade-leave-to {
    opacity: 0;
}

/* slightly transparent fallback for Firefox (not supporting backdrop-filter) */
@supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    .backdrop {
         @apply bg-black/35
    }
}
</style>