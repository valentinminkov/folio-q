<script setup lang="ts">
import CardBlock from 'components/CardBlock.vue';
import TextBlock from 'components/TextBlock.vue';
import { type CardBlock as ICardBlock } from 'components/types/components';

export interface AboutSection {
  title: string;
  subtitle: string;
  firstColumnCards: ICardBlock[];
  secondColumnCards: ICardBlock[];
}

const { title, subtitle, firstColumnCards, secondColumnCards } =
  defineProps<AboutSection>();
</script>

<template>
  <div class="container">
    <div class="firstColumn">
      <TextBlock :title="title" :subtitle="subtitle" />
      <CardBlock
        v-for="card in firstColumnCards"
        :key="card.title"
        :title="card.title"
        :text="card.text"
        :image="card.image"
        :on-click="card.onClick"
        :layout="card.layout"
        class-name="card-block"
      />
    </div>
    <div class="secondColumn">
      <CardBlock
        v-for="card in secondColumnCards"
        :key="card.title"
        :title="card.title"
        :text="card.text"
        :image="card.image"
        :on-click="card.onClick"
        :layout="card.layout"
        class-name="card-block"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../css/mixins';
@import '../css/vars';
.container {
  background-color: aqua;
  display: flex;
  justify-content: space-between;
  padding: 3em;
  .firstColumn,
  .secondColumn {
    display: flex;
    flex-direction: column;
    max-width: 50%;
  }

  .firstColumn {
    row-gap: 3em;
  }

  .secondColumn {
    padding: 1em 0;
    row-gap: 1em;
  }
}
</style>
