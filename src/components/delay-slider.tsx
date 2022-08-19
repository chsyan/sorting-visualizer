import TimerIcon from '@mui/icons-material/Timer';
import { Box, Slider, Tooltip, Typography, Zoom } from '@mui/material';
import useStore from '../utils/store';

const delayMin = 0;
const delayMax = 500;
const delayStep = 10;

const DelaySlider = () => {
  const delay = useStore(state => state.delay);

  const handleSliderDelay = (_event: Event, newDelay: number | number[]) => {
    useStore.setState({ delay: newDelay as number });
  };

  const labelFormat = (value: number) => {
    return `${value} ms`;
  }

  return (
    <Box width={200} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Tooltip title="Frame Delay" arrow TransitionComponent={Zoom} followCursor>
        <TimerIcon />
      </Tooltip>
      <Box sx={{ width: '100%', ml: 2, mr: 2, paddingTop: 1 }}>
        <Slider
          size="small"
          value={delay}
          scale={(value: number) => (value * 3)}
          onChange={handleSliderDelay}
          min={delayMin}
          max={delayMax}
          step={delayStep}
          aria-labelledby="input-slider"
        />
      </Box>
      <Box sx={{ minWidth: 55 }}>
        <Typography variant="body2" color="text.secondary">
          {labelFormat(delay)}
        </Typography>
      </Box>
    </Box>
  );
}

export default DelaySlider;