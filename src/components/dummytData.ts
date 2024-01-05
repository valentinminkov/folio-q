import type {
  Button,
  HeroBlock,
  Image,
  InfoBlock,
  CardBlock,
  Project,
} from 'components/types/components';
import type { VNode } from 'vue';

const smallerLoremiPsum = 'Lorem ipsum dolor sit amet';
const smallLoremiPsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore';
const mediumLoremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const largeLoremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;

export const imageDummyData: Image = {
  src: 'https://cdn.quasar.dev/img/mountains.jpg',
  alt: smallLoremiPsum,
  className: 'image-class',
};

export const portfolioIcon: Image = {
  src: 'images/portfolio.svg',
  alt: 'Portfolio Icon',
};

export const uiDesignImg: Image = {
  src: 'images/uidesign.png',
  alt: 'Portfolio Icon',
};

export const skillsImg: Image = {
  src: 'images/skills.svg',
  alt: 'Skills Image',
};

export const projectImgDummyData1: Image = {
  src: 'images/exampleproject1.png',
  alt: 'Skills Image',
};

export const projectImgDummyData2: Image = {
  src: 'images/exampleproject2.png',
  alt: 'Skills Image',
};

export const heroDummyImg: Image = {
  src: 'images/hero.png',
  alt: 'Skills Image',
};

export const buttonDummyData: Button = {
  text: 'Click me!',
  url: '/some-url',
};

export const heroBlockDummyData: HeroBlock = {
  title: smallerLoremiPsum,
  button: buttonDummyData,
  subtitle: mediumLoremIpsum,
  className: 'hero-class',
  image: heroDummyImg,
};

export const infoBlockDummyData: InfoBlock = {
  title: 'Info Block Title',
  text: 'This is some information about our product.',
  iconUrl: 'path/to/icon.png',
  direction: 'horizontal',
  className: 'info-block-class',
  image: imageDummyData,
  secondColumnContent: {} as VNode,
};

export const uiDesignCard: CardBlock = {
  title: 'UI/UX Design',
  text: smallLoremiPsum,
  image: uiDesignImg,
  onClick: () => {
    alert('Card clicked!');
  },
  className: 'uiDesignCard',
  layout: 'stacked',
};

export const skillsCard: CardBlock = {
  title: 'Lorem ipsum dolor sit amet',
  text: smallLoremiPsum,
  image: skillsImg,
  onClick: () => {
    alert('Card clicked!');
  },
  className: 'skillsCard',
  layout: 'adjacent',
};

export const resumeCard: CardBlock = {
  title: 'Download Resume',
  text: smallLoremiPsum,
  image: portfolioIcon,
  onClick: () => {
    alert('Card clicked!');
  },
  className: 'resumeCard',
  layout: 'adjacent',
  seperator: false,
};

export const aboutSectionDummyData = {
  title: 'Skills & Expertise',
  subtitle: smallLoremiPsum,
  firstColumnCards: [skillsCard] as CardBlock[],
  secondColumnCards: [uiDesignCard, resumeCard] as CardBlock[],
};

export const dummyProject1: Project = {
  title: 'Project Title',
  description: mediumLoremIpsum,
  image: projectImgDummyData1,
  onClick: () => {
    alert('Project clicked!');
  },
};

export const dummyProject2: Project = {
  title: 'Project Title',
  description: largeLoremIpsum,
  image: projectImgDummyData2,
  onClick: () => {
    alert('Project clicked!');
  },
};

export const contactSectionDummyData = {
  title: 'Contact Us',
  description: mediumLoremIpsum,
  onSubmit: () => {
    alert('Form submitted!');
  },
};

export const projectsSectionDummyData = {
  title: 'Projects',
  projects: [dummyProject1, dummyProject2] as Project[],
};
