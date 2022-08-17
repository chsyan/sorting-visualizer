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

export const randomArray = (length: number): number[] => {
  const arr = new Array(length);
  for (let i = 0; i < length; ++i) {
    arr[i] = i + 1;
  }
  return shuffle(arr);
};
