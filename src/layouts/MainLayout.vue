<template>
  <q-layout view="hhh lpr fff">
    <q-page-container>
      <router-view />
    </q-page-container>
    <!-- Footer -->
    <q-footer class="footer">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="favicon.svg" />
          </q-avatar>
          <div>VM</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
});
</script>

<style scoped lang="scss">
@import '../css/mixins';
@import '../css/vars';
.footer {
  background-color: $fourth_color;
}
</style>
