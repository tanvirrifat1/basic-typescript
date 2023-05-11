import any from "./module";

const add = (param1: number, param2: number, param3: number): number => {
  return param1 + param2 + param3;
};

const res = any.multiply(10, 2);
console.log(res);
