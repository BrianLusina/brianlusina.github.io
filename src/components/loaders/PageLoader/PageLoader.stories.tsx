import { ComponentStory, ComponentMeta } from '@storybook/react';
import PageLoader from './PageLoader';

export default {
  title: 'Components/loaders/PageLoader',
  component: PageLoader,
} as ComponentMeta<typeof PageLoader>;

const Template: ComponentStory<typeof PageLoader> = () => <PageLoader />;

export const FullPageLoader = Template.bind({});
FullPageLoader.args = {};