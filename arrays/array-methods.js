const groceryList = [
  "orange juice",
  "bananas",
  "coffee beans",
  "brown rice",
  "pasta",
  "coconut oil",
  "plantains",
];

// Removing the first item from an array
groceryList.shift();

// Add to beggining of the list
groceryList.unshift('popcorn');
console.log(groceryList);

// Obtain just certain elements
// Starts at elements with index zero
// Ends withe the index included
console.log(groceryList.slice(1, 4));
// Slice is not-mutating

// Obtain the index of a certain element inside an array
pastaIndex = groceryList.indexOf('pasta');
console.log(`The index of pasta is: ${pastaIndex}`);


