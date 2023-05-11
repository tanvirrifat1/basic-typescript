// // normal function
// function add(num1: string, num2: number = 2) {
//   console.log(num1.repeat(num2));
// }
// // console.log(add("hello"));
// // spread operator

// const frnd = ["hello", "mello", "gello"];
// const newFrnd = ["tello", "sello", "pello"];

// frnd.push(...newFrnd);
// // console.log(frnd);

// // array function
// const AddArrow = (num1: number, num2: number): number => num1 + num2;
// // console.log(AddArrow(12, 42));

// const arr = [2, 5, 8];

// const newArr = arr.map((el: number) => el * el);
// // console.log(newArr);

// const person: {
//   name: string;
//   balance: number;
//   addBalance(money: number): string;
// } = {
//   name: "abul",
//   balance: 5,
//   addBalance(money: number) {
//     return `My total Balance ${this.balance + money}`;
//   },
// };

// // rest operator
// // const greetFriends = (frnd1: string, frnd2: string, frnd3: string): void =>
// //   console.log(` hi ${frnd1} \n hi ${frnd2} \n hi ${frnd3}`);

// const grtFriends = (...friends: string[]): void =>
//   friends.forEach((frnds) => console.log(`hi ${frnds}`));

// grtFriends("abul", "sabul", "tabul", "bangla vai", "dfhgksdhf");
