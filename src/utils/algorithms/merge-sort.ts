import { accessArray } from "../array";

// All elements after the last swap are sorted, no need to perform useless checks and swaps
const mergeSort = (
  array: number[],
  states: number[],
  animation: [[number[], number[]]]
) => {
  const splitMerge = (left: number, right: number) => {
    if (left >= right) return;

    const mid = Math.floor((left + right) / 2);
    splitMerge(left, mid);
    splitMerge(mid + 1, right);
    merge(left, mid, right);
  };
  const merge = (left: number, mid: number, right: number) => {
    const leftSize = mid - left + 1;
    const rightSize = right - mid;

    const leftArray = new Array(leftSize);
    const rightArray = new Array(rightSize);

    for (let i = 0; i < leftSize; i++) {
      accessArray([...array], [...states], animation, [left + i], 1);
      leftArray[i] = array[left + i] as number;
    }
    for (let i = 0; i < rightSize; i++) {
      accessArray([...array], [...states], animation, [mid + i + 1], 1);
      rightArray[i] = array[mid + 1 + i] as number;
    }

    let leftIndex = 0;
    let rightIndex = 0;
    let currentIndex = left;

    while (leftIndex < leftSize && rightIndex < rightSize) {
      if (leftArray[leftIndex] < rightArray[rightIndex]) {
        array[currentIndex] = leftArray[leftIndex];
        leftIndex++;
      } else {
        array[currentIndex] = rightArray[rightIndex];
        rightIndex++;
      }
      accessArray([...array], [...states], animation, [currentIndex], 2);
      currentIndex++;
    }

    while (leftIndex < leftSize) {
      array[currentIndex] = leftArray[leftIndex];
      leftIndex++;
      accessArray([...array], [...states], animation, [currentIndex], 2);
      currentIndex++;
    }
    while (rightIndex < rightSize) {
      array[currentIndex] = rightArray[rightIndex];
      rightIndex++;
      accessArray([...array], [...states], animation, [currentIndex], 2);
      currentIndex++;
    }
  };

  splitMerge(0, array.length - 1);
};

export default mergeSort;
