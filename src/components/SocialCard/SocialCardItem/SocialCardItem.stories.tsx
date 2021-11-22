import { ComponentStory, ComponentMeta } from '@storybook/react';
import SocialCardItem from './SocialCardItem';

export default {
  title: 'Components/SocialCard/SocialCardItem',
  component: SocialCardItem,
} as ComponentMeta<typeof SocialCardItem>;

const Template: ComponentStory<typeof SocialCardItem> = (args) => <SocialCardItem {...args} />;

export const TwitterSocialCardItem = Template.bind({});
TwitterSocialCardItem.args = {
  link: '',
  iconName: 'twitter',
  label: 'Twitter',
};
