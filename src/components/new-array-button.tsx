import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { Button, Tooltip } from "@mui/material";
import Zoom from '@mui/material/Zoom';
import useStore from "../utils/store";

const NewArrayButton = () => {
  const newArray = () => {
    useStore.getState().setSize(useStore.getState().size);
  }
  return (
    <Tooltip title="New Array" arrow TransitionComponent={Zoom} followCursor>
      <Button variant="outlined" onClick={newArray}>
        <RestartAltIcon />
      </Button>
    </Tooltip>
  );
}

export default NewArrayButton;