import { ComponentStory, ComponentMeta } from '@storybook/react';
import ErrorPage from './ErrorPage';

export default {
  title: 'Pages/errors/ErrorPage',
  component: ErrorPage,
} as ComponentMeta<typeof ErrorPage>;

const Template: ComponentStory<typeof ErrorPage> = (args) => <ErrorPage {...args} />;

export const SimpleErrorPage = Template.bind({});
SimpleErrorPage.args = {};

export const ErrorPageWithProps = Template.bind({});
ErrorPageWithProps.args = {
  title: 'Error',
  message: 'Something went wrong',
};