// CODE here for your Lambda Classes// Step 1
class Person {
  constructor(attributes) {
    console.log(attributes);
    console.log(this)
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`
  }
}

//Person
const fred = new Person({
  age: 35,
  name: 'Fred',
  location: 'RockBed'
});

const willma = new Person({
  age: 32,
  name: 'Willma',
  location: 'RockBed'
});

console.log(fred)
console.log(fred.speak())

class Instructor extends Person {
  constructor(attributes) {
    super(attributes)
    console.log(attributes);
    console.log(this)
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`
  }
}

class Student extends Person {
  constructor(attributes) {
    super(attributes)
    console.log(attributes);
    console.log(this)
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects
  }
  listsSubjects() {
    return `${this.favSubjects}`
  }
  prAssignment(subject) {
    return `${student.name} has submitted a PR for ${subject}`
  }
  sprintChallenge(subject) {
    return `${student.name} has begun sprint challenge on ${subject}`
  }
}

class ProjectManager extends Instructor {
  constructor(attributes) {
    super(attributes);
    console.log(attributes);
    console.log(this)
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }
  standUp() {
    return `${name} announces to ${channel}, @channel standy times!`
  }
  debugsCode(student) {
    return `${name} debugs ${student.name}'s code on  ${subject}`
  }
}

// ----------------------- Objects----------------------
//Person
const fred = new Person({
  age: 35,
  name: 'Fred',
  location: 'RockBed'
});

const willma = new Person({
  age: 32,
  name: 'Willma',
  location: 'RockBed'
});

//Instructor
const halle = new Instructor({
  age: 39,
  name: 'Halle',
  location: 'Lambda',
  specialty: 'Front-end',
  favLanguage: 'JavaScript',
  catchPhrase: `Front-end is life.`
});

const salma = new Instructor({
  age: 45,
  name: 'Salma',
  location: 'Lambda',
  specialty: 'UX-UI',
  favLanguage: 'JavaScript',
  catchPhrase: `UX-UI is love`
});

const david = new Student({
  age: 31,
  name: 'David',
  location: 'Paris, TX',
  previousBackground: 'Zook Keeper',
  className: 'FS24',
  favSubjetcs: ['HTML', 'CSS', 'JavaScript']
});
const katy = new Student({
  age: 27,
  name: 'Katy',
  location: 'Houston, TX',
  previousBackground: 'Sky Driver Instructor',
  className: 'CS132',
  favSubjects: ['Python', 'C++', 'JavaScript']
});
const john = new ProjectManager({
  age: 27,
  name: 'Salma',
});
const jane = new ProjectManager({
  age: 27,
  name: 'Halle',
});


// console.log(john.standUp())
// console.log(salma.debugsCode())
// console.log(john.favLanguage)