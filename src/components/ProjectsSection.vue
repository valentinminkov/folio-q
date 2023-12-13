<script setup lang="ts">
import ProjectCard from 'components/ProjectCard.vue';
import { type Project } from 'components/types/components';

export interface ProjectsSection {
  title: string;
  projects: Project[];
}

const { projects, title } = defineProps<ProjectsSection>();
</script>

<template>
  <div class="container">
    <h4>{{ title }}</h4>
    <q-intersection
      transition="fade"
      v-for="project in projects"
      :key="project.title"
    >
      <ProjectCard
        :title="project.title"
        :description="project.description"
        :image="project.image"
        :on-click="project.onClick"
      />
    </q-intersection>
  </div>
</template>

<style scoped lang="scss">
@import '../css/mixins';
@import '../css/vars';
.container {
  background-color: blanchedalmond;
}
</style>
