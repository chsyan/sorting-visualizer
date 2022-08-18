import { Box, Typography, Grid, Slider, Tooltip, Zoom } from "@mui/material";
import useStore from "../utils/store";
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

const ProgressSlider = () => {
  const animationIndex = useStore((state) => state.animationIndex);
  const animation = useStore(state => state.animation);

  const handleChange = async (_event: Event, newValue: number | number[]) => {
    if (newValue != useStore.getState().animationIndex) {
      const newIndex = newValue as number;
      const frame = useStore.getState().animation[newIndex];
      if (frame !== undefined) {
        useStore.setState({
          array: frame[0],
          states: frame[1],
          animationIndex: newIndex,
          isAnimating: false,
        });
      }
    }
  };

  return (
    <Box sx={{ width: 150 }}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
      >
        <Grid item xs={2}>
          <Tooltip title="Progress" arrow TransitionComponent={Zoom} followCursor>
            <HourglassEmptyIcon />
          </Tooltip>
        </Grid>
        <Grid item xs>
          <Slider
            size="small"
            onChange={handleChange}
            value={animationIndex}
            min={0}
            max={animation.length - 1}
            aria-labelledby="input-slider"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProgressSlider;
