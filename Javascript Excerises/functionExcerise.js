var cars = [
    {
      make: 'Ferrari',
      model: '2005 Enzo',
      color: 'Red',
    },
    {
      make: 'Honda',
      model: '2016 Civic',
      color: 'blue',
    },
    {
      make: 'McClaren',
      model: '2015 McLaren 650S',
      color: 'MattBlack',
    },
    {
      make: 'Subaru',
      model: '2012 Forester',
      color: 'White',
    },
    {
      make: 'Mitsubishi',
      model: '2015 EVO',
      color: 'Silver',
    }
  ]

//1
console.log(cars[2].model)
//2
console.log(cars[4].model[0])
//3
cars[3].color = prompt("What color would you like?")
//4
cars[3].color
//4
cars.length
//5
cars[0].make.length
//6
typeof cars[1].model
//7
alert("The third car's color is " + cars[2].color)
//8
cars[0].model = null

var garage = {
   cars: [
    {
      make: 'Ferrari',
      model: '2005 Enzo',
      color: 'Red',
    },
    {
      make: 'Honda',
      model: '2016 Civic',
      color: 'blue',
    },
    {
      make: 'McClaren',
      model: '2015 McLaren 650S',
      color: 'MattBlack',
    },
    {
      make: 'Subaru',
      model: '2012 Forester',
      color: 'White',
    },
    {
      make: 'Mitsubishi',
      model: '2015 EVO',
      color: 'Silver',
    }
  ],
  getThirdModel: function() {
    console.log(cars[2].model)
  },
  firstCharacter: function() {
    return (this.cars[4].model[0])
  }
}
var createCar = function () {
  var make = prompt('What car company would you like to add?')
  var model = prompt ('What model is this car?')
  var color = prompt ('What color would you like this car to be?')
  garage.cars.push({make: make, model: model, color: color})
}
var carSearch = function () {
  var search = prompt('What car model are you searching for Good Sir?')
    for (var i = 0; i < garage.cars.length; i++) {
      if (search === garage.cars[i].model) {
        return garage.cars[i]
      }
    }
    console.log('Car model not found')
}
/*if (search = garage.cars[i].model){
return garage.cars[i]*/
