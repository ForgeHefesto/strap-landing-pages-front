/** @type { import('@storybook/react').Preview } */
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/styles/global-styles';
import { theme } from '../src/styles/theme';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: theme.colors.lightBg },
        { name: 'dark', value: theme.colors.darkBg },
      ],
    }
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    ),
  ]
};


export default preview;
