<script setup lang="ts">
import { type Button } from 'components/types/components';
const { text, className, onClick, url } = defineProps<Button>();
</script>

<template>
  <q-btn
    class="button"
    color="accent"
    text-color="white"
    size="xl"
    :label="text"
    :class="className"
    :on-click="onClick"
    :href="url"
    :v-text="text"
  />
</template>

<style scoped lang="scss">
@import '../css/mixins';
@import '../css/vars';
.button {
  border-radius: 0;
  transition: 0.3s;
  &:hover {
    color: $accent_color !important;
    background-color: darken($accent_color, 30%) !important;
  }
}
</style>
