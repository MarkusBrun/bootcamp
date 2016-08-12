@cars = [
  {make: "Ferrari", model: "Gallardo", color: "red"},
  {make: "Lamborghno", model: "Droptop", color: "blue"},
  {make: "Audo", model: "R8", color: "mattBlack"},
  {make: "Honda", model: "Civic", color: "purple"},
  {make: "Ford", model: "Fiesta", color: "farmerGreen"},
]

array = []

def find_cars
@cars.select { |car| (car[:make].include? 'i') || (car[:make].include? 'a') || (car[:make].include? 'e')}
end

def printCars
find_cars.map {|car| car[:make] + ' ' + car[:model] + ' ' + car[:color]}
end

array << printCars

puts array.join('|')
