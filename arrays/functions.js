// Function declaration
function sumTwo(a) {
    return a + 2;
}

// Function expressions
const plantNeedsWater = function(day) {
    if (day == "Tuesday") {
        return true;
    }
    else {
        return false;
    }
}

// Arrow Functions
const needFood = (food) => {
    if (food == "Pizza") {
        return true;
    }
    else {
        return false;
    }
}

// Concise body arrow functions
// Zero Parameters
const needSleep = () => {
    console.log("Yes");
}

// One Parameter
const needWater = response => console.log(response);

// Two or more parameters
const needSnack = (snack1, snack2) => {
    console.log(snack1, snack2);
}

const toogleButton = button => button === "On" ? true : false;


needWater("hi!!");


