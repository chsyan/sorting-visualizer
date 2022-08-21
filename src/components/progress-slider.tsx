import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import { Box, LinearProgress, Slider, Tooltip, Zoom } from "@mui/material";
import Typography from '@mui/material/Typography';
import create from "zustand";
import { sort } from '../utils/array';
import useStore from "../utils/store";

interface State {
  isPointer: boolean,
  isDown: boolean,
  isProgressSlider: boolean,
  setIsPointer: (isPointer: boolean) => void,
  setIsDown: (isDown: boolean) => void,
}

const processIsProgressSlider = (isPointer: boolean, isDown: boolean): boolean => {
  return isPointer || isDown;
}

const useLocalStore = create<State>()((set, get) => ({
  isPointer: false,
  isDown: false,
  isProgressSlider: false,
  setIsPointer: (isPointer: boolean) => {
    const isProgressSlider = processIsProgressSlider(isPointer, get().isDown);
    set({ isPointer: isPointer, isProgressSlider: isProgressSlider });
  },
  setIsDown: (isDown: boolean) => {
    const isProgressSlider = processIsProgressSlider(get().isPointer, isDown);
    set({ isDown: isDown, isProgressSlider: isProgressSlider });
  },
}));

const ProgressSlider = () => {

  const isProgressSlider = useLocalStore(state => state.isProgressSlider);
  const animationIndex = useStore(state => state.animationIndex);
  const animation = useStore(state => state.animation);

  const animationPercentage = (index: number): number => {
    const percent = index === 0 ? 0 : index / (animation.length - 1) * 100;
    if (percent > 100) {
      return 100;
    }
    if (percent < 0) {
      return 0;
    }
    return percent;
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

  const handlePointerEnter = () => {
    useLocalStore.getState().setIsPointer(true);
  }

  const handlePointerLeave = () => {
    useLocalStore.getState().setIsPointer(false);
  }

  const handleMouseDown = () => {
    useLocalStore.getState().setIsDown(true);
  }

  const handleMouseUp = () => {
    useLocalStore.getState().setIsDown(false);
  }


  return (
    <Box width={250} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Tooltip title="Progress" arrow TransitionComponent={Zoom} followCursor>
        <HourglassEmptyIcon />
      </Tooltip>
      <Box
        sx={{ width: '100%', ml: 1, mr: 2 }}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onMouseDown={handleMouseDown}
      >
        <Slider
          size="small"
          onChange={handleChange}
          onChangeCommitted={handleMouseUp}
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
