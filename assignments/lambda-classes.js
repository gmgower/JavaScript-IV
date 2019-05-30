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
    return `${student} receives a perfect score on ${subject}`
  }
}

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

console.log(salma)
console.log(halle.speak())
console.log(salma.grade('Jim', 'JavaSrcipt I'))
console.log(halle.demo('Flexbox'))


class Student extends Person {
  constructor(attributes) {
    super(attributes)
    console.log(attributes);
    console.log(this);
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects
  }
  listsSubjects() {
    this.favSubjects.map(function (favSubject) {
      console.log(favSubject);
    })
    // for(let i = 0; i < this.favSubjects.length; i++){
    //   console.log(this.favSubjects[i])
    // }
    // return `${this.favSubjects}`
  }
  prAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`
  }
}

const david = new Student({
  age: 31,
  name: 'David',
  location: 'Paris, TX',
  previousBackground: 'Zook Keeper',
  className: 'FS24',
  favSubjects: ['HTML', 'CSS', 'JavaScript']
});
const katy = new Student({
  age: 27,
  name: 'Katy',
  location: 'Houston, TX',
  previousBackground: 'Sky Driver Instructor',
  className: 'CS132',
  favSubjects: ['Python', 'C++', 'JavaScript']
});

console.log(david);
katy.listsSubjects();
console.log(david.prAssignment('computer science'))
console.log(katy.sprintChallenge('CSS-II'))

class ProjectManager extends Instructor {
  constructor(attributes) {
    super(attributes);
    console.log(attributes);
    console.log(this)
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on  ${subject}`
  }
}

const john = new ProjectManager({
  age: 27,
  name: 'John',
  location: 'New York',
  specialty: 'BackEnd',
  favLanguage: 'Python',
  catchPhrase: 'Just do it!',
  gradClassName: 'CS7',
  favInstructor: 'Linda'
});
const jane = new ProjectManager({
  age: 36,
  name: 'Jane',
  location: 'Miami',
  specialty: 'Full Stack',
  favLanguage: 'JavaScript',
  catchPhrase: 'You can do it!',
  gradClassName: 'FS15',
  favInstructor: 'Tom'
});

console.log(john)
console.log(jane.specialty)
console.log(john.standUp('PT7'))
console.log(jane.debugsCode(katy, 'JS IV'))


console.log(katy.name)
console.log(salma.age)
console.log(fred.location)
console.log(halle.specialty)
console.log(david.favSubjets)
console.log(fred.speak())
console.log(salma.speak())
console.log(katy.listsSubjects())
console.log(katy.speak())
// console.log(john.standUp())
// console.log(salma.debugsCode())
// console.log(john.favLanguage)