import useStore from "../utils/store";
import { Button } from "@mui/material";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

const SkipNextButton = () => {
  const handleSkipPrevious = () => {
    useStore.setState({
      isAnimating: false,
    });
    useStore.getState().setAnimationIndex(0);
  }

  return (
    <Button variant='outlined' onClick={handleSkipPrevious}>
      <SkipPreviousIcon />
    </Button>
  );
}

export default SkipNextButton;