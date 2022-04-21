class Vehicle {
  drive(): void {
    console.log("chugga chugga");
  }

  honk(): void {
    console.log("beep beep i'm a ship i said beepbeep i'm a ship");
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
