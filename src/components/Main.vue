<template>
  <div class="flex-grow">
    <div class="h-full flex items-center">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
    name: 'Main',
    props: {}
}
</script>