// Syntax for a Promise

// The executor function generally starts an asynchronous operation
const executorFunction = (resolve, reject) => {};
const myFirstPromise = new Promise(executorFunction);

// The executor function has two function parameters, usually referred to as the resolve() and reject() functions.

// The resolve() and reject() functions aren’t defined by the programmer. When the Promise constructor runs, JavaScript will pass its own resolve() and reject() functions into the executor function.
// * resolve() will change the status from 'pending' to 'fulfilled'. And the promise resolved value will be set to the argument passed into resolve()

// ? reject() takes a reason or error as an argument. It will change the status from 'pending to 'rejected' and the promise's rejection reason will be set to the argument passed into reject()

const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344,
};

// Write your code below:
const myExecutor = (resolve, reject) => {
  if (inventory.sunglasses > 0) {
    resolve("Sunglasses order processed.");
  } else {
    reject("That item is sold out.");
  }
};

const orderSunglasses = () => {
  return new Promise(myExecutor);
};

const orderPromise = orderSunglasses();

console.log(orderPromise);

