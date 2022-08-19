import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    xsm: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: [
      'Roboto',
    ].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      xsm: 480,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
};

export default MyApp;
