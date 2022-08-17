import create from "zustand";
import { randomArray } from "./array";

interface State {
  values: number[];
  maxValue: number;
  states: number[];
  size: number;
  setSize: (size: number) => void;
}

const size = 30;
const values = randomArray(size);
const states = new Array<number>(size).fill(0);

const useStore = create<State>()((set, get) => ({
  values: values,
  maxValue: Math.max(...values),
  states: states,
  size: size,
  setSize: (size: number) => {
    const values = randomArray(size);
    const states = new Array<number>(size).fill(0);
    const maxValue = Math.max(...values);
    set({ values: values, maxValue: maxValue, states: states, size: size });
  },
}));

export default useStore;
