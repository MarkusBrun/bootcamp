module GarageManagementSystem

  class Ticket
    attr_accessor :timestamp

    def initialize
      @timestamp = Time.new
    end
  end

  class Vehicle
    attr_accessor :type, :make, :model, :color, :ticket

    def self.display_vehicle
      puts @make + " " + @model + " " + @color
    end
  end

  class Spot
    attr_accessor :type, :level, :number

    def initialize type, level, number
      @type = type
      @level = level
      @number = number
    end
  end

  class Garage
    attr_accessor :spots, :vehicles, :available_spot_types

    @@number_of_garages = 0

    def self.all_available_spot_types
      ["Motorcycle", "Car", "Truck", "Suv"]
    end

    def initialize
      @vehicles = []
      @@number_of_garages += 1
      @spots = []
    end

    def assign_spot vehicle
      for spot in spots
        if spot.vehicle == nil && spot.type == vehicle.type
          spot.vehicle = vehicle
          spot.vehicle.spot = spot
          return
        end
      end
    end

    def enter vehicle
      vehicle.ticket = Ticket.new
      @vehicles << vehicle
      assign_spot vehicle
    end

    def exit vehicle
      @vehicles.delete vehicle
      vehicle.spot.vehicle = nil
    end
  end
end



garage = GarageManagementSystem::Garage.new
garage.available_spot_types = GarageManagementSystem::Garage.all_available_spot_types[0 ,1]
garage.spots = [
  GarageManagementSystem::Spot.new(garage.available_spot_types[0], 1, 1234),
  GarageManagementSystem::Spot.new(garage.available_spot_types[1], 2, 1552),
]


audi = GarageManagementSystem::Vehicle.new
audi.type = garage.available_spot_types[1]
audi.make = "Audi"
audi.model = "R8"
audi.color = "Red"

audi.display_vehicle 
