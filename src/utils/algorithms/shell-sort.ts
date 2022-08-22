import { accessArray, swap } from "../array";

// All elements after the last swap are sorted, no need to perform useless checks and swaps
const shellSort = (
  array: number[],
  states: number[],
  animation: [[number[], number[]]]
) => {
  const gaps = [701, 301, 132, 57, 23, 10, 4, 1]; // https://oeis.org/A102549
  for (const gap of gaps) {
    for (let i = gap; i < array.length; i++) {
      accessArray([...array], [...states], animation, [i], 1);
      const temp = array[i] as number;
      let j;
      for (j = i; j >= gap && (array[j - gap] as number) > temp; j -= gap) {
        accessArray([...array], [...states], animation, [j, j - gap], 2);
        array[j] = array[j - gap] as number;
      }
      accessArray([...array], [...states], animation, [j], 2);
      array[j] = temp;
    }
  }
};

export default shellSort;
