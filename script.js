function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding method to Person prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

function Employee(name, age, jobTitle) {
  // Call parent constructor
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inherit prototype from Person
Employee.prototype = Object.create(Person.prototype);

// Fix constructor reference
Employee.prototype.constructor = Employee;

// Add jobGreet method
Employee.prototype.jobGreet = function () {
  console.log(
    `Hello, my name is ${this.name} and I am ${this.age} years old, and my job title is ${this.jobTitle}.`
  );
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;