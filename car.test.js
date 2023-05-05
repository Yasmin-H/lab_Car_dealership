const {Car} = require('./car');
const car1 = new Car("Audi", 6000, "V8");

describe("Each property in Car object can be accessed", () => {

    test("can get manufacturer", () => {
        expected = "Audi"
        actual = car1.manufacturer;
        expect(actual).toBe(expected)
    });

    test.skip('can get Price', () => {
        expected = 
        actual = 
        expect(actual).toBe(expected)
    });

    test.skip('can get engineType', () => {
        expected = 
        actual =
        expect(actual).toBe(expected)
    })
})

