'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

type ThemeProviderProps = Parameters<typeof NextThemesProvider>[0];

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => (
  <NextThemesProvider {...props}>{children}</NextThemesProvider>
);

export default ThemeProvider;
