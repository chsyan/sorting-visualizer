import { accessArray, swap } from "../array";

export const combSort = (
  array: number[],
  states: number[],
  animation: [[number[], number[]]]
) => {
  let gap = array.length;
  const shrink = 1.3;
  let sorted = false;
  while (!sorted) {
    gap = Math.floor(gap / shrink);
    if (gap < 1) {
      gap = 1;
      sorted = true;
    }

    let i = 0;
    while (i + gap < array.length) {
      if ((array[i] as number) > (array[i + gap] as number)) {
        swap(array, i, i + gap);
        accessArray([...array], [...states], animation, [i, i + gap], 2);
        sorted = false;
      }
      i++;
    }
  }
};

export default combSort;
