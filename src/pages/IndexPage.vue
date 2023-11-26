<template>
  <!-- Hero section -->
  <HeroBlock
    :title="heroBlockDummyData.title"
    :button="heroBlockDummyData.button"
    :image="heroBlockDummyData.image"
  />
  <!-- About section -->
  <q-intersection transition="fade" class="section-container">
    <q-intersection transition="none" class="card-container">
      <CardBlock
        :title="cardBlockDummyData.title"
        :text="cardBlockDummyData.text"
        :image="cardBlockDummyData.image"
        :on-click="cardBlockDummyData.onClick"
      />
    </q-intersection>
  </q-intersection>

  <!-- Projects section -->

  <!-- Who/Contact section -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeroBlock from 'components/HeroBlock.vue';
import CardBlock from 'components/CardBlock.vue';
import { heroBlockDummyData, cardBlockDummyData } from 'components/dummytData';

export default defineComponent({
  name: 'IndexPage',
  components: {
    HeroBlock,
    CardBlock,
  },
  data() {
    return {
      heroBlockDummyData,
      cardBlockDummyData,
    };
  },
});
</script>
