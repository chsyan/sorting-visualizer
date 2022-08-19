import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import { Box, IconButton, LinearProgress, Slider, Tooltip, Zoom } from "@mui/material";
import Typography from '@mui/material/Typography';
import { sort } from '../utils/array';
import useStore from "../utils/store";

const ProgressSlider = () => {

  const isProgressSlider = useStore(state => state.isProgressSlider);
  const animationIndex = useStore(state => state.animationIndex);
  const animation = useStore(state => state.animation);

  const animationPercentage = (index: number): number => {
    return index === 0 ? 0 : index / (animation.length - 1) * 100;
  }

  const labelFormat = (index: number) => {
    const percentRounded = Math.round(animationPercentage(index));
    return `${percentRounded}%`;
  }

  const handleChange = async (_event: Event, newValue: number | number[]) => {
    if (!useStore.getState().isSorted) {
      sort();
    }
    const newIndex = newValue as number;
    useStore.getState().setAnimationIndex(newIndex);
    useStore.setState({
      isAnimating: false
    });
  };

  const handleClickFalse = () => {
    useStore.setState({
      isProgressSlider: false
    });
  }

  const handleClickTrue = () => {
    useStore.setState({
      isProgressSlider: true
    });
  }

  const handleClickToggle = () => {
    useStore.setState({
      isProgressSlider: !useStore.getState().isProgressSlider
    });
  }

  return (
    <Box width={250} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Tooltip title="Progress" arrow TransitionComponent={Zoom} followCursor>
        <IconButton onClick={handleClickToggle}>
          <HourglassEmptyIcon />
        </IconButton>
      </Tooltip>
      <Box
        sx={{ width: '100%', mr: 2 }}
        onPointerEnter={handleClickTrue}
        onPointerLeave={handleClickFalse}
      >
        <Slider
          size="small"
          onChange={handleChange}
          defaultValue={0}
          value={animationIndex}
          min={0}
          max={animation.length - 1}
          aria-labelledby="input-slider"
          sx={{
            display: `${isProgressSlider ? 'flex' : 'none'}`,
          }}
        />
        <LinearProgress
          variant="determinate"
          value={animationPercentage(animationIndex)}
          sx={{
            display: `${isProgressSlider ? 'none' : 'flex'}`,
          }}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">
          {labelFormat(animationIndex)}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProgressSlider;
