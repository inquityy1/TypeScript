var Vehicle = /** @class */ (function () {
    function Vehicle(color) {
        this.color = color;
    }
    Vehicle.prototype.honk = function () {
        console.log("beep beep i'm a ship i said beepbeep i'm a ship");
    };
    return Vehicle;
}());
var vehicle = new Vehicle("orange");
console.log(vehicle.color);
// class Car extends Vehicle {
//   private drive(): void {
//     console.log("vroom");
//   }
//   startDrivingProcess(): void {
//     this.drive();
//     this.honk();
//   }
// }
// const car = new Car();
// car.startDrivingProcess();
