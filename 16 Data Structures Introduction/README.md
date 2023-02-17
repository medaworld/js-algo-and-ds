# Data Strcutures Introduction

- Binary Search Trees
- Queues
- Singly Linked Lists
- Undirected Unweighted Graphs
- Binary Heaps
- Directed Graphs
- Hash Tables
- Doubly Linked Lists
- Stacks

## What Do They Do?

- Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data
- Different data structures excel at different things. Some are highly specialized, while others (like arrays) are more generally used
- The more time you spend as a developer, the more likely you'll need to use one of these data structures

## What is a Class?

- A blueprint for creating objects with pre-defined properties and methods
- We're going to implement data structures as classes

```
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let firstStudent = new Student("Meda", "World")
```

- The method to create new objects must be called constructor
- The class keyword creates a constant, so you can not redefine it
- We use the new keyword to create objects from classes

## Instance Methods

```
class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate() {
        this.tardies += 1;
        if(this.tardies >= 3) {
            return "YOU ARE EXPELLED!!!!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScore(score) {
        this.scores.push(score);
        return this.scores
    }
    calculateAverage() {
        let sum = this.scores.reduce(function(a,b){return a+b;})
        return sum/this.scores.length;
    }
}

let firstStudent = new Student("Meda", "World")
firstStudent.fullName() // "Your full name is Meda World"
```

## Adding Class Methods

- The static keyword defines a static method for a class
- Static methods are called without instantiating their class and cannot be called through a class instance
- Static methods are often used to create utility functions for an application

```
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  static enrollStudents(...students) {
    // maybe send an email here
  }
}

Student.enrollStudents()
```
