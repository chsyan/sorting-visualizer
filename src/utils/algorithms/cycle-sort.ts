import { accessArray, swap } from "../array";

const cycleSort = (
  array: number[],
  states: number[],
  animation: [[number[], number[]]]
) => {
  for (let cycleStart = 0; cycleStart < array.length - 1; cycleStart++) {
    let item = array[cycleStart] as number;
    accessArray([...array], [...states], animation, [cycleStart], 1);
    let pos = cycleStart;
    for (let i = cycleStart + 1; i < array.length; i++) {
      if ((array[i] as number) < item) {
        accessArray([...array], [...states], animation, [i], 1);
        pos++;
      }
    }
    if (pos === cycleStart) continue;
    while (item === (array[pos] as number)) {
      accessArray([...array], [...states], animation, [pos], 1);
      pos++;
    }
    if (pos !== cycleStart) {
      const temp = item;
      item = array[pos] as number;
      array[pos] = temp;
      accessArray([...array], [...states], animation, [pos], 1);
    }
    while (pos !== cycleStart) {
      pos = cycleStart;
      for (let i = cycleStart + 1; i < array.length; i++) {
        accessArray([...array], [...states], animation, [i], 1);
        if ((array[i] as number) < item) {
          pos++;
        }
      }
      while (item === (array[pos] as number)) {
        accessArray([...array], [...states], animation, [pos], 1);
        pos++;
      }
      if (item !== (array[pos] as number)) {
        const temp = item;
        item = array[pos] as number;
        array[pos] = temp;
        accessArray([...array], [...states], animation, [pos], 1);
      }
    }
  }
};

export default cycleSort;
