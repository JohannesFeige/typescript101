// ---------- Übung 1 ----------

// string
let trainingTitle;
trainingTitle = "TS Basics";

// number
let attendees;
attendees = 20;

// boolean
let prepared;
prepared = false;

// array
let topics;
topics = ["JS Types", "TS Types"];
topics.push(100);

// tuples
let topic;
topic = ["JS Types", 10];
// let topic: [string, number] = [10, 'JS Types'];

// enums - nothing todo here
enum Direction {
  up,
  down,
  left,
  right,
}

// functions
function returnAttendees(attendees) {
  return attendees;
}

// optional parameter:
function greetMe(name) {
  if (!name) {
    name = "Default Name";
  }
  console.log(name);
}

// void
function printTitle(title) {
  console.log(title);
}

// argument types
function add(a, b) {
  return a + b;
}

// function types
let myAdd: (val1, val2) => any;
myAdd = add;

// optionale Parameter, default Parameter
function concat(val1, val2 = "Team", val3): string {
  return `${val1} ${val2} ${val3 ?? ""}`;
}

// objects
let training;
training = {
  title: "TS 101",
  attendees: 20,
};

// unknown
function convertUnkown(val) {
  if (typeof val === "string") {
    return val;
  }
  return val.toString();
}

// type Training = {

// }

// complex type:
let typeScriptTraining = {
  title: "TS Basics",
  topics: ["JS Types", "TS Types"],
  getTopicsAmount: function (f: string): number {
    return this.topics.length;
  },
};

let angularTraining = {
  title: "ng Basics",
  topics: ["Components", "ng Testing"],
  getTopicsAmount: function (f: string): number {
    return this.topics.length;
  },
};

// ---------- Übung 2 ----------

// union types
type Bird = {  
  layEggs: () => void;
  fly: () => void;
  canSpeak: boolean;
};

type Fish = {
  layEggs: () => void;
  swim: () => void;
};

function getAnimal(animal: Fish | Bird): Fish | Bird {
  if ('canSpeak' in animal) {
    animal.fly()
  } else {
    animal.swim()
  }

  return animal;
}

// intersection types
type CommonResponse = {
  success: boolean;
  error: string;
}

type Data = {
  value: string[];
}

type Measurement = {
  value: number;
}

type DataResponse = Data & CommonResponse;

type MeasurementResponse = Measurement & CommonResponse;

const dataResonse: DataResponse = {

}

const measurementResponse: MeasurementResponse = {

}

// Partial

// Require

// Pick

// Omit

// -----------------------------------------------------------------------------

// optional chaining

// nullish coalescing

// -----------------------------------------------------------------------------

// template literals

// spread & rest operator

// destructuring of objects and arrays

// promises

// -----------------------------------------------------------------------------

// map & reduce

const bankAccounts = [
  { name: "John", balance: 4000 },
  { name: "Jane", balance: 3000 },
  { name: "Jane", balance: 3000 },
  { name: "Peter", balance: -500 },
  { name: "Chloe", balance: 11000 },
  { name: "Alan", balance: NaN },
];