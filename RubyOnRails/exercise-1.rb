  Ferrari = {make: "Ferrari", model: "445", color: "Silver"}
  Subaru = {make: "Subaru", model: "Outback", color: "Green"}
  Lambo = {make: "Lamborghini", model: "Aventatador", color: "Black"}
  Audi = {make: "Audi", model: "S4", color: "Blue"}
  Honda = {make: "Honda", model: "Civic", color: "Red"}
  array = []
  array.push(Ferrari, Subaru, Lambo, Audi, Honda)

#   for car in array
#     if car[:color] == "Red"
#       puts car
#   end
# end

#
# for car in array
#   if car[:make].include? ('i')
#     puts car
#   end
# end

for car in array
  puts car[:make] + " | "
end
