<template>
  <div id="app">
    <CompressDemo msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import CompressDemo from './views/fileCompressDemo.vue'

export default {
  name: 'App',
  components: {
    CompressDemo
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
