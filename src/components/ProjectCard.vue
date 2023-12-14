<script setup lang="ts">
import { type Project } from 'components/types/components';
import TextBlock from 'components/TextBlock.vue';
const { title, image, onClick, description } = defineProps<Project>();
</script>

<template>
  <div class="container" @click="onClick">
    <TextBlock :title="title" :description="description" />

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

.previewContainer {
  width: 50%;
  height: 100%;
}
</style>
