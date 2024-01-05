<script setup lang="ts">
import { type Image } from 'components/types/components';
import { computed } from 'vue';
import TextBlock from 'components/TextBlock.vue';

export interface CardBlock {
  title: string;
  text: string;
  image: Image;
  onClick: unknown;
  className?: string;
  layout?: 'stacked' | 'adjacent';
}

const {
  title,
  image,
  text,
  className,
  layout = 'stacked',
} = defineProps<CardBlock>();

const stackedLayout = computed(() => layout === 'stacked');
const adjacentLayout = computed(() => layout === 'adjacent');
const computedClass = computed(() => {
  return [className, stackedLayout.value ? 'stackedLayout' : 'adjacentLayout']
    .filter(Boolean)
    .join(' ');
});
</script>

<template>
  <q-card flat bordered class="card" :class="computedClass">
    <q-img
      v-if="image && image.src && stackedLayout"
      :src="image.src"
      :alt="image?.alt"
      spinner-color="white"
      class="image"
    />

    <q-card-section class="cardBlockTextContainer">
      <TextBlock :least-title="title" :description="text" />
    </q-card-section>

    <q-img
      v-if="image && image.src && adjacentLayout"
      :src="image.src"
      :alt="image?.alt"
      spinner-color="white"
      class="image"
    />
  </q-card>
</template>

<style scoped lang="scss">
@import '../css/mixins';
@import '../css/vars';
.card {
  border-radius: 0;
  border: none;
  &.stackedLayout {
    display: flex;
    flex-direction: column;
  }
  &.adjacentLayout {
    display: grid;
    overflow: hidden;
    grid-template-columns: 1fr 1fr;

    .cardBlockTextContainer {
    }
    .image {
    }
  }

  &.skillsCard {
    height: 100%;
  }

  &.resumeCard {
    align-self: flex-end;
  }

  .cardBlockTextContainer {
    background-color: $grayblue;
  }
}
</style>
