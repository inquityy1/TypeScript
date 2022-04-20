interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printSummary = (vehicle: Reportable): void => {
  console.log(vehicle.summary());
};

printSummary(oldCivic);
