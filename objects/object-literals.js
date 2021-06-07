let fasterShip = {
    'Fuel Type': 'Turbo Fuel',
    'color': 'silver'
};


let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
  

let crewCount = spaceship.numCrew;
let planetArray = spaceship.flightPath;


// To return an object with the same properties as 
// the ones passed to the function we do this 
const createPerson = (name, age, gender) => ({name, age, gender});

// This function creates an object with this properties.
const roger = createPerson("Roger", 20, 'M');
console.log(roger);
