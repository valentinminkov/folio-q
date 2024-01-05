<script setup lang="ts">
import { type Project } from 'components/types/components';
import TextBlock from 'components/TextBlock.vue';
const { title, image, onClick, description } = defineProps<Project>();
</script>

<template>
  <div class="cardContainer" @click="onClick">
    <div class="textContainer">
      <TextBlock
        :title="title"
        :description="description"
        titleClass="projectTitle"
      />
    </div>

    <div class="imageContainer">
      <q-img :src="image.src" :ratio="16 / 9" class="image" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../css/mixins';
@import '../css/vars';
.cardContainer {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  align-items: center;
  background-color: $secondary_color;
  padding: 2em;
  .textContainer {
    width: 50%;
  }
  cursor: pointer;
  .imageContainer {
    padding: 0 1rem;
    width: 50%;
    height: 100%;
    .image {
      transition: 1s;
      transform: scale(1.3);
    }
  }
  &:hover {
    ::v-deep .projectTitle {
      transition: color 0.3s ease;
      color: $accent_color;
    }
    .imageContainer {
      .image {
        transform: scale(1.4);
      }
    }
  }
}
</style>
