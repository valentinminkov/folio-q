<script setup lang="ts">
export interface Button {
  text: string;
  url?: string;
  onClick?: () => void;
  className?: string;
  icon?: unknown;
}

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
.button {
  border-radius: 0;
}
</style>
