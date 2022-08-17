import { AppBar, Box, ButtonGroup, Container, Stack, Toolbar } from "@mui/material";
import useStore from "../utils/store";
import type { NextPage } from "next";
import Head from "next/head";
import SizeSlider from "../components/size-slider";

const Home: NextPage = () => {
  const values = useStore(state => state.values);
  const states = useStore(state => state.states);
  const maxValue = useStore(state => state.maxValue);
  const appBarHeight = 64;
  return (
    <>
      <Head>
        <title>Sorting Visualizer</title>
        <meta name="description" content="Sorting Visualizer" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Box sx={{ flexGrow: 1 }} >
        <Container maxWidth={false} style={{ height: `calc(100vh - ${appBarHeight}px)` }}>
          <Stack direction="row" display="flex" justifyContent="center" alignItems="flex-end" style={{ height: '99%' }}>
            {
              values.map((value, index) => {
                const height = 95 * value / maxValue;
                const width = 100 / values.length;
                return (
                  <div key={index} style={{ width: `${width}%`, height: `${height}%`, backgroundColor: 'white' }} />
                )
              })
            }
          </Stack>
        </Container>
      </Box>
      <AppBar position="static" style={{ minHeight: `${appBarHeight}px`, top: 'auto', bottom: 0, alignContent: 'center' }}>
        <Toolbar style={{ minHeight: `${appBarHeight}px`, top: 'auto', bottom: 0, alignContent: 'center' }}>
          <Box style={{ width: '100%' }}>
            <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={4} >
              <ButtonGroup>
              </ButtonGroup>
              <SizeSlider />
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Home;
