<template>
  <Section class="banner relative w-full max-w-full" :id="id">
    <div class="wrapper mx-auto">
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
    /* height adjusting is a workaround as I didn't know how to set wrapper with background will be around hand pickture */
    min-height: 26vw;
    @media (min-width: 640px) {
      min-height: 22vw;
      }
    @media (min-width: 768px) {
      min-height: 20vw;
    }

    .hand {
      float: right;
      clear: right;
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
