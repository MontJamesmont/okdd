<template>
  <Section class="about" title="O nas" :id="id">
    <div class="description text-xl mb-14">
      Studio.OKDD - "Od Kreski Do Deski"
      <br>
      Zajmiemy się Twoim wnętrzem od projektu po jego wykonanie!
    </div>
    <div class="description-person relative text-xl flex">
      <div class="background absolute bottom-0 w-full left-0"></div>
      <div class="image z-10 pl-5 flex justify-end">
        <img class="w-full" src="@/assets/profile.png" alt="">
      </div>
      <div class="text z-10 mt-12">
        <div class="topText ">Magda Szabłowska - założycielka Studio.OKDD</div>
        <div class="bottomText pr-5">
          Jestem absolwentką Architekury Politechniki Gdańskiej.
          <br>
          <br>
          Na przełomie swojego doświadczenia zawodowego
          miałam okazję projektować mieszkania wielkości
          garderoby i garderoby wielkości mieszkań, poszukując
          złotego środka pomiędzy <b><i>Less is more</i></b> a <b><i>Less is bore.</i></b>
        </div>
      </div>
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
  .about {
    @apply mb-0;
    &:deep h1 {
      @apply ml-48;
    }
  }
  .description {
    @apply ml-48;
    font-family: 'Lato-Light';
    max-width: 32rem;
  }
  .description-person {
    max-width: 54rem;
    .background {
      height: calc( 100% - 5rem );
      background-color: #dadada;
    }
    .image {
      width: 60rem;
      img {
        object-fit: contain;
        object-position: bottom;
      }
    }
    .bottomText {
      font-family: 'Lato-Light';
    }
  }
</style>
