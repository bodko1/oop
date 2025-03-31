// Базовий абстрактний клас
class Animal {
  constructor(name) {
    if (new.target === Animal) {
      throw new Error("Cannot instantiate an abstract class");
    }
    this.name = name;
  }

  // Абстрактний метод (без реалізації)
  makeSound() {
    throw new Error("Method 'makeSound()' must be implemented.");
  }

  // Метод з реалізацією
  getName() {
    return this.name;
  }
}

// Похідний клас "Собака"
class Dog extends Animal {
  #breed; // Приватне поле

  constructor(name, breed) {
    super(name);
    this.#breed = breed;
  }

  makeSound() {
    console.log(`${this.name} каже: Гав-гав!`);
  }

  getBreed() {
    return this.#breed;
  }
}

// Похідний клас "Кіт"
class Cat extends Animal {
  #color; // Приватне поле

  constructor(name, color) {
    super(name);
    this.#color = color;
  }

  makeSound() {
    console.log(`${this.name} каже: Мяу-мяу!`);
  }

  getColor() {
    return this.#color;
  }
}

// Поліморфізм: створюємо колекцію об'єктів різних класів
const animals = [
  new Dog("Рекс", "Німецька вівчарка"),
  new Cat("Мурзик", "Сірий"),
  new Dog("Бобік", "Такса"),
  new Cat("Сніжок", "Білий")
];

// Викликаємо метод makeSound() для кожного об'єкта
animals.forEach(animal => {
  animal.makeSound();
});
