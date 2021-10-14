<template>
  <Section class="projects flex" :id="id">
    <div class="items w-2/4">
      <div
        class="project relative overflow-hidden cursor-pointer pl-10 pt-5 mb-28"
        v-for="(project, index) in projects" :key="index"
        v-on:click="openGallery(index)"
      >
        <div class="name text-white text-3xl uppercase mb-5 relative z-10">
          {{project.name}}
        </div>
        <img
          class="w-full align-middle object-cover relative z-10"
          v-if="project.images && project.images.length > 0"
          :src="project.thumbnail ?? project.images[0]"
          alt=""
        >
        <div class="background w-full h-2/4 absolute left-0 top-0" :style="{ backgroundColor: project.background ?? '#cabaaa' }"></div>
        <viewer v-if="galeryOpened === index"></viewer>
      </div>
    </div>
    <img class="background mx-auto w-2/4 h-full object-contain" src="@/assets/projectsRight.jpg" alt="">
  </Section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Section from '@/components/Section.vue'
import { Project } from '@/shared/interfaces/project.model.ts'

export default defineComponent({
  name: 'Projects',
  props: {
    id: String
  },
  data: function () {
    return {
      projects: [] as Project[],
      galeryOpened: -1 as number,
      backgrounds: ['#b3b3ac', '#cabaaa'],
      thumbnails: [
        ''
      ]
    }
  },
  components: {
    Section
  },
  methods: {
    importAll (imagesFunc: any) {
      imagesFunc.keys().forEach((path: any, index: number) => {
        const projectPaths = path.split('projects/')
        const projectName = projectPaths && projectPaths.length > 1 ? projectPaths[1].split('/')[0] : null
        const existingProject = this.projects.find((project: Project) => project.name === projectName)
        if (!existingProject && projectName) this.projects.push({ name: projectName, images: [], background: this.backgrounds[this.projects.length], thumbnail: imagesFunc(path) })
        else if (existingProject) existingProject.images.push(imagesFunc(path))
      })
    },
    openGallery (index: number) {
      this.galeryOpened = this.galeryOpened === index ? -1 : index
      this.$viewerApi({
        images: this.projects[index].images
      })
    },
    getGallery: (images: string[]) => {
      return images.map((image: string) => {
        return {
          src: image,
          thumbnail: image,
          w: 600,
          h: 400
        }
      })
    }
  },
  mounted () {
    this.importAll(require.context('@/assets', true, /\.png|\.jpg$/)) // eslint-disable-line no-undef
  }
})
</script>

<style scoped lang="scss">
  .projects {
    @apply mb-0 pb-0;
    &:deep {
      .content {
        @apply flex;
      }
    }
  }
</style>
