// normal function
function add(num1: number, num2: string): number | string {
  return num1 + parseFloat(num2);
}
console.log(add(55, "4544"));

// array function
const AddArrow = (num1: number, num2: number): number => num1 + num2;
console.log(AddArrow(12, 42));

const arr = [2, 5, 8];

const newArr = arr.map((el: number) => el * el);
console.log(newArr);

const person: {
  name: string;
  balance: number;
  addBalance(money: number): string;
} = {
  name: "abul",
  balance: 5,
  addBalance(money: number) {
    return `My total Balance ${this.balance + money}`;
  },
};
