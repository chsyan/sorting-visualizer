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
    <FormControl disabled={isAnimating} sx={{ minWidth: '200px' }} size="small">
      <InputLabel id="algorithm-select-label">Algorithm</InputLabel>
      <Select
        labelId="algorithm-select-label"
        id="algorithm-simple-select"
        value={algorithm}
        label="Algorithm"
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