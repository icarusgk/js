// We must use bracket notation when accessing 
// keys that have numbers, spaces, or special characters in them. 
// Without bracket notation in these situations, 
// our code would throw an error.

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName =  'Active Mission';
  
  // Write your code below
  let isActive = spaceship[propName];
  console.log(isActive);