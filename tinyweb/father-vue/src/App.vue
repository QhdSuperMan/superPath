<template>
  <div id="app">
    父应用
    <router-link to='/vue'>去子应用</router-link>
    <div id="vue">
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

</style>
