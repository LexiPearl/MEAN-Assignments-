function VehicleConstructor(name, num_wheels, num_passengers, speed){
    var self=this;
    this.name=name;
    this.num_wheels=num_wheels;
    this.num_passengers=num_passengers;
    this.speed=speed;

    var distanceTravelled=0;

    function updatedistanceTravelled(){
        distanceTravelled+=self.speed;
    }

    this.makenoise=function(noise){
        var noise="noise";
        console.log(noise)
    }
    this.move=function(){
        updatedistanceTravelled();
        this.makenoise();
    }
    this.checkMiles= function(){
        return distanceTravelled;
    }
}


var bus=new  VehicleConstructor(bus, 4, 20,20);
    console.log (bus.checkMiles());
    bus.move();
    console.log(bus.checkMiles());
    }
