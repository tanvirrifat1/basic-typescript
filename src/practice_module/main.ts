import { add as addTwo } from "./module";

const add = (param1: number, param2: number, param3: number): number => {
  return param1 + param2 + param3;
};

const res = addTwo(4, 8);
console.log(res);
