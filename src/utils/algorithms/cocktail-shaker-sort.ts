import { accessArray, swap } from "../array";

// All elements after the last swap are sorted, no need to perform useless checks and swaps
const cocktailShakerSort = (
  array: number[],
  states: number[],
  animation: [[number[], number[]]]
) => {
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    let newStart = end;
    let newEnd = start;
    for (let i = start; i <= end; i++) {
      if ((array[i] as number) > (array[i + 1] as number)) {
        swap(array, i, i + 1);
        accessArray([...array], [...states], animation, [i, i + 1], 2);
        newEnd = i;
      }
    }

    end = newEnd - 1;
    for (let i = end; i >= start; i--) {
      if ((array[i] as number) > (array[i + 1] as number)) {
        swap(array, i, i + 1);
        accessArray([...array], [...states], animation, [i, i + 1], 2);
        newStart = i;
      }
    }
    start = newStart + 1;
  }
};

export default cocktailShakerSort;
