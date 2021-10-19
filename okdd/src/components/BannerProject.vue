<template>
  <Section class="banner w-full max-w-full" :id="id">
    <div class="wrapper">
        <img class="hand object-cover" src="@/assets/BOX1.png" alt="">
    </div>
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
    padding-right: 0;
    padding: 2;
    overflow: hidden;

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
