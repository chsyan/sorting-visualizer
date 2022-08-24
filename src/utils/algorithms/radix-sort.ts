import { accessArray } from "../array";

export const radixTwoPassSort = (
  array: number[],
  states: number[],
  animation: [[number[], number[]]]
) => {
  const countSort = (n: number, exp: number) => {
    const output = new Array(n);
    const count = new Array(10);
    for (let i = 0; i < 10; i++) count[i] = 0;

    for (let i = 0; i < n; i++) {
      count[Math.floor((array[i] as number) / exp) % 10]++;
      accessArray(array, states, animation, [i], 1);
    }
    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }

    for (let i = n - 1; i >= 0; i--) {
      const element = array[i] as number;
      output[count[Math.floor(element / exp) % 10] - 1] = element;
      count[Math.floor(element / exp) % 10]--;
      accessArray(array, states, animation, [i], 1);
    }

    for (let i = 0; i < n; i++) {
      array[i] = output[i];
      accessArray(array, states, animation, [i], 2);
    }
  };

  const max = getMax(array);
  const n = array.length;
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) countSort(n, exp);
};

const getMax = (array: number[]) => {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if ((array[i] as number) > max) {
      max = array[i] as number;
    }
  }
  return max;
};
