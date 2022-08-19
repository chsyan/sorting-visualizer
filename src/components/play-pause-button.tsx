import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Button } from "@mui/material";
import { sort } from '../utils/array';
import useStore from "../utils/store";
import { asyncSetTimeout } from "../utils/utils";

const PlayPauseButton = () => {
  const isAnimating = useStore(state => state.isAnimating);

  const playPause = async () => {
    useStore.setState({ isAnimating: !isAnimating });
    if (!useStore.getState().isSorted) {
      sort();
      useStore.getState().setAnimationIndex(0);
    }
    if (useStore.getState().isAnimating) {
      animate();
    }
  }

  const animate = async () => {
    const animation = useStore.getState().animation;
    if (useStore.getState().animationIndex >= animation.length - 1) {
      useStore.getState().setAnimationIndex(0);
    }
    while (useStore.getState().isAnimating && useStore.getState().animationIndex < animation.length) {
      useStore.getState().setAnimationIndex(useStore.getState().animationIndex + 1);
      await asyncSetTimeout(useStore.getState().delay);
    }
    useStore.setState({
      isAnimating: false,
    });
  }

  return (
    <Button variant='outlined' onClick={playPause}>
      {isAnimating ? <PauseIcon /> : <PlayArrowIcon />}
    </Button>
  );
}

export default PlayPauseButton;