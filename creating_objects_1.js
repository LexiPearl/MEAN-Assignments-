function VehicleConstructor(name, num_wheels, num_passengers){
    var vehicle={};

    vehicle.name=name;
    vehicle.num_wheels=num_wheels;
    vehicle.num_passengers=num_passengers;

    makenoise=function(noise){
        var noise=noise;
        console.log(noise)
    }
    return vehicle
}

var bike=VehicleConstructor(bike, 2, 1);
    bike.makenoise=function(){
        console.log('ring,ring')
    }
var sedan=VehicleConstructor(sedan, 4, 5);
    sedan.makenoise=function(){
        console.log('honk, honk')
    }

var bus=VehicleConstructor(bus, 4, 20);
    bus.pickup= function(passenger,number){
        bus.num_passengers+= number
}
console.log(bus.num_passengers)
bus.pickup(3)
console.log(bus.num_passengers)
