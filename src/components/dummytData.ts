import type {
  Button,
  HeroBlock,
  Image,
  InfoBlock,
  CardBlock,
} from 'components/types/components';
import type { VNode } from 'vue';

export const imageDummyData: Image = {
  src: 'https://cdn.quasar.dev/img/mountains.jpg',
  alt: 'Some description',
  className: 'image-class',
};

export const buttonDummyData: Button = {
  text: 'Click me!',
  url: '/some-url',
};

export const heroBlockDummyData: HeroBlock = {
  title: 'Hero block dummy title!',
  button: buttonDummyData,
  subtitle: 'We offer services.',
  className: 'hero-class',
  image: imageDummyData,
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

export const cardBlockDummyData: CardBlock = {
  title: 'Info Card Title',
  text: 'This card provides some valuable information.',
  image: imageDummyData,
  onClick: () => {
    alert('Card clicked!');
  },
  className: 'info-card-class',
};
