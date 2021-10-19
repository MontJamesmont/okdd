<template>
  <Section class="about text-white" :id="id">
    <div class="left px-16 text-2xl">
      <b>Proces projektowy</b> to przede wszystkim szczegółowa <b>analiza potrzeb Klienta</b>.
      <br>
      Poprzez rozmowę i prezentację adekwatnych przykładów jesteśmy w stanie ustalić jakie są Państwa oczekiwania w kwestii funkcjonalności projektowanej przestrzeni,
      a także preferencje estetyczne.
    </div>
    <div class="logo min-w-full w-full flex lg:w-1/3 items-center justify-center">
      <LogoSquare class="w-full h-full"></LogoSquare>
    </div>
    <div class="right text-right px-14 text-2xl">
      Nauczeni własnym doświadczeniem wiemy, że istnieje kilka wzorców estetycznych, które wpisują się <br>w gust danego odbiorcy.
    </div>
  </Section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Section from '@/components/Section.vue'
import LogoSquare from '@/components/icons/Logo-square.vue'

export default defineComponent({
  name: 'AboutUs',
  props: {
    id: String
  },
  components: {
    Section,
    LogoSquare
  }
})
</script>

<style scoped lang="scss">
  .about {
    font-family: 'Lato-Thin';
    &:deep {
      .content {
        @apply gap-5 flex flex-wrap;
        @media (min-width: 1536px) {
          @apply gap-5 flex flex-nowrap;
        }
      }
    }
    .left, .right {
      @apply py-24 min-w-0;
      background-color: #cdb29f;
      line-height: 4rem;
      flex-basis: 33.3333%;
      flex-grow: 1;
      @media (min-width: 1024px) {
        min-width: 35rem;
      }
    }
    .logo {
      background-color: #e1d0c6;
      min-width: 33.3333333333%;
    }
  }
</style>
