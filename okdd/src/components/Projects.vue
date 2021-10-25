<template>
  <Section class="projects flex" :id="id">
    <div class="items">
      <div
        class="project overflow-hidden cursor-pointer mb-16 flex flex-nowrap"
        v-for="(project, index) in projects" :key="index"
        v-on:click="openGallery(index)"
        :style="{ backgroundColor: project.background ?? '#cabaaa' }">
        <div class="name text-white uppercase flex flex-grow items-center justify-center">
          <div class="border flex items-center justify-center text-center">
            {{project.name}}
          </div>
        </div>
        <img
          class="picture"
          v-if="project.images && project.images.length > 0"
          :src="project.thumbnail ?? project.images[0]"
          alt="">
        <viewer v-if="galeryOpened === index"></viewer>
      </div>
    </div>
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
      backgrounds: ['#a6a59f', '#b3bcc1', '#ac9f94'],
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
        options: { button: false, navbar: false, title: false, tooltip: false, movable: false, zoomable: false, rotatable: false, scalable: false, transition: false, fullscreen: false, keyboard: false },
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
    font-family: 'Lato-Thin';
    font-size: 5vw;
    line-height: 6vw;
    &:deep {
      .content {
        @apply w-full;
      }
    }
    .project {
      margin-bottom: 0.6vw;
    }
    .name {
      float: left;
      width: 50%;
      padding: 4vw;
    }
    .picture {
      float: right;
      width: 50%;
    }
    .border {
      padding: 3vw;
    }
  }
</style>
