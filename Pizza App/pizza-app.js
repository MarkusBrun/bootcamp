/*
GOALS FOR PIZZA UNICORN
1.  PU has Customers
      - Customers can Sign Up
2.  Customers create Orders
3.  Orders contain one or many Pizzas
4.  Pizzas have one or many Items
5.  PU has many Delivery People
6.  Orders get assigned to a Random Delivery Person
*/

//Add customers array
var pageAddCustomer = document.getElementById('page-add-customer')
var pageAddPizza = document.getElementById('page-add-pizza')
var pageCart = document.getElementById('page-cart')
var pageReceipt = document.getElementById('page-receipt')
var addCustomerButton = document.getElementById('add-customer-btn')
var firstNameNode =  document.getElementById('firstName')
var lastNameNode = document.getElementById('lastName')
var phoneNode = document.getElementById('phoneNumber')
var addressNode = document.getElementById('address')
var buttonPizza = document.getElementById('buttonPizza')
var buttonCart = document.getElementById('buttonCart')

var customers = []

var order;
var customer;
addCustomerButton.addEventListener('click', function() {
customer = new Customer (firstNameNode.value, lastNameNode.value, phoneNode.value, addressNode.value)
customers.push(customer)
 order = new Order(customer)
navigate(currentPage, pageAddPizza)
console.log(customer)
})


buttonPizza.addEventListener('click', function() {
  var pizza = new Pizza ()
  var pizzaSize = new PizzaSize("Medium", 14)
  pizza.setSize(pizzaSize)
  order.addPizza(pizza)
  console.log(customer)
  console.log(order)
  console.log(pizza)
})


buttonCart.addEventListener('click', function (){
  var deliveryPerson = deliveryPeople[Math.floor(Math.random() * deliveryPerson.length) + 1]
  order.addDeliveryPerson(deliveryPerson)
  console.log(customer)
  console.log(order)
  console.log(pizza)
  navigate(currentPage, pageReceipt)
})




var currentPage = pageAddCustomer;
pageAddCustomer.style.display = 'block';


var navLinks = document.querySelectorAll('.nav-link')

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function () {
    switch(this.id){
      case 'link-customer':
        currentPage.style.display = 'none';
        currentPage = pageAddCustomer;
        currentPage.style.display = 'block';
        break;
      case 'link-pizza':
        currentPage.style.display = 'none';
        currentPage = pageAddPizza;
        currentPage.style.display = 'block';
        break;
      case 'link-cart':
        currentPage.style.display = 'none';
        currentPage = pageCart;
        currentPage.style.display = 'block';
        break;
      case 'link-receipt':
        currentPage.style.display = 'none';
        currentPage = pageReceipt;
        currentPage.style.display = 'block';
        break;
    }
  });
}


var navigate = function (pageFrom, pageTo) {
  pageFrom.style.display = 'none'
  currentPage = pageTo;
  currentPage.style.display = 'block'

}

var Customer = (function () {
  var incrementedId = 1;

  return function Customer (firstName, lastName, phone, address) {
    this.id = incrementedId++
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.address = address;
    }

})();

var Order = (function (customerID) {
var incrementedId = 10001;

  return function Order(customer) {
    this.id = incrementedId++,
    this.customerID = customer.id,
    this.deliveryPerson = {},
    this.pizzas = [],
    this.totalCost = 0,
    this.addPizza = function (pizza) {
      this.pizzas.push(pizza)
      this.totalCost = pizza.totalCost
    },
    this.addDeliveryPerson = function (deliveryPerson) {
      this.deliveryPerson = deliveryPerson;
    }
  }
})();

var Pizza = function () {
  this.toppings = [],
  this.totalCost = 0;
  this.size = []
  this.setSize = function (size) {
    this.size = size;
    this.totalCost += parseInt(size.cost)
  }
  this.addTopping = function (topping){
    this.toppings.push(topping)
    this.totalCost += parseFloat(topping.cost)
  }
}

var Topping = function (name,cost) {
  this.name = name;
  this.cost = cost;
}

var allToppings = [
  new Topping('Pepperoni', 0),
  new Topping('Bacon', .50),
  new Topping('Jalepeno', .50),
  new Topping('Lobster', 5)
]

var PizzaSize = function(name, cost) {
  this.name = name;
  this.cost = cost;
}

var allPizzaSizes = [
  new PizzaSize('Small', 10),
  new PizzaSize('Medium', 14),
  new PizzaSize('Large', 20),
]


var DeliveryPerson = function (name, phone, car) {
  this.name = name,
  this.phone = phone,
  this.car = car
}


var deliveryPeople = [
  new DeliveryPerson('Liam', '530-343-3415', 'Lambo'),
  new DeliveryPerson('Aaron', '530-343-3415', 'Ford Fiesta'),
  new DeliveryPerson('Blaze', '530-343-3415', 'Honda Civic'),
]
