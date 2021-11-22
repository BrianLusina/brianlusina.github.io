import { ComponentStory, ComponentMeta } from '@storybook/react';
import SocialCard from './SocialCard';
import socialItems from '../../data/social';

export default {
  title: 'Components/SocialCard',
  component: SocialCard,
} as ComponentMeta<typeof SocialCard>;

const Template: ComponentStory<typeof SocialCard> = (args) => <SocialCard {...args} />;

export const DefaultSocialCard = Template.bind({});
DefaultSocialCard.args = {
  items: socialItems,
};
