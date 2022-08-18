import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Button } from "@mui/material";
import bubbleSort from "../utils/algorithms/bubble-sort";
import quickSortWrapper from '../utils/algorithms/quick-sort';
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

  const sort = () => {
    const array = useStore.getState().array;
    const states = useStore.getState().states;
    const algorithm = useStore.getState().algorithm;
    const animation = [[[...array], [...states]]] as [[number[], number[]]];
    if (algorithm === 'bubble') {
      bubbleSort(array, states, animation);
    } else if (algorithm === 'quick-hoare') {
      quickSortWrapper(array, states, animation);
    } else if (algorithm === 'quick-lomuto') {
      quickSortWrapper(array, states, animation, false);
    }
    animation.push([array, states]);
    useStore.setState({ isSorted: true });
  }

  return (
    <Button variant='outlined' onClick={playPause}>
      {isAnimating ? <PauseIcon /> : <PlayArrowIcon />}
    </Button>
  );
}

export default PlayPauseButton;