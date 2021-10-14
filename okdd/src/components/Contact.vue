<template>
  <Section class="contact" title="Kontakt" :id="id">
    <div class="inner-content text-lg mx-auto text-center">
      <div class="block title">Studio.OKDD - "Od Kreski Do Deski"</div>
      <a href="mailto:studio@okdd.pl" class="block">studio@okdd.pl</a>
      <a href="tel:+48503694037" class="block">503 - 694 - 037</a>
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
  .contact {
    @apply pt-0;
    &:deep {
      h1 {
        text-align: center;
        @apply mb-3;
      }
    }
    .block {
      @apply mb-6;
      &.title {
        font-family: 'Lato-Light';
      }
    }
  }
</style>
