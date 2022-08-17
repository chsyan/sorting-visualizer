import { Box, Grid, Input, Slider, Typography } from '@mui/material';
import useStore from '../utils/store';

const SizeSlider = () => {
  const ARRAY_SIZE_MAX = 200;
  const ARRAY_SIZE_MIN = 10;
  const ARRAY_SIZE_STEP = 10;

  const size = useStore(state => state.size);

  const handleSliderSize = async (_event: Event, size: number | number[]) => {
    if (size != useStore.getState().size) {
      useStore.getState().setSize(size as number);
    }
  };

  const handleInputSize = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const size = event.target.value === '' ? 0 : Number(event.target.value);
    if (size != useStore.getState().size) {
      useStore.getState().setSize(size as number);
    }
  };

  const handleBlurSize = () => {
    if (size < ARRAY_SIZE_MIN) {
      useStore.getState().setSize(ARRAY_SIZE_MIN as number);
    } else if (size > ARRAY_SIZE_MAX) {
      useStore.getState().setSize(ARRAY_SIZE_MAX as number);
    }
  };

  return (
    <Box sx={{ width: 250 }}>
      <Typography id="input-slider" gutterBottom>
        Array Size
      </Typography>
      <Grid container spacing={2} alignItems="flex-start" justifyContent="center">
        <Grid item xs={2}>
          <span className="material-icons" >bar_chart</span>
        </Grid>
        <Grid item xs>
          <Slider
            size="small"
            value={typeof size === 'number' ? size : 0}
            onChange={handleSliderSize}
            disabled={false}
            marks
            step={ARRAY_SIZE_STEP}
            min={ARRAY_SIZE_MIN}
            max={ARRAY_SIZE_MAX}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item xs={3.5}>
          <Input
            value={size}
            size="small"
            onChange={handleInputSize}
            onBlur={handleBlurSize}
            disabled={false}
            inputProps={{
              step: ARRAY_SIZE_STEP,
              min: ARRAY_SIZE_MIN,
              max: ARRAY_SIZE_MAX,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SizeSlider;