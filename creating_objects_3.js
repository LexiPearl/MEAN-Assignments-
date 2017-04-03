function VehicleConstructor(name, num_wheels, num_passengers, speed){
    this.name=name;
    this.num_wheels=num_wheels;
    this.num_passengers=num_passengers;
    this.speed=speed;
    this.vin=newVin(){

    }

    var distanceTravelled=0;

    VehicleConstructor.prototype.updatedistanceTravelled=function(){
        this.distanceTravelled+=this.speed;
        console.log(this.distanceTraveled);
        return this;
    }

    VehicleConstructor.prototype.makenoise=function(noise){
        var noise="noise";
        console.log(noise)
        return this
    }

    VehicleConstructor.prototype.move=function(){
        this.updatedistanceTravelled();
        this.makenoise();
        return this
    }

    VehicleConstructor.prototype.checkMiles= function(){
        console.log(distanceTravelled);
        return this
    }
    function newVin(){
      var vin = '';
      var chars = "0123456789ABCEDGHIJKLMNOPQRSTUVWXYZ";
      for (var i = 0; i < 17; i+=1 ){
        // Use Math.floor and Math.random to generate random index to access character from char string
        vin += chars[Math.floor(Math.random()*35)];
      }
      return vin;
    }
}

var car = new VehicleConstructor('car', 4, 4, 80);
