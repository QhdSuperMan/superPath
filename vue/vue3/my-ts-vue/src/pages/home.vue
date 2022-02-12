<template>
  <div>homesdsdssd</div>
  <div>{{ test }}</div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useHStore } from "@/store/hook";
const store = useHStore();
console.log(store);
const a: string = 1;
const test = computed(() => {
  return store.state.user.loading;
});
</script>
