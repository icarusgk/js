export const robotFactory = (model, mobile) => {
  return {
    model,
    mobile,
    beep() {
      console.log("Beep Boop");
    },
  };
};

const tinCan = robotFactory("P-500", true);
tinCan.beep();

const bottleFactory = (name, weight, in_stock, flavor) => ({name, weight, in_stock, flavor});

const manufacturer = (model, weight, in_stock) => {
  return {
    model,
    weight,
    in_stock,
    assemble() {
      console.log(`${this.model} weights ${this.weight} lbs, in stock: ${this.in_stock}`);
    },
    telltime() {
      console.log("The time is: 5:42 PM");
    }
  }
};

const computerMaker = (model, ram, cpu, voltage) => {
  // return an object
  return {
    model,
    ram,
    cpu,
    voltage,
    sell() {
      console.log(`Selling ${this.model}`);
    },
    addRam(amount) {
      this.ram += amount;
      console.log(`${amount}GB being added to ${this.model}, now it has ${this.ram}GB`);
    }
  }
}

const yoplait = bottleFactory("Yoplait", 1.8, true, "Stawberry");
console.log(yoplait);

const toshiba = manufacturer("Toshiba", 3, true);
console.log(toshiba);
toshiba.assemble();

const zephyrus = computerMaker("Zephyrus G14", 16, "Ryzen 9", 100);
console.log(zephyrus);
zephyrus.addRam(16);
zephyrus.addRam(21);


// EXPORT
export { computerMaker, manufacturer };