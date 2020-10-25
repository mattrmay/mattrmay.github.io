<template>
  <div class="header flex-none block pt-8 text-gray-900">
    <div class="sm:flex justify-between">
      <h1 class="text-3xl sm:text-2xl"><a href="#">Matthew May</a></h1>
      <button @click="menuOpen = !menuOpen" class="sm:hidden absolute top-0 right-0 mt-8 mr-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-12 fill-current">
          <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          <path v-if="menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <nav :class="menuOpen ? 'block' : 'hidden'" class="sm:block pt-6 sm:pt-2 sm:flex sm:space-x-6 space-y-6 sm:space-y-0 sm:items-center tracking-wide">
        <a class="block sm:inlines" href="#">About</a>
        <a class="block sm:inlines" href="#">Updates</a>
        <a class="block sm:inlines" href="#">Projects</a>
        <a class="block sm:inlines" href="#">Contact</a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
  },
  data() {
    return {
      menuOpen: false
    }
  }
}
</script>
