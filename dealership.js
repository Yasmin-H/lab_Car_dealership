const Dealership = function(name, maxNumOfCars, carsInStock) {
    this.name = name;
    this.maxNumOfCars = maxNumOfCars;
    this.carsInStock = carsInStock;
    this.balance = 0;
  }
  
  Dealership.prototype.countCars = function() {
    return this.carsInStock.length;
  }