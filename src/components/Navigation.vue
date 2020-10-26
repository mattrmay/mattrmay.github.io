<template>
    <div class="flex">
        <button @click="menuOpen = !menuOpen" class="z-10 sm:hidden absolute top-0 right-0 mt-8 mr-8 border-none flex-none focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-12 fill-current">
            <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-if="menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
        </button>
        <nav :class="menuOpen ? 'block' : 'hidden'" class="absolute left-0 w-full bg-white sm:bg-none sm:relative sm:block mt-4 pt-4 pb-8 sm:mt-0 sm:pt-2 sm:pb-0 sm:flex sm:space-x-6 space-y-4 sm:space-y-0 sm:items-center text-3xl sm:text-base font-thin sm:font-normal tracking-wide text-center sm:text-left shadow-md sm:shadow-none">
            <a class="block" href="#">About</a>
            <a class="block" href="#">Updates</a>
            <a class="block" href="#">Projects</a>
            <a class="block" href="#">Contact</a>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
  },
  data() {
    return {
      menuOpen: false
    }
  }
}
</script>
