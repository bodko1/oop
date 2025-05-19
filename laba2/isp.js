class Flyable {
  fly() {
    throw new Error('Method fly() must be implemented');
  }
}

class Swimmable {
  swim() {
    throw new Error('Method swim() must be implemented');
  }
}

class Eatable {
  eat() {
    throw new Error('Method eat() must be implemented');
  }
}

class Penguin extends Swimmable {
  swim() {
    console.log('Penguin is swimming');
  }

  eat() {
    console.log('Penguin is eating');
  }
}

class Sparrow extends Flyable {
  fly() {
    console.log('Sparrow is flying');
  }

  eat() {
    console.log('Sparrow is eating');
  }
}

const sparrow =new Sparrow();
sparrow.fly();
sparrow.eat();