import { Alert, Box, Container, Snackbar } from "@mui/material";
import { SnackbarOrigin } from '@mui/material/Snackbar';
import type { NextPage } from "next";
import dynamic from 'next/dynamic';
import Head from "next/head";
import BottomAppBar from "../components/bottom-app-bar";
import useStore from "../utils/store";

const snackBarOrigin: SnackbarOrigin = {
  vertical: 'bottom',
  horizontal: 'right',
};

const Home: NextPage = () => {
  const Bars = dynamic(() => import('../components/bars'), {
    ssr: false,
  })

  const isAlertBogo = useStore(state => state.isAlertBogo);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    useStore.setState({ isAlertBogo: false });
  };

  return (
    <>
      <Head>
        <title>Sorting Visualizer</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Sorting Visualizer" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Box style={{ height: '100vh' }}>
        <Container maxWidth={false} className="bars" >
          <Bars />
        </Container>
        <BottomAppBar />
      </Box>
      <Snackbar open={isAlertBogo} autoHideDuration={6000} onClose={handleClose} anchorOrigin={snackBarOrigin}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
          Bogo sort is not recommended for anything larger than 8 bars
        </Alert>
      </Snackbar>
    </>
  );
};

export default Home;
