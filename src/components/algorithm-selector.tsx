import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { algorithms } from "../utils/array";
import useStore from "../utils/store";

const algorithmNames: string[] = [];
algorithms.forEach((_value, key) => {
  algorithmNames.push(key);
});

const AlgorithmSelector = () => {
  const isAnimating = useStore(state => state.isAnimating);
  const algorithm = useStore(state => state.algorithm);
  const handleAlgorithm = (event: SelectChangeEvent) => {
    const algorithm = event.target.value as string;
    if (useStore.getState().isSorted) {
      useStore.getState().setSize(0);
    }
    useStore.setState({ algorithm: algorithm });
    if (algorithm === "Bogo Sort" && useStore.getState().size > 8) {
      useStore.setState({
        isAlertBogo: true,
      })
    }
  };

  return (
    <Box width={200}>
      <FormControl disabled={isAnimating} size="small" fullWidth>
        <InputLabel id="algorithm-select-label">Algorithm</InputLabel>
        <Select
          labelId="algorithm-select-label"
          id="algorithm-simple-select"
          value={algorithm}
          label="Algorithm"
          onChange={handleAlgorithm}
        >
          {
            algorithmNames.map((algorithm) => (
              <MenuItem
                key={algorithm}
                value={algorithm}
              >
                {algorithm}
              </MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </Box>
  )
}

export default AlgorithmSelector;