<template>
  <aside
    class="hidden md:fixed inset-0 z-30 flex-none  w-72 h-screen lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-48 lg:block border-r bg"
  >
    <div
      id="navWrapper"
      class="overflow-hidden overflow-y-auto z-20 h-full bg-primaryBg scrolling-touch max-w-2xs lg:h-screen lg:block lg:sticky top:24 lg:top-12 lg:mr-0"
    >
      <nav
        id="nav"
        class="pt-16 px-1 pl-3 lg:pl-0 lg:pt-2 overflow-y-auto font-medium text-base lg:text-sm pb-10 lg:pb-20 sticky?lg:h-(screen-18)"
        aria-label="Docs navigation"
      >
        <ul class="mb-0 list-unstyled">
          <li class="mt-8">
            <h5
              class="mb-2 text-sm font-semibold tracking-wide text-primaryFg uppercase lg:text-xs"
            >
              Getting started
            </h5>
         
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
export default {
  methods: {
        sidebarToggler(){
    }
  
  }
};
</script>

<style>
</style>