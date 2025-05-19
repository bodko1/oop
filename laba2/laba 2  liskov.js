class Bird {
  // Базовий клас, який описує загальні властивості птаха
}

class FlyingBird extends Bird {
  fly() {
    console.log('Flying');
  }
}

class Sparrow extends FlyingBird {
  fly() {
    console.log('Sparrow is flying');
  }
}

class Penguin extends Bird {
  // Пінгвін не може літати, тому у нього немає методу fly
  swim() {
    console.log('Penguin is swimming');
  }
}

function makeBirdFly(bird) {
  if (bird instanceof FlyingBird) {
    bird.fly();  // Працює тільки для птахів, які можуть літати
  } else {
    console.log('This bird cannot fly');
  }
}

const sparrow = new Sparrow();
makeBirdFly(sparrow);

const penguin = new Penguin();
makeBirdFly(penguin);

