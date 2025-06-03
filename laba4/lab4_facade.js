class Сonveyor {

  setBody() {
    console.log('Body set!');
  }


  setEngine() {
    console.log('Engine set!');
  }

  setInterior() {
    console.log('Exterior added!');
  }


  setExterior() {
    console.log('Added interior!');
  }

  setWheels() {
    console.log('Wheels!');
  }

  addElectronics() {
    console.log('Added electronics!');
  }

  paint() {
    console.log('Car painted!');
  }
}

class СonveyorFacade {
  constructor(car) {
    this.car = car;
  }

  assembleCar() {
    this.car.setBody();
    this.car.setEngine();
    this.car.setInterior();
    this.car.setExterior();
    this.car.setWheels();
    this.car.addElectronics();
    this.car.paint();
  }
}

const conveyor = new Сonveyor();
const facade = new СonveyorFacade(conveyor);

facade.assembleCar();
