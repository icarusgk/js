const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
    items: [['sunglasses', 1], ['bags', 2]],
    giftcardBalance: 79.82
};

// The process of chaining promises together is called composition
// General syntax

// firstPromiseFunction()
//     .then((firstResolveVal) => {
//         return secondPromiseFunction(firstResolveVal);
//     })
//     .then((secondResolveVal) => {
//         console.log(secondResolveVal);
//     });

// In order for our chain to work properly, we had to return
// the promise secondPromiseFunction(firstResolveVal)

checkInventory(order)
    .then((resolvedValueArray) => {
        return processPayment(resolvedValueArray);
    })
    .then((resolvedValueArray) => {
        return shipOrder(resolvedValueArray);
    })
    .then((successMessage) => {
        console.log(successMessage);
    })
    .catch((errorMessage) => {
        console.log(errorMessage);
    });



