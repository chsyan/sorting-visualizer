import { accessArray, isSorted, shuffle } from "../array";
import useStore from "../store";

export const bogoSort = (
  array: number[],
  states: number[],
  animation: [[number[], number[]]]
) => {
  const indicies: number[] = [];
  for (let i = 0; i < array.length; i++) {
    indicies.push(i);
  }
  while (!isSorted(array)) {
    shuffle(array);
    accessArray([...array], [...states], animation, indicies, 1);
  }
};

export const bogoSortOptimized = (
  array: number[],
  states: number[],
  animation: [[number[], number[]]]
) => {
  const last = array.length - 1;
  const length = array.length;
  let index = 0;
  while (index < last) {
    array = shuffle(array, index);
    const indicies: number[] = [];
    for (let i = index; i < length; i++) {
      indicies.push(i);
    }
    accessArray([...array], [...states], animation, indicies, 1);

    // Check if array[index] is less than all other elements above it
    let i;
    for (i = index; i < length; i++) {
      if ((array[index] as number) > (array[i] as number)) {
        break;
      }
    }
    if (i === length) {
      index++;
    }
  }
};

export const quantumBogoSort = (
  array: number[],
  states: number[],
  animation: [[number[], number[]]]
) => {
  const indicies: number[] = [];
  for (let i = 0; i < array.length; i++) {
    indicies.push(i);
  }
  shuffle(array);
  accessArray([...array], [...states], animation, indicies, 1);
  if (!isSorted(array)) {
    useStore.setState({
      isExplode: true,
    });
  }
};
