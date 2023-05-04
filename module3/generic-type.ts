type genericArray<T> = Array<T>;

const rollNumbers: genericArray<number> = [45, 45, 54];
const rollNumbers2: genericArray<string> = ["45", "45", "54"];
const rollNumbers3: genericArray<boolean> = [true, false];

const userNameAndRollNumbers: Array<{ name: string; roll: number }> = [
  {
    name: "Mr. X",
    roll: 1,
  },
  {
    name: "Mr. Y",
    roll: 2,
  },
];
