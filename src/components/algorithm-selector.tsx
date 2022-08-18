import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import useStore from "../utils/store";

const AlgorithmSelector = () => {
  const isAnimating = useStore(state => state.isAnimating);
  const algorithm = useStore(state => state.algorithm);
  const handleAlgorithm = (event: SelectChangeEvent) => {
    if (useStore.getState().isSorted) {
      useStore.getState().setSize(0);
    }
    useStore.setState({ algorithm: event.target.value as string });
  };

  return (
    <FormControl disabled={isAnimating} sx={{ minWidth: '120px' }} size="small">
      <InputLabel id="demo-simple-select-label">Sorting Algorithm</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={algorithm}
        label="Sorting Algorithm"
        onChange={handleAlgorithm}
      >
        <MenuItem value={'quick-hoare'}>Quick Sort (Hoare)</MenuItem>
        <MenuItem value={'quick-lomuto'}>Quick Sort (Lomuto)</MenuItem>
        <MenuItem value={'bubble'}>Bubble Sort</MenuItem>
      </Select>
    </FormControl>
  )
}

export default AlgorithmSelector;