import { ComponentStory, ComponentMeta } from '@storybook/react';
import ContactForm from './ContactForm';

export default {
  title: 'Components/contact/ContactForm',
  component: ContactForm,
} as ComponentMeta<typeof ContactForm>;

const Template: ComponentStory<typeof ContactForm> = (args) => <ContactForm {...args} />;

export const SimpleContactForm = Template.bind({});
SimpleContactForm.args = {};
