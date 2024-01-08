<template>
  <q-layout view="hhh lpr fff">
    <q-page-container>
      <router-view />
    </q-page-container>
    <FooterBar />
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FooterBar from '../components/FooterBar.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    FooterBar,
  },
});
</script>

<style scoped lang="scss">
@import '../css/mixins';
@import '../css/vars';
</style>
