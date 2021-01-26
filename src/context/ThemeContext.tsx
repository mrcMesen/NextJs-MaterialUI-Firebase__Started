import React, { useEffect, useState, ReactNode } from 'react';
import { LightTheme } from '../themes/LightTheme';
import { ThemeProvider, CssBaseline } from '@material-ui/core';

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [typeTheme, setTypeTheme] = useState('light');
  const [theme, setTheme] = useState(LightTheme);

  useEffect(() => {
    if (typeTheme === 'light') {
      setTheme(LightTheme);
    } else {
      // setTheme(darkTheme);
    }
  }, [typeTheme]);

  const handleChangeTheme = (newThemeOption: string) => {
    /**Change Theme */
  };

  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
