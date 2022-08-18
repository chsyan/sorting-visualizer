import BarChartIcon from '@mui/icons-material/BarChart';
import { Box, Grid, Input, Slider, Tooltip } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import useStore from '../utils/store';

const SizeSlider = () => {
  const sizeMax = 500;
  const sizeMin = 10;
  const sizeStep = 10;
  const size = useStore(state => state.size);

  const handleSliderSize = (_event: Event, size: number | number[]) => {
    if (size != useStore.getState().size) {
      useStore.getState().setSize(size as number);
    }
  };

  const handleInputSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    const size = event.target.value === '' ? 0 : Number(event.target.value);
    if (size != useStore.getState().size) {
      useStore.getState().setSize(size as number);
    }
  };

  const handleBlurSize = () => {
    if (size < sizeMin) {
      useStore.getState().setSize(sizeMin as number);
    } else if (size > sizeMax) {
      useStore.getState().setSize(sizeMax as number);
    }
  };

  return (
    <Box sx={{ width: 200 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={1.75}>
          <Tooltip title="Array Size" arrow TransitionComponent={Zoom} followCursor>
            <BarChartIcon />
          </Tooltip>
        </Grid>
        <Grid item xs>
          <Slider
            size="small"
            value={typeof size === 'number' ? size : 0}
            onChange={handleSliderSize}
            disabled={false}
            step={sizeStep}
            min={sizeMin}
            max={sizeMax}
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
              step: sizeStep,
              min: sizeMin,
              max: sizeMax,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </Box >
  );
};

export default SizeSlider;