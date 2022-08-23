import BarChartIcon from '@mui/icons-material/BarChart';
import { Box, Slider, Tooltip, Typography } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import useStore from '../utils/store';

const SizeSlider = () => {
  const sizeMax = 500;
  const sizeMin = 1;
  const sizeStep = 1;
  const size = useStore(state => state.size);
  const isAnimating = useStore(state => state.isAnimating);

  const handleSliderSize = (_event: Event, size: number | number[]) => {
    if (typeof size === 'number' && size !== useStore.getState().size) {
      useStore.getState().setSize(size);
    }
  };

  const labelFormat = (value: number) => {
    return `${value} bars`;
  }

  return (
    <>
      <Box width={200} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Tooltip title="Array Size" arrow TransitionComponent={Zoom} followCursor>
          <BarChartIcon />
        </Tooltip>
        <Box sx={{ width: '100%', ml: 2, mr: 2, paddingTop: 1 }}>
          <Slider
            size="small"
            value={typeof size === 'number' ? size : 0}
            onChange={handleSliderSize}
            disabled={isAnimating}
            step={sizeStep}
            min={sizeMin}
            max={sizeMax}
            aria-labelledby="input-slider"
          />
        </Box>
        <Box sx={{ minWidth: 55 }}>
          <Typography variant="body2" color="text.secondary">
            {labelFormat(size)}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default SizeSlider;