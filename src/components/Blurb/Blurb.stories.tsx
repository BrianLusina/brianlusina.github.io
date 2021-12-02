import { ComponentStory, ComponentMeta } from '@storybook/react';
import faker from 'faker';
import Blurb from './Blurb';

export default {
  title: 'Components/Blurb',
  component: Blurb,
} as ComponentMeta<typeof Blurb>;

const Template: ComponentStory<typeof Blurb> = (args) => <Blurb {...args} />;

export const SimpleBlurb = Template.bind({});
SimpleBlurb.args = {
  title: faker.lorem.sentence(),
  image: faker.image.imageUrl(),
  description: faker.lorem.paragraph(),
};
