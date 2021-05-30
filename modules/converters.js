// To create a module, you simply have to create a new file where the 
// functions can be declared. Then, to make these functions available to 
// other files, add them as properties to the built-in module.exports object:

const celsiusToFahrenheit = celsius => celsius * (9/5) + 32;

// First way of exporting functions
module.exports.celsiusToFahrenheit = celsiusToFahrenheit;
// Second way of exporting function
module.exports.fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * (5/9);

// module.exports is an object that is built-in to 
// the Node.js runtime environment. Other files can now import 
// this object, and make use of these two functions,
// with another feature that is built-in to the Node.js runtime environment: the require() function.