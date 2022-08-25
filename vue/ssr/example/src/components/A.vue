<template>
  <div>
    {{ count }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  asyncData () {
    console.log('arguments' ,arguments);
  }
};
</script>

<style>
</style>