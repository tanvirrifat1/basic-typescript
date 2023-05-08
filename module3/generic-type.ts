// type genericArray<T> = Array<T>;

// const rollNumbers: genericArray<number> = [45, 45, 54];
// const rollNumbers2: genericArray<string> = ["45", "45", "54"];
// const rollNumbers3: genericArray<boolean> = [true, false];

// const userNameAndRollNumbers: Array<{ name: string; roll: number }> = [
//   {
//     name: "Mr. X",
//     roll: 1,
//   },
//   {
//     name: "Mr. Y",
//     roll: 2,
//   },
// ];

// // generic InterFace
// interface CrushInterface<T, U = null> {
//   name: string;
//   husband: T;
//   wife?: U;
// }

// const crush1: CrushInterface<boolean, string> = {
//   name: "FAF Du",
//   husband: true,
//   wife: "sokina",
// };

// const crush2: CrushInterface<string> = {
//   name: "Persion",
//   husband: "Tom",
// };

// interface husbandInterFace {
//   name: string;
//   salary: number;
// }

// const crush3: CrushInterface<husbandInterFace> = {
//   name: "ken willam",
//   husband: {
//     name: "Persion",
//     salary: 245554,
//   },
// };
