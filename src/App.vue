<template>
  <div id="app" class="flex flex-col container max-w-6xl h-screen mx-auto px-8 xl:px-0">
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Header, Main
  }
}
</script>
