// const searchName = (value: string | null) => {
//   if (value === null) {
//     console.log("there is nothing search");
//   } else {
//     console.log("Searching");
//   }
// };

// searchName(null);

// const getMyCarSpeed = (speed: unknown) => {
//   if (typeof speed === "number") {
//     const convertedSpeed = (speed * 1000) / 3600;
//     console.log(`My speed is ${convertedSpeed}`);
//   }
//   if (typeof speed === "string") {
//     const [value, unit] = speed.split(" ");
//     const convertedSpeed = (parseFloat(value) * 1000) / 3600;
//     console.log(`My speed is ${convertedSpeed}`);
//   } else {
//     console.log("there is wrong type");
//   }
// };

// getMyCarSpeed(10);
// getMyCarSpeed("10 kmh^-1");
// getMyCarSpeed(true);

// function throwError(message: string): never {
//   throw new Error(message);
// }

// throwError("something went wrong");
