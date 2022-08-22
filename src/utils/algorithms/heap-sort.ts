import { accessArray, swap } from "../array";

// All elements after the last swap are sorted, no need to perform useless checks and swaps
const heapSort = (
  array: number[],
  states: number[],
  animation: [[number[], number[]]]
) => {
  const heapify = (length: number) => {
    let start = iParent(length - 1);
    while (start >= 0) {
      heapifyDown(start, length - 1);
      start--;
    }
  };

  const heapifyDown = (left: number, right: number) => {
    let root = left;
    while (iLeftChild(root) <= right) {
      const child = iLeftChild(root);
      let elem = root;
      if ((array[elem] as number) < (array[child] as number)) {
        elem = child;
      }
      if (
        child + 1 <= right &&
        (array[elem] as number) < (array[child + 1] as number)
      ) {
        elem = child + 1;
      }
      if (elem === root) return;
      swap(array, root, elem);
      accessArray([...array], [...states], animation, [root, elem], 2);
      root = elem;
    }
  };

  heapify(array.length);
  let end = array.length - 1;
  while (end > 0) {
    swap(array, 0, end);
    accessArray([...array], [...states], animation, [0, end], 2);
    end--;
    heapifyDown(0, end);
  }
};

const iParent = (i: number) => Math.floor((i - 1) / 2);
const iLeftChild = (i: number) => 2 * i + 1;

export default heapSort;
