import bubbleSort from "./algorithms/bubble-sort";
import quickSortWrapper from "./algorithms/quick-sort";
import useStore from "./store";

export const sort = () => {
  const array = useStore.getState().array;
  const states = useStore.getState().states;
  const algorithm = useStore.getState().algorithm;
  const animation = [[[...array], [...states]]] as [[number[], number[]]];
  if (algorithm === "bubble") {
    bubbleSort(array, states, animation);
  } else if (algorithm === "quick-hoare") {
    quickSortWrapper(array, states, animation);
  } else if (algorithm === "quick-lomuto") {
    quickSortWrapper(array, states, animation, false);
  }
  animation.push([array, states]);
  useStore.setState({ isSorted: true });
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

const shuffle = (arr: number[]): number[] => {
  let m = arr.length;
  let t;
  let i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = arr[m] as number;
    arr[m] = arr[i] as number;
    arr[i] = t;
  }

  return arr;
};
