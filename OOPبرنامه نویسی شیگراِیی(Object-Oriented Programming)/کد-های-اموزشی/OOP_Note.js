 /**
 * -------------------------------------------
 *     Educational Guide to Object-Oriented Programming (OOP)
 *     Step 1: Core Concepts
 *     Created By: Soufi Learn (https://instagram.com/soufi_learn)
 * -------------------------------------------
 */

// ----------------------------------
// 1️⃣ OOP => Object-Oriented Programming
// ----------------------------------

// 📦 Styles Of Programming:
// There are different approaches and paradigms for writing code. Two of the most common are:

// 1- Functional Programming (FP)
// In this style, the main focus is on functions. Data and functions are separate.

// 2- Object-Oriented Programming (OOP)
// In this style, we bundle data (properties) and the functions that operate on that data (methods) together into a single unit called an "Object".

// Example: Modal Box Project ↘️

class Modal {
  constructor(openBtnSelector, closeBtnSelector, modalSelector) {
    this.openBtn = document.querySelector(openBtnSelector);
    this.closeBtn = document.querySelector(closeBtnSelector);
    this.modal = document.querySelector(modalSelector);

    // Bind events
    this.openBtn.addEventListener("click", () => this.open());
    this.closeBtn.addEventListener("click", () => this.close());
  }

  open() {
    this.modal.classList.add("active");
  }

  close() {
    this.modal.classList.remove("active");
  }
}

// Create a Modal instance
const myModal = new Modal(".open-btn", ".close-btn", ".modal-box");

// -------------------------------------------------------------------

// 🤔 Why use OOP instead of FP?
// Both paradigms have their strengths, but OOP is particularly useful for large and complex projects for the following reasons:

// - Better Organization: Code is organized into related classes and objects, making it easier to manage and understand.
// - Flexibility & Extensibility: It's easier to add new features and behaviors without making major changes to existing code.
// - Reusability: By creating a "blueprint" (a Class), we can create as many objects as we need from it, which prevents code duplication.

// 🍝 Comparison with Spaghetti Code:
// Code that lacks a clear structure, where different parts are tightly coupled and tangled, is often called "Spaghetti Code".
// While this can happen in any programming style, OOP's structured nature helps prevent it.

// ----------------------------------
// 2️⃣ Start Coding OOP Class
// ----------------------------------

// 🎯 The Core Concept of OOP: The Object

// In the real world, everything is an object. Every object has "Properties" and "Behaviors".

// It's the same in OOP:
// - Properties => Data of an object.
// - Behaviors  => Actions an object can perform (called Methods). [2]

// Real-world examples:
// 1. Car
//    - Properties: color, model, speed
//    - Methods: accelerate(), brake(), startEngine()

// 2. Light
//    - Properties: location, brightness, watt
//    - Methods: turnOn(), turnOff(), toggle()

// 3. Human
//    - Properties: name, age, height, weight
//    - Methods: walk(), eat(), sleep()

// 4. Phone
//    - Properties: brand, model, volume
//    - Methods: volumeUp(), volumeDown(), turnOff()

// -------------------------------------------------------------------

// 🏗️ Class: The Blueprint for Creating Objects

// A class is a template or a blueprint for creating objects. It defines what properties and methods its objects will have.
// Classes are defined with the `class` keyword.

// Real-World Example:
// Think of a class like the blueprint (map) of a building.
// The blueprint defines how the building should look (number of rooms, floors, doors, etc.),
// but it's not an actual building itself.
// From this blueprint, you can construct many real buildings (instances),
// each with its own address, color, or owner, but all following the same design.

class Car {
  // The `constructor` is a special method that gets called automatically when a new object (instance) is created.
  // Its main job is to initialize the object's properties.

  constructor() {
    this.speed = 0; // Initial speed is 0
    this.isEngineOn = false; // The engine is off by default
  }

  // Method: A behavior or capability that objects of this class will have.
  startEngine() {
    this.isEngineOn = true;
    console.log(`Car's engine has started.`);
  }

  // Method
  accelerate() {
    this.speed += 100;
    console.log(`Current speed: ${this.speed} km/h`);
  }

  // Method
  brake() {
    this.speed = 0;
    console.log("The car has stopped.");
  }
}

// 🛠️ Instance: Creating a Real Object from a Class

// When we create a specific object from a class, it's called an "Instance" of that class (blueprint).
// We use the `new` keyword to create a new instance.

const car = new Car();

car.startEngine(); // Output: Car's engine has started.
car.accelerate(); // Output: Current speed: 100 km/h.
car.brake(); // Output: The car has stopped.

// ----------------------------------
// 3️⃣ Constructor Rulles
// ----------------------------------

class Car {
  // 1. A constructor is used to initialize object properties.
  // 2. It is called automatically when creating a new object with 'new' (instance).
  // 3. A class can have only ONE constructor.
  // 4. Constructor can take parameters to set initial values. (if you dont have parameters no need to create it)
  // 5. It is optional. If not defined, JavaScript provides a default empty constructor.

  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.speed = 0;
    this.isEngineOn = false;
  }

  startEngine() {
    this.isEngineOn = true;
    console.log(`${this.color} ${this.name}'s engine has started.`);
  }

  accelerate() {
    this.speed += 100;
    console.log(`${this.name}'s speed: ${this.speed} km/h`);
  }

  brake() {
    this.speed = 0;
    console.log("The car has stopped.");
  }
}

// Creating two different instances (two different cars) from the Car class
const myCar = new Car("Tesla", "Red");
const friendsCar = new Car("Ford", "Black");

// Now, each of these objects has its own independent properties and methods.
console.log(myCar.color); // Output: Red
console.log(friendsCar.name); // Output: Ford

// Using the methods for each instance
myCar.startEngine(); // Output: Red Tesla's engine has started.
myCar.accelerate(); // Output: Tesla's speed: 100 km/h

friendsCar.startEngine(); // Output: Black Ford's engine has started.
friendsCar.accelerate(); // Output: Ford's speed: 100 km/h

// ----------------------------------
// 4️⃣ Understanding 'this' in Detail
// ----------------------------------

// 🧩 What is 'this'?
// Think of 'this' like a personal tag that points to the object you're working with right now!
// Inside a class, 'this' always refers to the current instance.

// In a class, 'this' refers to the current instance (object) being created or used.
// It lets us access and change the object's properties inside methods.

// Why use 'this'?
// - Each object can have its own unique properties.
// - It allows us to connect properties set in the constructor to methods and use them outside the class.

// Example Class:
class Person {
  constructor(name, age) {
    // 'this' here points to the new instance being created
    this.name = name; // Assigns name to the new object
    this.age = age; // Assigns age to the new object
  }

  introduce() {
    // 'this' here also points to the same instance
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  }
}

// Creating two different instances
const person1 = new Person("Soufi");
const person2 = new Person("Sara");

// Testing 'this'
console.log(person1.introduce()); // Output: Hi, I'm Soufi and I'm 23 years old.
console.log(person2.introduce()); // Output: Hi, I'm Sara and I'm 30 years old.

// 🔍 What happens without 'this'?
// If we remove 'this' and just use name and age, they become local variables inside the constructor.
// Let's see an example:
class PersonNoThis {
  constructor(name, age) {
    name = name; // Local variable, not attached to the object
    age = age; // Local variable, not attached to the object
  }

  introduce() {
    return `Hi, I'm ${name} and I'm ${age} years old.`; // Error: name and age are not defined
  }
}

const person3 = new PersonNoThis("Ali", 25);
console.log(person3.introduce()); // This will throw an error!

// ----------------------------------
// 5️⃣ Add parameter in methods of class
// ----------------------------------

class Car {
  constructor(name) {
    this.name = name;
    this.speed = 0;
    this.isEngineOn = false;
  }

  startEngine() {
    this.isEngineOn = true;
    console.log(`${this.name}'s engine has started.`);
  }

  // Get amount as parameter of method ↙️
  accelerate(amount) {
    // check if car has started
    if (this.isEngineOn) {
      this.speed += amount;
      console.log(`${this.name}'s speed: ${this.speed} km/h`);
    } else {
      console.log("You need to start the engine first!");
    }
  }
}

// Creating two different instances (two different cars) from the Car class
const soufiCar = new Car("Tesla");
const MammadCar = new Car("Ford");

// Using the methods for each instance
soufiCar.startEngine(); // Output:  Tesla's engine has started.
soufiCar.accelerate(300); // Output: Tesla's speed: 300 km/h

console.log("-----------------");

MammadCar.accelerate(120); // Output: You need to start the engine first!
MammadCar.startEngine(); // Output:  Ford's engine has started.
MammadCar.accelerate(120); // Output: Ford's speed: 120 km/h

// ----------------------------------
// 6️⃣ Ways of add Methods in Class
// ----------------------------------

// 🎯 Best Way 👌: Inside the Class
// This is the coolest and easiest way! Define your methods right inside the class.
// It’s modern, clean, and automatically connects to the prototype.

class Car {
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }

  accelerate(amount) {
    this.speed += amount;
    console.log(`${this.name}'s speed is ${this.speed} km/h`);
  }
}

const tesla = new Car("Tesla");
tesla.accelerate(120); // Output: Tesla's speed is 120 km/h

// 💡 it’s great because: Keeps everything in one place.

// 🎯 Good Way for Storage 👍: Using Prototype
// Wanna save memory and add methods later? Use `prototype`!
// This way, all instances share the same method, which is a pro move for big projects.

class Car {
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }
}

Car.prototype.accelerate = function (amount) {
  this.speed += amount;
  console.log(`${this.name}'s speed is ${this.speed} km/h`);
};

const bmw = new Car("BMW");
bmw.accelerate(80); // Output: BMW's speed is 80 km/h

// 💡 it’s great because: Saves memory because only one copy of the method exists

// 🧪 Test It Out!
// Let’s see both in action:
const anotherTesla = new Car("Tesla");
anotherTesla.accelerate(50); // Output: Tesla's speed is 50 km/h (inside class)
const anotherBMW = new Car("BMW");
anotherBMW.accelerate(30); // Output: BMW's speed is 30 km/h (prototype)

// ----------------------------------
// 7️⃣ Modal Project with OOP (more practice)
// ----------------------------------

class Modal {
  constructor(openBtnSelector, closeBtnSelector, modalSelector) {
    this.openBtn = document.querySelector(openBtnSelector);
    this.closeBtn = document.querySelector(closeBtnSelector);
    this.modal = document.querySelector(modalSelector);

    this.openBtn.addEventListener("click", () => this.open());
    this.closeBtn.addEventListener("click", () => this.close());
  }

  open() {
    this.modal.classList.add("active");
  }

  close() {
    this.modal.classList.remove("active");
  }
}

// Create a Modal instances
const firstModal = new Modal(".open-btn", ".close-btn", ".modal-box");
const secondModal = new Modal(".open-btn2", ".close-btn2", ".modal-box2");

// ----------------------------------
// 8️⃣ Binding Events in OOP
// ----------------------------------

class Modal {
  constructor(openBtnSelector, closeBtnSelector, modalSelector) {
    this.openBtn = document.querySelector(openBtnSelector);
    this.closeBtn = document.querySelector(closeBtnSelector);
    this.modal = document.querySelector(modalSelector);

    /// -------------------------------
    // 1️⃣ Recommended: Arrow Functions
    // Arrow functions inherit `this` from the surrounding context (the class instance)
    // Can write multiple lines inside arrow function
    this.openBtn.addEventListener("click", () => this.open());
    this.closeBtn.addEventListener("click", () => this.close());

    // (⛔ dont use Regular function)

    // -------------------------------
    // 2️⃣ Using bind(this)
    // Bind `this` to the instance explicitly
    // Use when you have a normal function and want `this` to point to the instance
    this.openBtn.addEventListener("click", this.open.bind(this));
    this.closeBtn.addEventListener("click", this.close.bind(this));

    // -------------------------------
    // 3️⃣ Organizing event binding with a separate method
    this.bindEvents();
  }

  // Method to bind events (keeps constructor clean)
  bindEvents() {
    this.openBtn.addEventListener("click", this.open.bind(this));
    this.closeBtn.addEventListener("click", this.close.bind(this));
  }

  open() {
    this.modal.classList.add("active");
  }

  close() {
    this.modal.classList.remove("active");
  }
}

// Create a Modal instances
const modal1 = new Modal(".open-btn", ".close-btn", ".modal-box");
const modal2 = new Modal(".open-btn2", ".close-btn2", ".modal-box2");

// Summary:
// 1. Object: An entity that holds data (properties) and behaviors (methods).
// 2. Class: A blueprint or template for creating objects.
// 3. Instance: A concrete object created from a class.
// 4. Property: A variable inside a class that holds data (e.g., color, name).
// 5. Method: A function inside a class that defines a behavior (e.g., accelerate).
// 6. Constructor: A special method for creating and initializing an object created from a class.

// 📗 Instance methods & Static Methods

// 📗 Inheritance => A class can inherit the properties and methods of another class, while adding new features or modifying some of them.

// 📗 Encapsulation => keep properties and methods private inside class

// examples:
// (Human VS Programmer) => Eat , Sleep , (Code)
// (User VS Admin) => Login , SendMessage , (DeleteUser)

// 📗 Polymorphism => Polymorphism is the ability of a method to behave differently in different classes while keeping the same name.

// 📗 getter/setter
