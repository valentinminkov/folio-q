<script setup lang="ts">
import ProjectCard from 'components/ProjectCard.vue';
import TextBlock from 'components/TextBlock.vue';
import { type Project } from 'components/types/components';

export interface ProjectsSection {
  title: string;
  projects: Project[];
}

const { projects, title } = defineProps<ProjectsSection>();
</script>

<template>
  <div class="projectSectionContainer">
    <TextBlock :title="title" />

    <div class="projectsContainer">
      <q-intersection
        transition="fade"
        v-for="project in projects"
        :key="project.title"
        once
      >
        <ProjectCard
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :on-click="project.onClick"
        />
      </q-intersection>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../css/mixins';
@import '../css/vars';
.projectSectionContainer {
  background-color: $thirdiary_color;
  padding-left: 2em;
  padding-bottom: 2em;
  .projectsContainer {
    display: flex;
    flex-direction: column;
    row-gap: 0.5em;
  }
}
</style>
