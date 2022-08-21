import { AppBar, ButtonGroup, Toolbar } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import dynamic from 'next/dynamic';
import DelaySlider from "../components/delay-slider";
import NewArrayButton from "../components/new-array-button";
import PlayPauseButton from "../components/play-pause-button";
import ProgressSlider from "../components/progress-slider";
import SizeSlider from "../components/size-slider";
import SkipNextButton from "../components/skip-next-button";
import SkipPreviousButton from "../components/skip-previous-button";


const BottomAppBar = () => {
  const AlgorithmSelector = dynamic(() => import('./algorithm-selector'), {
    ssr: false,
  })

  return (
    <AppBar position="static">
      <Toolbar className="toolbar" style={{ top: 'auto', bottom: 0 }}>
        <Grid2
          alignItems="center"
          container
          rowSpacing={2}
          columnSpacing={4}
          columns={{ xs: 5, xsm: 5, sm: 9.5, md: 13.5, lg: 21.5 }}
        >
          <Grid2 xs={4.5}>
            <ButtonGroup>
              <SkipPreviousButton />
              <PlayPauseButton />
              <NewArrayButton />
              <SkipNextButton />
            </ButtonGroup>
          </Grid2>
          <Grid2 xs={5}>
            <ProgressSlider />
          </Grid2>
          <Grid2 xs={4}>
            <DelaySlider />
          </Grid2>
          <Grid2 xs={4}>
            <SizeSlider />
          </Grid2>
          <Grid2 xs={4}>
            <AlgorithmSelector />
          </Grid2>
        </Grid2>
      </Toolbar>
    </AppBar>
  )
}

export default BottomAppBar;