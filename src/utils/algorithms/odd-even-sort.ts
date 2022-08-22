import { accessArray, swap } from "../array";

const oddEvenSort = (
  array: number[],
  states: number[],
  animation: [[number[], number[]]]
) => {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 1; i < array.length - 1; i += 2) {
      if ((array[i] as number) > (array[i + 1] as number)) {
        swap(array, i, i + 1);
        accessArray([...array], [...states], animation, [i, i + 1], 2);
        sorted = false;
      }
    }
    for (let i = 0; i < array.length - 1; i += 2) {
      if ((array[i] as number) > (array[i + 1] as number)) {
        swap(array, i, i + 1);
        accessArray([...array], [...states], animation, [i, i + 1], 2);
        sorted = false;
      }
    }
  }
}

export default oddEvenSort;