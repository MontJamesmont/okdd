<template>
  <Section class="banner w-full max-w-full" :id="id">
        <img class="hand object-cover" src="@/assets/BOX1.png" alt="">
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
    background-color: #b2bcc0;
    padding: 3vw;
    padding-right: 0;
    overflow: hidden;

    @media (min-width: 768px) {
        padding: 0.6vw;
        padding-right: 0;
      }

    .hand {
      float: right;
      clear: both;
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
