import { bogoSort, bogoSortOptimized } from "./algorithms/bogo-sort";
import bubbleSort from "./algorithms/bubble-sort";
import quickSortWrapper from "./algorithms/quick-sort";
import useStore from "./store";

export const algorithms = [
  "Quick Sort (Hoare Partition)",
  "Quick Sort (Lomuto Partition)",
  "Bubble Sort",
  "Bogo Sort",
  'Bogo Sort ("Optimized")',
];

export const sort = () => {
  const array = useStore.getState().array;
  const states = useStore.getState().states;
  const algorithm = useStore.getState().algorithm;
  const animation = [[[...array], [...states]]] as [[number[], number[]]];
  if (algorithm === algorithms[0]) {
    quickSortWrapper(array, states, animation);
  } else if (algorithm === algorithms[1]) {
    quickSortWrapper(array, states, animation, false);
  } else if (algorithm === algorithms[2]) {
    bubbleSort(array, states, animation);
  } else if (algorithm === algorithms[3]) {
    bogoSort(array, states, animation);
  } else if (algorithm === algorithms[4]) {
    bogoSortOptimized(array, states, animation);
  }
  animation.push([array, states]);
  useStore.setState({
    animation: animation,
    isSorted: true,
  });
};

export const isSorted = (array: number[]) => {
  for (let i = 0; i < array.length - 1; i++) {
    if ((array[i] as number) > (array[i + 1] as number)) {
      return false;
    }
  }
  return true;
};

export const sortedTo = (array: number[]): number => {
  for (let i = 0; i < array.length; i++) {
    if ((array[i] as number) != i + 1) {
      return i;
    }
  }
  return array.length;
};

export const accessArray = (
  array: number[],
  states: number[],
  animation: [[number[], number[]]],
  indices: number[],
  state: number
) => {
  for (let i = 0; i < indices.length; i++) {
    const index = indices[i] as number;
    states[index] = state;
  }
  animation.push([[...array], [...states]]);
};

export const randomArray = (length: number): number[] => {
  const arr = new Array(length);
  for (let i = 0; i < length; ++i) {
    arr[i] = i + 1;
  }
  return shuffle(arr);
};

export const swap = (arr: number[], i: number, j: number): number[] => {
  const t = arr[i] as number;
  arr[i] = arr[j] as number;
  arr[j] = t;
  return arr;
};

export const shuffle = (arr: number[], lo = 0): number[] => {
  let m = arr.length;
  let t;
  let i;

  // While there remain elements to shuffle…
  while (m - lo) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * (m - lo) + lo);
    m--;

    // And swap it with the current element.
    t = arr[m] as number;
    arr[m] = arr[i] as number;
    arr[i] = t;
  }

  return arr;
};
