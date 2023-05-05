const {Dealership} = require("./dealership");
const {Car} = require("./car");

const car1 = new Car("Audi", 6000, "V8");

const dealership1 = new Dealership("Yasmin's Dealership", 1, car1);

describe("car properties access", () => {

    test("can access dealership name", () => {
      const expected = "HansineGregThinesan Dealership";
      const actual = dealership1.name;
      expect(actual).toBe(expected);
    })
  
    test("can access dealership maxNumOfCars", () => {
      const expected = 6;
      const actual = dealership1.maxNumOfCars;
      expect(actual).toBe(expected);
    })

})