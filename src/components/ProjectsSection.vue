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
    <div class="titleContainer">
      <TextBlock :title="title" />
    </div>

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
  .titleContainer {
    padding: 2em 0;
  }
  background-color: $thirdiary_color;
  padding: 0em 2em;
  padding-bottom: 4em;
  .projectsContainer {
    display: flex;
    flex-direction: column;
    row-gap: 3em;
  }
}
</style>
