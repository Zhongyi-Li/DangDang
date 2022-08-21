<script setup lang="ts">
import { ref } from 'vue'
import getImg, { LmgLoader } from '../utils/imgUtil'

defineProps<{ msg: string }>()

console.log('hellWorld.vue', getImg('白夜行.png'))

const count = ref(0)
const imgName = ref('白夜行.png')
</script>

<template>
  <h1>{{ msg }}</h1>
  <img :src="getImg('白夜行.png')" alt="" />
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the
    official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
