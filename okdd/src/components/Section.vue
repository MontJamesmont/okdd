<template>
  <div :id="id" class="section mx-auto">
    <h1 v-if="title" class="text-3xl mb-10 uppercase">{{title}}</h1>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutUs',
  props: {
    title: String,
    id: String
  }
})
</script>

<style scoped lang="scss">
  .section {
    margin-bottom: 0.6vw;
  }
</style>
