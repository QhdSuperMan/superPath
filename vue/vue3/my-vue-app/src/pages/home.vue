<template>
  <div>homesdsdssd</div>
  <div>{{ test }}</div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const a: string = 1;
const test = computed(() => {
  return store.state.user.loading;
});
</script>
