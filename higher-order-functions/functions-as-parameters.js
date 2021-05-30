// We call the functions that get passed in as parameters 
// and invoked callback functions

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ((2 + 2) !== 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  const addTwo = num => num + 2;
  
  const timeFuncRuntime = funcParameter => {
    let t1 = Date.now();
    funcParameter();
    let t2 = Date.now();
    return t2 - t1;
  };
  
  // Write your code below
  const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
  const time2p2 = timeFuncRuntime(is2p2);
  
  const checkConsistentOutput = (fn, value) => {
    let result1 = fn(value);
    let result2 = fn(value);
  
    if (result1 === result2) {
      return fn(value);
    } else {
      return 'This function returned inconsistent results';
    }
  }