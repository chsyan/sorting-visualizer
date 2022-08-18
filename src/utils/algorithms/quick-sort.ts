import { accessArray, swap } from "../array";
import useStore from "../store";

const quickSortWrapper = (
  array: number[],
  states: number[],
  animation: [[number[], number[]]],
  isHoare = true
) => {
  const quickSortHoare = (lo: number, hi: number) => {
    if (lo < hi) {
      const p = partitionHoare(lo, hi);
      quickSortHoare(lo, p);
      quickSortHoare(p + 1, hi);
    }
  };

  const partitionHoare = (lo: number, hi: number): number => {
    const p = array[Math.floor((lo + hi) / 2)] as number;
    let i = lo - 1,
      j = hi + 1;

    while (1) {
      do {
        ++i;
        accessArray([...array], [...states], animation, [i], 1);
      } while ((array[i] as number) < p);
      do {
        --j;
        accessArray([...array], [...states], animation, [j], 1);
      } while ((array[j] as number) > p);
      if (i >= j) return j;
      swap(array, i, j);
      accessArray([...array], [...states], animation, [i, j], 2);
    }
    return 0;
  };

  const quickSortLomuto = (lo: number, hi: number) => {
    if (lo < hi) {
      const p = partitionLomuto(lo, hi);
      quickSortLomuto(lo, p - 1);
      quickSortLomuto(p + 1, hi);
    }
  };

  const partitionLomuto = (lo: number, hi: number) => {
    let i = lo;
    const p = array[hi] as number;
    for (let j = lo; j < hi; j++) {
      accessArray([...array], [...states], animation, [j], 1);
      if ((array[j] as number) < p) {
        swap(array, i++, j);
        accessArray([...array], [...states], animation, [i, j], 2);
      }
    }
    swap(array, i, hi);
    accessArray([...array], [...states], animation, [i, hi], 2);
    return i;
  };

  animation.push([array, states]);
  if (isHoare) {
    quickSortHoare(0, array.length - 1);
  } else {
    quickSortLomuto(0, array.length - 1);
  }
  useStore.setState({ animation: animation });
};

export default quickSortWrapper;
