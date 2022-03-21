<template>
	<div>
		<input v-model="text"  />
		{{
			text
		}}
		<button @click="clickBtn">点击</button>
	</div>
</template>
<script setup lang="ts">
import { log } from 'console'
import { customRef } from 'vue'
function useDebouncedRef(value, delay = 200) {
  let timeout
  return customRef((track, trigger) => {
    return {
      get() {
        track()
				console.log('获取值');
				return 111
        return value
      },
      set(newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          trigger()
        }, delay)
      }
    }
  })
}

function clickBtn () {
	console.log(text.value)
}

const text = useDebouncedRef('hello', 2000)
</script>
