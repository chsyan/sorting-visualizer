import { AppBar, Box, ButtonGroup, Container, Stack, Toolbar } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import AlgorithmSelector from "../components/algorithm-selector";
import DelaySlider from "../components/delay-slider";
import NewArrayButton from "../components/new-array-button";
import PlayPauseButton from "../components/play-pause-button";
import ProgressSlider from "../components/progress-slider";
import SizeSlider from "../components/size-slider";
import SkipNextButton from "../components/skip-next-button";
import SkipPreviousButton from "../components/skip-previous-button";
import dynamic from 'next/dynamic'

const Home: NextPage = () => {
  const appBarHeight = 64;
  const Bars = dynamic(() => import('../components/bars'), {
    ssr: false,
  })

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
      <Box sx={{ flexGrow: 1 }} >
        <Container maxWidth={false} style={{ height: `calc(100vh - ${appBarHeight}px)` }}>
          <Bars />
        </Container>
      </Box>
      <AppBar position="static" style={{ minHeight: `${appBarHeight}px`, top: 'auto', bottom: 0, alignContent: 'center' }}>
        <Toolbar style={{ minHeight: `${appBarHeight}px`, top: 'auto', bottom: 0, alignContent: 'center' }}>
          <Box style={{ width: '100%' }}>
            <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2} >
              <ButtonGroup>
                <SkipPreviousButton />
                <PlayPauseButton />
                <SkipNextButton />
              </ButtonGroup>
              <NewArrayButton />
              <ProgressSlider />
              <DelaySlider />
              <SizeSlider />
              <AlgorithmSelector />
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Home;
