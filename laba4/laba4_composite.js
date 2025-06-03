class Equipment {
  getPrice() {
    return this.price || 0;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  setPrice(price) {
    this.price = price;
  }
  show() {
    console.log(`${this.getName()}: $${this.getPrice()}`);
  }


}

class Engine extends Equipment {
  constructor() {
    super();
    this.setName('Engine');
    this.setPrice(800);
  }
}

class Body extends Equipment {
  constructor() {
    super();
    this.setName('Body');
    this.setPrice(3000);
  }
}

class Tools extends Equipment {
  constructor() {
    super();
    this.setName('Tools');
    this.setPrice(4000);
  }
}

class Composite extends Equipment {
  constructor() {
    super();
    this.equipments = [];
  }





  // remove(equipment) {
  //   this.equipments = this.equipments.filter(eq => eq !== equipment);
  // }

  add(equipment) {
    this.equipments.push(equipment);
  }




  getPrice() {
    return this.equipments
      .map(equipment => equipment.getPrice())
      .reduce((a, b) => a + b);
  }
  show() {
    console.log(`${this.getName()}: $${this.getPrice()}`);
    this.equipments.forEach(e => e.show());
  }




}

class Car extends Composite {
  constructor() {
    super();
    this.setName('Audi');
  }
}
const engine = new Engine();
const body = new Body();
const tools = new Tools();

const car = new Car();

car.add(engine);
car.add(body);
car.add(tools);
car.add(tools);
car.show();

// console.log(`${car.getName()}`);
// console.log(`${car.getPrice()}`);

// car.remove(engine);

// console.log(`${car.getPrice()}`);



