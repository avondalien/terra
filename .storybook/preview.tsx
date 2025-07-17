import type { Preview } from '@storybook/react-vite'
import { ThemeProvider } from '@mui/material'
import { terraTheme } from '../src/designSystem'
import React from 'react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export const withMuiTheme = (Story) => (
  <ThemeProvider theme={terraTheme}>
    <Story />
  </ThemeProvider>
)

export default preview;
export const decorators = [withMuiTheme]