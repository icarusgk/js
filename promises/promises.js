const bottles = {
  quantity: 30,
};

const makeServerRequest = new Promise((resolve, reject) => {
  if (bottles.quantity > 50) {
    resolve("Promise was fullfilled");
  } else {
    reject("There has to be more than 50 bottles");
  }
});

// Result can be anything
makeServerRequest.then((result) => {
  console.log(result);
}).catch(error => {
  console.log(error);
});
