import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import theme from '../src/theme';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={createTheme(theme)}>
      <Story />
    </ThemeProvider>
  ),
];


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}