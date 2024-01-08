<template>
  <!-- Hero section -->
  <HeroBlock
    :title="heroBlockDummyData.title"
    :button="heroBlockDummyData.button"
    :image="heroBlockDummyData.image"
  />
  <!-- About section -->
  <q-intersection once>
    <AboutSection
      :title="aboutSectionDummyData.title"
      :subtitle="aboutSectionDummyData.subtitle"
      :first-column-cards="aboutSectionDummyData.firstColumnCards"
      :second-column-cards="aboutSectionDummyData.secondColumnCards"
    />
  </q-intersection>

  <!-- Projects section -->
  <q-intersection once>
    <ProjectsSection
      :title="projectsSectionDummyData.title"
      :projects="projectsSectionDummyData.projects"
    />
  </q-intersection>

  <!-- Contact section -->
  <q-intersection once>
    <ContactSection
      :title="contactSectionDummyData.title"
      :description="contactSectionDummyData.description"
      :on-submit="contactSectionDummyData.onSubmit"
    />
  </q-intersection>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeroBlock from 'components/HeroBlock.vue';
import AboutSection from 'components/AboutSection.vue';
import ProjectsSection from 'components/ProjectsSection.vue';
import ContactSection from 'components/ContactSection.vue';

import {
  heroBlockDummyData,
  aboutSectionDummyData,
  projectsSectionDummyData,
  contactSectionDummyData,
} from 'components/dummytData';

export default defineComponent({
  name: 'IndexPage',
  components: {
    HeroBlock,
    AboutSection,
    ProjectsSection,
    ContactSection,
  },
  data() {
    return {
      heroBlockDummyData,
      aboutSectionDummyData,
      projectsSectionDummyData,
      contactSectionDummyData,
    };
  },
});
</script>
<!-- Global styles -->
<style lang="scss"></style>
