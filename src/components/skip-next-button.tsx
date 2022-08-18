import useStore from "../utils/store";
import { Button } from "@mui/material";
import SkipNextIcon from '@mui/icons-material/SkipNext';

const SkipNextButton = () => {
  const handleSkipNext = () => {
    useStore.setState({
      isAnimating: false,
    });
    useStore.getState().setAnimationIndex(-1);
  }

  return (
    <Button variant='outlined' onClick={handleSkipNext}>
      <SkipNextIcon />
    </Button>
  );
}

export default SkipNextButton;