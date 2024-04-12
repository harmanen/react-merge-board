'use client';

import { Inter } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import './globals.css';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

const inter = Inter({ subsets: ['latin'] });

dayjs.extend(utc);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </AppRouterCacheProvider>
        </LocalizationProvider>
      </body>
    </html>
  );
}
