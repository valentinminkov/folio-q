<script setup lang="ts">
interface FooterBar {
  hide?: boolean;
}

const props = defineProps<FooterBar>();
</script>

<template>
  <q-footer class="footer" v-if="!props?.hide">
    <q-toolbar>
      <q-avatar>
        <img src="favicon.svg" />
      </q-avatar>
      <q-space />
      <q-btn stretch flat label="Link" />
      <q-btn stretch flat label="Link" />
      <q-btn stretch flat label="Link" />
      <q-space />
      <q-btn
        color="yellow"
        text-color="white"
        size="md"
        :label="'Click me'"
        :flat="true"
        class="button"
      />
    </q-toolbar>
    <q-toolbar>
      <span>Lorem ipsum</span>
      <q-space />
      <span>Lorem:</span>
      <q-btn stretch flat label="Link" />
      <q-btn stretch flat label="Link" />
      <q-btn stretch flat label="Link" />
    </q-toolbar>
  </q-footer>
</template>

<style scoped lang="scss">
@import '../css/vars';
@import '../css/mixins';
.footer {
  padding: 1em 3em;
  background-color: $footer_color;
  display: flex;
  flex-direction: column;
  row-gap: 2em;
  .button {
    color: $accent !important;
  }
}
</style>
