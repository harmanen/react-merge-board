'use client';

import { Roboto } from 'next/font/google';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

let theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

theme = responsiveFontSizes(theme);

export default theme;
