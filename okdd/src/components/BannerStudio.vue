<template>
  <Section class="banner p-20" :id="id">
    <div class="wrapper mx-auto">
      <div class="box text-center text-5xl border border-white p-10 mb-10">Studio.OKDD - "Od Kreski Do Deski"</div>
      <div class="text text-center text-4xl">Zajmiemy się Twoim wnętrzem od projektu po jego wykonanie!</div>
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
  $color: #696969;
  .banner {
    .wrapper {
      max-width: 62rem;
      color: $color;
      @apply overflow-hidden;
      .box {
        font-family: 'Lato';
        border-color: $color;
      }
      .text {
        font-family: 'Lato-Thin';
        letter-spacing: 1px;
        border-color: $color;
      }
    }
  }
</style>
