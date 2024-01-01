<script setup lang="ts">
import { type Project } from 'components/types/components';
import TextBlock from 'components/TextBlock.vue';
const { title, image, onClick, description } = defineProps<Project>();
</script>

<template>
  <div class="container" @click="onClick">
    <TextBlock :title="title" :description="description" />

    <div class="imageContainer">
      <q-img :src="image.src" :ratio="16 / 9" class="image" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../css/mixins';
@import '../css/vars';
.container {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  align-items: center;
}

.imageContainer {
  padding: 0 1rem;
  width: 50%;
  height: 100%;

  .image {
    cursor: pointer;
    :hover {
      transition: 0.1s;
      opacity: 0.9;
      transform: scale(1.01);
    }
  }
}
</style>
