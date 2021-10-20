<template>
  <Section class="about text-white" :id="id">
    <div class="left px-4">
      <b>Proces projektowy</b> to przede wszystkim szczegółowa <b>analiza potrzeb Klienta</b>.
      <br>
      Poprzez rozmowę i prezentację adekwatnych przykładów jesteśmy w stanie ustalić jakie są Państwa oczekiwania w kwestii funkcjonalności projektowanej przestrzeni,
      a także preferencje estetyczne.
    </div>
    <div class="logo min-w-full w-full flex lg:w-1/3 items-center justify-center">
      <LogoSquare class="w-full h-full"></LogoSquare>
    </div>
    <div class="right text-right px-4">
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
    margin-bottom: 0.6vw;
    font-family: 'Lato-Thin';
    &:deep {
      .content {
        gap: 0.6vw;
        @apply flex flex-wrap;
        @media (min-width: 1024px) {
          @apply flex flex-nowrap;
        }
      }
    }
    .left, .right {
      @apply min-w-0;
      background-color: #cdb29f;
      flex-basis: 33.3333%;
      flex-grow: 1;
      padding: 7vw;
      padding-top: 10vw;
      padding-bottom: 10vw;
      text-align: center;
      font-size: 4.5vw;
      line-height: 9vw;

      @media (min-width: 1024px) {
        padding: 2vw;
        padding-top: 7vw;
        text-align: center;
        font-size: 1.5vw;
        line-height: 3vw;
      }
    }
    .logo {
      background-color: #e1d0c6;
      min-width: 33.3333333333%;
    }
  }
</style>
