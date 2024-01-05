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
      <div class="textblockContainer">
        <TextBlock :title="title" :subtitle="subtitle" />
      </div>
      <CardBlock
        v-for="card in firstColumnCards"
        :key="card.title"
        :title="card.title"
        :text="card.text"
        :image="card.image"
        :on-click="card.onClick"
        :layout="card.layout"
        :class="card.className"
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
        :class="card.className"
        class-name="card-block"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../css/mixins';
@import '../css/vars';
.container {
  background-color: $base_color;
  display: flex;
  justify-content: space-between;
  padding: 3em;
  column-gap: 4rem;
  .firstColumn,
  .secondColumn {
    display: flex;
    flex-direction: column;
  }

  .firstColumn {
    row-gap: 3em;
    width: 55%;
    .textblockContainer {
      max-width: 80%;
    }
  }

  .secondColumn {
    max-width: 450px;
    row-gap: 3em;
    height: 100%;
  }
}
</style>
