import TimerIcon from '@mui/icons-material/Timer';
import { Box, Grid, Input, Slider, Tooltip, Zoom } from '@mui/material';
import useStore from '../utils/store';

const delayMin = 0;
const delayMax = 1000;
const delayStep = 10;

const DelaySlider = () => {
  const delay = useStore(state => state.delay);

  const handleSliderDelay = (_event: Event, newDelay: number | number[]) => {
    useStore.setState({ delay: newDelay as number });
  };

  const handleInputDelay = (event: React.ChangeEvent<HTMLInputElement>) => {
    useStore.setState({ delay: event.target.value === '' ? 0 : Number(event.target.value) });
  };

  const handleBlurDelay = () => {
    if (delay < 0) {
      useStore.setState({ delay: 0 });
    } else if (delay > delayMax) {
      useStore.setState({ delay: delayMax });
    }
  };

  return (
    <Box sx={{ width: 200 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={2}>
          <Tooltip title="Delay (ms)" arrow TransitionComponent={Zoom} followCursor>
            <TimerIcon />
          </Tooltip>
        </Grid>
        <Grid item xs>
          <Slider
            size="small"
            value={typeof delay === 'number' ? delay : 0}
            onChange={handleSliderDelay}
            min={0}
            max={delayMax}
            step={delayStep}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item xs={4}>
          <Input
            value={delay}
            size="small"
            onChange={handleInputDelay}
            onBlur={handleBlurDelay}
            inputProps={{
              step: delayStep,
              min: delayMin,
              max: delayMax,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default DelaySlider;