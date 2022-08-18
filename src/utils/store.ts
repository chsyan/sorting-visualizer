import create from "zustand";
import { randomArray } from "./array";

interface State {
  array: number[];
  maxValue: number;
  states: number[];
  size: number;
  setSize: (size: number) => void;
  animation: [[number[], number[]]];
  isAnimating: boolean;
  animationIndex: number;
  setAnimationIndex: (index: number) => void;
  isSorted: boolean;
  delay: number;
  algorithm: string;
}

const initialSize = 100;
const initialValues = randomArray(initialSize);
const initialStates = new Array<number>(initialSize).fill(0);
const initialDelay = 0;

const useStore = create<State>()((set, get) => ({
  array: initialValues,
  maxValue: Math.max(...initialValues),
  states: initialStates,
  size: initialSize,
  setSize: (newSize: number) => {
    if (newSize < 1) {
      newSize = get().size;
    }
    const newValues = randomArray(newSize);
    const newStates = new Array<number>(newSize).fill(0);
    const newMaxValue = Math.max(...newValues);
    set({
      array: newValues,
      maxValue: newMaxValue,
      states: newStates,
      size: newSize,
      animation: [[newValues, newStates]],
      isAnimating: false,
      animationIndex: 0,
      isSorted: false,
    });
  },
  animation: [[initialValues, initialStates]],
  isAnimating: false,
  animationIndex: 0,
  isSorted: false,
  delay: initialDelay,
  algorithm: "quick-hoare",
  setAnimationIndex: (index: number) => {
    if (index < 0 || index >= get().animation.length) {
      index = get().animation.length - 1;
    }
    const frame = get().animation[index] as [number[], number[]];
    useStore.setState({
      animationIndex: index,
      array: frame[0],
      states: frame[1],
    });
  },
}));

export default useStore;
