import { accessArray, swap } from "../array";

const gnomeSort = (
  array: number[],
  states: number[],
  animation: [[number[], number[]]]
) => {
  let position = 0;
  while (position < array.length) {
    if (
      position === 0 ||
      (array[position - 1] as number) <= (array[position] as number)
    ) {
      position++;
    } else {
      swap(array, position, position - 1);
      accessArray(
        [...array],
        [...states],
        animation,
        [position, position - 1],
        2
      );
      position--;
    }
  }
};

export default gnomeSort;
