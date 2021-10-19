<template>
  <Section class="banner w-full max-w-full" :id="id">
        <img class="my_image object-cover" src="@/assets/BOX2.png" alt="">
  </Section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Section from '@/components/Section.vue'

export default defineComponent({
  name: 'AboutUs',
  props: {
    id: String
  },
  components: {
    Section
  }
})
</script>

<style scoped lang="scss">
  .banner {
    padding: 2;

    .my_image {
      display:block;
      margin:auto;
      width: 90vw;
      @media (min-width: 640px) {
        width: 80vw;
      }
      @media (min-width: 768px) {
        width: 74vw;
      }
    }
  }
</style>
