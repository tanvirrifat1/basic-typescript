type Users = {
  name: string;
  age: number;
};

interface IUsers {
  name: string;
  age: number;
}

interface extendedUser extends IUsers {
  role: string;
}

type addNumber = (num1: number, num2: number) => number;

const addnumber: addNumber = (num1, num2) => num1 + num2;
