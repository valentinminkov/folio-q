<script setup lang="ts">
import { type Project } from 'components/types/components';

const { title, image, onClick, description } = defineProps<Project>();
</script>

<template>
  <div class="container" @click="onClick">
    <div class="textContainer">
      <h3>{{ title }}</h3>
      <p>
        {{ description }}
      </p>
    </div>
    <div class="previewContainer">
      <img :src="image.src" alt="project image" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../css/mixins';
@import '../css/vars';
.container {
  display: flex;
  justify-content: space-between;
  border: solid 1px black;
  overflow: hidden;
}
.textContainer {
  display: flex;
  padding: 0 2em;
  flex-direction: column;
  min-width: 50%;
  align-content: center;
  justify-content: center;
}
.previewContainer {
  width: 50%;
  height: 100%;
}
</style>
