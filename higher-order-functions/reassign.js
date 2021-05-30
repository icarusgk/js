const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  }

// Write your code below
is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
is2p2();

// Logs the name that we assigned
console.log(is2p2.name);