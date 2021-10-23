<template>
  <Section class="hero relative w-full max-w-full" :id="id">
    <img class="background absolute mx-auto w-full object-cover" src="@/assets/hero.jpg" alt="">
    <img class="logo pt-6 sm:pt-14 md:pt-16 px-5 relative mx-auto object-contain" src="@/assets/logo.png" alt="">
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
      height: 100%;
    }
    .logo {
      width: 18rem;
      @media (min-width: 640px) {
        width: 26rem;
      }
      @media (min-width: 768px) {
        width: 35rem;
      }
    }
  }
</style>
