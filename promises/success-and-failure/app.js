const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:
const handleSuccess = resolvedValue => {
    console.log(resolvedValue);
};

const handleFailure = rejectionReason => {
    console.log(rejectionReason);
};

// First way to do it with separate functions
checkInventory(order).then(handleSuccess, handleFailure);

// .catch()
// Second way to do it with arrow function inside .then() and .catch()
checkInventory(order)
    .then(resolvedValue => console.log(resolvedValue))
    .catch(rejectReason => console.log(rejectReason));



