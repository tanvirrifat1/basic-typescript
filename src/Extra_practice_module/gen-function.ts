// // arrow function

// const createArray1 = <T>(param: T): T[] => {
//   return [param];
// };

// type Name = { name: string };

// const res = createArray1<Name>({ name: "BD" });

// const result = createArray1<number>(2456);

// const arrayFun = <T>(param: T): T[] => {
//   return [param];
// };

// // const res = arrayFun<number>(10);
// // console.log(res);

// const People = <X, Y>(param1: X, param2: Y): [X, Y] => {
//   return [param1, param2];
// };

// const result2 = People<string, Array<boolean>>("hello", [true]);

// // spread operator

// const myInfo = {
//   name: "Persian",
//   age: 35,
//   salary: 523454,
// };

// const addMyInfo = <T>(myInfo: T) => {
//   const crush = "don't know";
//   const newData = { ...myInfo, crush };
//   return newData;
// };

// const result4 = addMyInfo(myInfo);
// console.log(result4);

// const anotherInfo = {
//   name: "tom",
//   age: 65,
//   profession: "actor",
//   salary: 344561,
// };

// const otherInfo = <T>(tomInfo: T) => {
//   const tomsGF = "helina";
//   const newData = { ...tomInfo, tomsGF };
//   return newData;
// };

// const anotherResult = otherInfo(anotherInfo);
// console.log(anotherResult);

// const person: {
//   name: string;
//   balance: number;
//   addBalance(money: number): void;
// } = {
//   name: "hello",
//   balance: 346556,
//   addBalance(money: number) {
//     return `my new balance ${this.balance + money}`;
//   },
// };
