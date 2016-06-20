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
