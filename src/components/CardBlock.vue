<script setup lang="ts">
import { type Image } from 'components/types/components';
import { computed } from 'vue';

export interface CardBlock {
  title: string;
  text: string;
  image: Image;
  onClick: unknown;
  className?: string;
  layout?: 'row' | 'column';
}

const { title, image, text, className, layout } = defineProps<CardBlock>();

const computedClass = computed(() => {
  return [className, layout === 'column' ? 'columnLayout' : 'rowLayout']
    .filter(Boolean)
    .join(' ');
});
</script>

<template>
  <q-card flat bordered class="card" :class="computedClass">
    <q-img
      v-if="image && image.src"
      :src="image.src"
      :alt="image?.alt"
      spinner-color="white"
      class="image"
    />

    <q-card-section>
      <h1 class="title">{{ title }}</h1>
      <p v-if="text" class="text">{{ text }}</p>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="scss">
@import '../css/mixins';
@import '../css/vars';
.card {
  &.columnLayout {
    //todo
  }
  &.rowLayout {
    //todo
  }
}
</style>