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
    <div class="leftRow">
      <TextBlock :title="title" :description="description" />
    </div>
    <div style="flex-grow: 1"></div>
    <div class="rightRow">
      <div class="inputsContainer">
        <q-input
          filled
          v-model="email"
          label="email"
          class="input"
          color="orange"
          label-color="white"
          bg-color="grey"
        />
        <q-input
          filled
          v-model="message"
          label="message"
          class="input"
          type="textarea"
          label-color="white"
          color="orange"
          bg-color="grey"
        />
        <BaseButton text="Submit" :onClick="onSubmit" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../css/mixins';
@import '../css/vars';
.container {
  padding: 8em 4em;
  background-color: $secondary_color;
  display: flex;
  .leftRow {
    width: 400px;
  }

  .rightRow {
    display: flex;
    flex-direction: column;
    row-gap: 1.5em;
    width: 50%;
    align-items: center;
    .inputsContainer {
      display: flex;
      flex-direction: column;
      row-gap: 1em;
      width: 100%;
      max-width: 450px;
      .input {
        width: 100%;
        background-color: $inputs_background_color;
        &.large {
          height: 200px;
          input {
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
