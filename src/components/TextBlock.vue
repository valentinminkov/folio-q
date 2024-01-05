<script setup lang="ts">
import { type Button } from 'components/types/components';
import BaseButton from 'components/BaseButton.vue';

interface TextBlock {
  title?: string;
  titleClass?: string;
  subtitle?: string;
  subtitleClass?: string;
  smallTitle?: string;
  smallTitleClass?: string;
  minorTitle?: string;
  minorTitleClass?: string;
  leastTitle?: string;
  leastTitleClass?: string;
  description?: string;
  descriptionClass?: string;
  button?: Button;
}

const props = defineProps<TextBlock>();
</script>

<template>
  <div
    class="textContainer"
    v-if="props.title || props.subtitle || props.description"
  >
    <h1 v-if="props.title" :class="props.titleClass">{{ props.title }}</h1>
    <h2 v-if="props.subtitle" :class="props.subtitleClass">
      {{ props.subtitle }}
    </h2>
    <h3 v-if="props.smallTitle" :class="props.smallTitleClass">
      {{ props.smallTitle }}
    </h3>
    <h4 v-if="props.minorTitle" :class="props.minorTitleClass">
      {{ props.minorTitle }}
    </h4>
    <h5 v-if="props.leastTitle" :class="props.leastTitleClass">
      {{ props.leastTitle }}
    </h5>
    <p v-if="props.description" :class="props.descriptionClass">
      {{ props.description }}
    </p>
    <div v-if="props.button && props.button.text && props.button.url">
      <BaseButton :text="props.button.text" :url="props.button.url" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../css/vars';
@import '../css/mixins';

.textContainer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;

  h1,
  h2,
  h3,
  h4,
  h5 {
    padding: 0;
    margin: 0 0 0.5rem;
    font-weight: bold;
  }

  h1 {
    font-weight: bolder;
    font-size: 2rem;
  }

  h2 {
    font-size: 1.75rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.25rem;
  }

  h5 {
    font-size: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    margin: 0 0 1rem;
  }

  .button-container {
    margin-top: 1rem;
  }
}
</style>
