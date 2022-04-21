var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.drive = function () {
        console.log("chugga chugga");
    };
    Vehicle.prototype.honk = function () {
        console.log("beep beep i'm a ship i said beepbeep i'm a ship");
    };
    return Vehicle;
}());
var vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
