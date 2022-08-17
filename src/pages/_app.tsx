import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
};

export default MyApp;
