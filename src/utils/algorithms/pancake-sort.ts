import { accessArray, swap } from "../array";

const pancakeSort = (
  array: number[],
  states: number[],
  animation: [[number[], number[]]]
) => {
  const flip = (k: number) => {
    let left = 0;
    while (left < k) {
      swap(array, left, k);
      accessArray(array, states, animation, [left, k], 2);
      k--;
      left++;
    }
  };

  const maxIndex = (k: number) => {
    let index = 0;
    for (let i = 0; i < k; i++) {
      accessArray(array, states, animation, [i], 1);
      if ((array[i] as number) > (array[index] as number)) {
        index = i;
      }
    }
    return index;
  };

  let n = array.length;
  while (n > 1) {
    const maxdex = maxIndex(n);
    flip(maxdex);
    flip(n - 1);
    n--;
  }
};

export default pancakeSort;
