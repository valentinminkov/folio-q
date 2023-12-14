<script setup lang="ts">
import BaseButton from 'components/BaseButton.vue';
import TextBlock from 'components/TextBlock.vue';
import { ref } from 'vue';

export interface IContactSection {
  title: string;
  description: string;
  onSubmit: () => void;
}

const { title, description, onSubmit } = defineProps<IContactSection>();
const email = ref('');
const message = ref('');
</script>

<template>
  <div class="container">
    <TextBlock :title="title" :description="description" />
    <div style="flex-grow: 1"></div>
    <div class="inputContainer">
      <q-input filled v-model="email" label="email" />
      <q-input filled v-model="message" label="message" />
      <BaseButton text="Submit" :onClick="onSubmit" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../css/mixins';
@import '../css/vars';
.container {
  background-color: cadetblue;
  display: flex;
  .inputContainer {
    display: flex;
    flex-direction: column;
  }
}
</style>
