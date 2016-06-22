var carsAPI = {
    carsApiList: [{
        make: 'Ferrari',
        model: '2005 Enzo',
        color: 'Red',
    }, {
        make: 'Honda',
        model: '2016 Civic',
        color: 'blue',
    }, {
        make: 'McClaren',
        model: '2015 McLaren 650S',
        color: 'MattBlack',
    }, {
        make: 'Subaru',
        model: '2012 Forester',
        color: 'White',
    }, {
        make: 'Mitsubishi',
        model: '2015 EVO',
        color: 'Silver',
    }]
}


var Garage = function(cars) {
  this.cars = [];

  var that = this;

};

Garage.prototype.cars = function () {
return this.cars;
};

var Car = function(make, model, color) {
this.make = make;
this.model = model;
this.color = color;
}
Car.prototype.make = function () {
return this.make
}
Car.prototype.model = function () {
return this.model
}
Car.prototype.color = function () {
return this.color
}

/*var myBaby = new Car ('Honda', 'Civic' ,'Green')

var laGarage = new Garage (myBaby)

var norwayGarage = new Garage()*/

//Create a car

//Create a Garag
