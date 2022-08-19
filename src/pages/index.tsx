import { AppBar, Box, ButtonGroup, Container, Divider, Stack, Toolbar } from "@mui/material";
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
import Grid2 from "@mui/material/Unstable_Grid2";

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
      <Container maxWidth={false} className="bars" >
        <Bars />
      </Container>
      <AppBar position="static">
        <Toolbar className="toolbar" style={{ top: 'auto', bottom: 0 }}>
          <Grid2
            display="flex"
            alignItems="center"
            container
            justifyContent={{ xs: "center", md: "inherit" }}
            rowSpacing={2}
            columnSpacing={4}
            columns={{ xs: 1, sm: 4, md: 4, lg: 17 }}
          >
            <Grid2 xs>
              <ButtonGroup>
                <SkipPreviousButton />
                <PlayPauseButton />
                <NewArrayButton />
                <SkipNextButton />
              </ButtonGroup>
            </Grid2>
            <Grid2 xs={4}>
              <ProgressSlider />
            </Grid2>
            <Grid2 xs={3}>
              <DelaySlider />
            </Grid2>
            <Grid2 xs={3}>
              <SizeSlider />
            </Grid2>
            <Grid2 xs>
              <AlgorithmSelector />
            </Grid2>
          </Grid2>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Home;
