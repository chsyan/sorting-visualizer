import { accessArray } from "../array";

// All elements after the last swap are sorted, no need to perform useless checks and swaps
const insertionSort = (
  array: number[],
  states: number[],
  animation: [[number[], number[]]]
) => {
  let i = 1;
  while (i < array.length) {
    const x = array[i] as number;
    accessArray([...array], [...states], animation, [i], 1);
    let j = i - 1;
    while (j >= 0 && (array[j] as number) > x) {
      accessArray([...array], [...states], animation, [j], 1);
      array[j + 1] = array[j] as number;
      accessArray([...array], [...states], animation, [j + 1], 2);
      j--;
    }
    array[j + 1] = x;
      accessArray([...array], [...states], animation, [j + 1], 2);
    i++;
  }
};

export default insertionSort;
