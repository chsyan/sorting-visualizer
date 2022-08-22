import { accessArray, swap } from "../array";

// All elements after the last swap are sorted, no need to perform useless checks and swaps
const selectionSort = (
  array: number[],
  states: number[],
  animation: [[number[], number[]]]
) => {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      accessArray([...array], [...states], animation, [j, min], 1);
      if ((array[j] as number) < (array[min] as number)) {
        min = j;
      }
    }
    if (min !== i) {
      swap(array, i, min);
      accessArray([...array], [...states], animation, [i, min], 2);
    }
  }
};

export default selectionSort;
