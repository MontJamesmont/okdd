<template>
  <Section class="banner p-20" :id="id">
    <div class="wrapper mx-auto">
      <div class="text text-center uppercase text-8xl text-white mb-10">Od Kreski Do Deski</div>
      <div class="box text-center uppercase text-5xl text-white border border-white p-10">Project + Realizacja</div>
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
    .wrapper {
      @apply overflow-hidden;
      max-width: 62rem;
      .text {
        font-family: 'Lato-Thin';
        letter-spacing: 2px;
      }
      .box {
        font-family: 'Lato-Thin';
        letter-spacing: 8px;
      }
    }
  }
</style>
