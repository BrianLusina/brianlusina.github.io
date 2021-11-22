import { ThemeProvider } from 'styled-components';
import MockAppWithRouter from '@testUtils/MockAppWithRouter';
import '@scss/main.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={{ main: 'default' }}>
      <MockAppWithRouter>
        <Story />
      </MockAppWithRouter>
    </ThemeProvider>
  ),
];
