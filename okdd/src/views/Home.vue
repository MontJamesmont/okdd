<template>
  <div class="home">
    <Hero id="hero" class="hero"></Hero>
    <AboutUs :id="navItems[0].hash"></AboutUs>
    <Projects :id="navItems[1].hash"></Projects>
    <Contact :id="navItems[2].hash"></Contact>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Hero from '@/components/Hero.vue'
import AboutUs from '@/components/AboutUs.vue'
import Contact from '@/components/Contact.vue'
import Projects from '@/components/Projects.vue'

export default defineComponent({
  name: 'Home',
  data: function () {
    return {
      navItems: [{ name: 'O nas', hash: 'aboutUs' }, { name: 'Galeria', hash: 'gallery' }, { name: 'Kontakt', hash: 'contact' }]
    }
  },
  components: {
    Hero,
    AboutUs,
    Contact,
    Projects
  }
})
</script>

<style scoped lang="scss">
  .home {
    scroll-behavior: smooth;
    .hero {
      height: 50vh;
      @media (min-width: 640px) {
        height: 75vh;
      }
      @media (min-width: 768px) {
        height: 100vh;
      }
      :deep {
        @apply p-0;
        .content {
          height: 100%;
        }
      }
    }
  }
</style>
