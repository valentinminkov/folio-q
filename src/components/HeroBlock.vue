<script setup lang="ts">
import { type HeroBlock } from 'components/types/components';
import TextBlock from 'components/TextBlock.vue';
const { title, subtitle, button, image } = defineProps<HeroBlock>();
</script>

<template>
  <div class="heroContainer">
    <div class="content">
      <TextBlock :title="title" :subtitle="subtitle" :button="button" />
    </div>
    <template v-if="image && image.src">
      <div class="image">
        <q-img
          :src="image.src"
          :alt="image?.alt"
          spinner-color="white"
          class="bannerImage"
        />
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
@import '../css/vars';
@import '../css/mixins';

.heroContainer {
  min-height: 100vh;
  max-height: 100vh;
  background-color: $base_color;
  display: flex;
  color: $text_color;
  .content {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 6rem;
  }
  .image {
    width: 55%;
    .bannerImage {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
