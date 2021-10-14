<template>
  <div class="header px-5 bg-white fixed z-50 top-0 w-full">
    <div class="max-w-screen-lg mx-auto flex">
      <LogoSquare class="mr-auto h-20 w-20 cursor-pointer"></LogoSquare>
      <div class="flex items-center ml-auto py-3">
        <div v-for="(item, index) in navItems" :key="index" class="navItem mr-16 uppercase text-lg" @click=scrollToHash(item.hash)>
          {{item.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { NavItem } from '@/shared/interfaces/navItem.model'
import LogoSquare from '@/components/icons/Logo-square.vue'

export default defineComponent({
  name: 'Header',
  components: {
    LogoSquare
  },
  props: {
    navItems: Object as PropType<NavItem[]>
  },
  methods: {
    scrollToHash: function (hash: any) {
      const element = document.getElementById(hash)
      console.log('elem', element)
      if (element) {
        const topPos = element.getBoundingClientRect().top + window.pageYOffset
        window.scrollTo({
          top: topPos,
          behavior: 'smooth'
        })
      }
    }
  }
})
</script>

<style scoped lang="scss">
  .navItem {
    @apply cursor-pointer;
    font-family: 'Lato';
    &:hover {
      font-family: 'Lato-Bold';
    }
  }
</style>
