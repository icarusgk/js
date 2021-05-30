let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below

let alienShip = {
  takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!');
  },
  retreat () {
    console.log(retreatMessage);
  }
}

const addWater = plant => {
    console.log(`Adding water to ${plant}`);
}


addWater("Tulips");

alienShip.retreat();
alienShip.takeOff();
