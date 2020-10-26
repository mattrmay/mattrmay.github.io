<template>
  <div class="flex-none pt-8 pb-4">
    <div class="sm:flex justify-between">
      <h1 class="text-3xl sm:text-2xl"><a href="#">Matthew May</a></h1>
      <Navigation />
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation'

export default {
  name: 'Header',
  components: {
    Navigation
  },
  props: {
  }
}
</script>
