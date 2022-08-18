
import { Stack } from "@mui/material";
import useStore from "../utils/store";

const Bars = () => {
  const array = useStore(state => state.array);
  const states = useStore(state => state.states);
  const maxValue = useStore(state => state.maxValue);
  return (
    <Stack direction="row" alignItems="flex-end" style={{ height: '99%' }}>
      {
        array.map((value, index) => {
          const height = 95 * value / maxValue;
          const width = 100 / array.length;
          let backgroundColor = 'white';
          if (states[index] === 1) {
            backgroundColor = 'blue';
          } else if (states[index] === 2) {
            backgroundColor = 'red';
          }
          return (
            <div key={index} style={{ width: `${width}%`, height: `${height}%`, backgroundColor: `${backgroundColor}` }} />
          )
        })
      }
    </Stack>

  );
}
export default Bars;