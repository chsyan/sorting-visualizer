/* eslint-disable react/jsx-no-undef */
import { Alert, Backdrop, Box, Button, CircularProgress, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, Stack, Typography } from "@mui/material";
import { SnackbarOrigin } from '@mui/material/Snackbar';
import type { NextPage } from "next";
import dynamic from 'next/dynamic';
import Head from "next/head";
import BottomAppBar from "../components/bottom-app-bar";
import useStore from "../utils/store";
import { asyncSetTimeout } from "../utils/utils";

const snackBarOrigin: SnackbarOrigin = {
  vertical: 'bottom',
  horizontal: 'right',
};

const Home: NextPage = () => {
  const Bars = dynamic(() => import('../components/bars'), {
    ssr: false,
  })

  const isAlertBogo = useStore(state => state.isAlertBogo);
  const isExplode = useStore(state => state.isExplode);
  const isWindow = useStore(state => state.isWindow);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    useStore.setState({ isAlertBogo: false });
  };

  const handleCloseExplode = async () => {
    useStore.setState({ isExplode: false, isWindow: false });
    await asyncSetTimeout(5000);
    const doc = document.getElementsByTagName('html')[0];
    if (doc) {
      doc.remove();
    }
  }

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
          Bogo sort is not recommended for anything larger than 8 bars.
          Your browser will crash since animations are not optimized for memory.
        </Alert>
      </Snackbar>
      <Dialog
        open={isExplode}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Destroy the universe?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Since we didn&apos;t randomly shuffle into a sorted array, we must destroy this universe.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button disabled> No! </Button>
          <Button onClick={handleCloseExplode} autoFocus> Yes </Button>
        </DialogActions>
      </Dialog>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={!isWindow}
      >
        <Stack direction="row" spacing={3}>
          <CircularProgress color="inherit" />
          <Typography variant="h4">
            &quot;Destroying&quot; this universe...
          </Typography>
        </Stack>
      </Backdrop>
    </>
  );
};

export default Home;
