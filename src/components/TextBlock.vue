<script setup lang="ts">
import { type Button } from 'components/types/components';
import BaseButton from 'components/BaseButton.vue';

interface TextBlock {
  title?: string;
  subtitle?: string;
  smallTitle?: string;
  minorTitle?: string;
  leastTitle?: string;
  description?: string;
  button?: Button;
}

const { title, subtitle, description, button } = defineProps<TextBlock>();
</script>

<template>
  <div class="textContainer" v-if="title || subtitle || description">
    <h1 v-if="title">{{ title }}</h1>
    <h2 v-if="subtitle">{{ subtitle }}</h2>
    <h3 v-if="smallTitle">{{ smallTitle }}</h3>
    <h4 v-if="minorTitle">{{ minorTitle }}</h4>
    <h5 v-if="leastTitle">{{ leastTitle }}</h5>
    <p v-if="description">
      {{ description }}
    </p>
    <div v-if="button && button.text && button.url">
      <BaseButton :text="button.text" :url="button.url" />
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
  h1 {
    padding: 0;
    margin: 0;
  }
  h2 {
    padding: 0;
    margin: 0;
  }
  h3 {
    padding: 0;
    margin: 0;
  }

  h4 {
    padding: 0;
    margin: 0;
  }
  p {
  }
}
</style>
