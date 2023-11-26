<script setup lang="ts">
import { type HeroBlock } from 'components/types/components';
import BaseButton from 'components/BaseButton.vue';
const { title, subtitle, button, image } = defineProps<HeroBlock>();
</script>

<template>
  <div class="heroContainer">
    <div class="content">
      <h1 class="title">{{ title }}</h1>
      <h3 v-if="subtitle" class="subtitle">{{ subtitle }}</h3>
      <div v-if="button && button.text && button.url" class="buttonContainer">
        <BaseButton :text="button.text" :url="button.url" />
      </div>
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
  .title {
    @include h1;
  }
  .subtitle {
    @include h3;
  }
}
</style>
