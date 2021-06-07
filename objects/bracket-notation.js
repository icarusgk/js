// We must use bracket notation when accessing
// keys that have numbers, spaces, or special characters in them.
// Without bracket notation in these situations,
// our code would throw an error.

let spaceship = {
  "Fuel Type": "Turbo Fuel",
  "Active Mission": true,
  homePlanet: "Earth",
  numCrew: 5,
};

let propName = "Active Mission";

// Write your code below
let isActive = spaceship[propName];
console.log(isActive);

let book = {
    name: "Seveneves",
    author: "J.K. Rowling",
    isbn: 2948753239,
    in_stock: 13,
    series: ["Seveneves 1", "Seveneves 2"],
    is_sold: false,
    books: {
        is_good: true
    }
};

let bottle = {
    name: "Yoplait",
    flavor: "Strawberry",
    size: 94,
    weight: 100,
    has_tap: true,
};

const toLbs = ({weight}) => weight * 2.2;

console.log(toLbs(bottle));
