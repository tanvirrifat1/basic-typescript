// function add(num1: number, num2: number = 10): number {
//   return num1 + num2;
// }
// add(24, 55);

// //spreed operator

// const myFriends = ["chandir", "teli", "nani"];
// const newFriends = ["mocika", "konica", "sonika"];
// const myBestFriend = {
//   FullName: "Abesh Rahman",
//   age: 18,
// };

// const [bestFriend] = myFriends;
// const { FullName } = myBestFriend;
// console.log(FullName);

// myFriends.push(...newFriends);
// console.log(myFriends);

// //rest paremeter

// const greetFriends = (...friends: string[]): void =>
//   friends.forEach((friend) => console.log(`hi ${friend}`));

// greetFriends("kasem", "abul", "kabul", "bangla vai", "green");

// const arrowFun = (num1: number, num2: number): number => num1 + num2;
// const person: {
//   name: string;
//   balance: number;
//   addBalance(money: number): void;
// } = {
//   name: "Rifat",
//   balance: 300,
//   addBalance(money: number) {
//     console.log(`My new balance is ${this.balance + money}`);
//   },
// };
