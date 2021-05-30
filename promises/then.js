// Promise objects come with an aptly named .then() method.
// It allows us to say, “I have a promise, when it settles,
// then here’s what I want to happen…”

// .then() is a higher order function, it takes two callback functions as arguments
// We refer to these callbacks as 'handlers'. When the promise settles,
// the appropiate handler will be invoked with that settled value.

// The first handler, sometimes called 'onFulfilled' is a 'success handler', and
// it should contain the logic for the promise resolving

// The second handler, sometimes called 'onRejected' is a 'failure handler', and
// it should contain the logic for the promise rejecting

// ! We can invoke .then() with one, both, or neither handler
// .then() always returns a promise

