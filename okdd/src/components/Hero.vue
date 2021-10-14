<template>
  <Section class="hero relative w-full max-w-full" :id="id">
    <img class="background absolute max-w-screen-lg mx-auto w-full object-cover" src="@/assets/hero.png" alt="">
    <div class="logoBg absolute h-2/4">
      <img class="relative inline-block h-full max-w-full mx-auto object-contain" src="@/assets/logo.png" alt="">
    </div>
  </Section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Section from '@/components/Section.vue'

export default defineComponent({
  name: 'Hero',
  props: {
    id: String
  },
  components: {
    Section
  }
})
</script>

<style scoped lang="scss">
  .hero {
    max-width: 100%!important;
    width: 100%!important;
    .background {
      height: calc(100% - 1px);
    }
    .logoBg {
      background: rgba(229, 231, 235, 0.7);
    }
  }
</style>
