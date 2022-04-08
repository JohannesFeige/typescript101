// ---------- Übung 1 ----------

// string
let trainingTitle: string;
trainingTitle = "TS Basics";

// number
let attendees: number;
attendees = 20;

// boolean
let prepared: boolean;
prepared = false;

// array
// let topics: string[];
let topics: Array<string>;
topics = ["JS Types", "TS Types"];
topics.push(100);

// tuples
let topic: [string, number];
topic = ["JS Types", 10];

// enums - nothing todo here
enum Direction {
  up,
  down,
  left,
  right,
}

// functions
function returnAttendees(attendees: {name: string}): {name: string} {
  return attendees;
}

const fn2: () => string = () => 'foo';

// optional parameter:
function greetMe(name?: string | undefined) {  
  if (!name) {
    name = "Default Name";
  }
  console.log(name);
}

// void
function printTitle(title: string): void {
  console.log(title);
}

// argument types
function add(a: number, b: number) {
  return a + b;
}

// function types
let myAdd: (val1, val2) => any;
myAdd = add;

// optionale Parameter, default Parameter
function concat(val1: string, val2 = "Team", val3: string): string {
  return `${val1} ${val2} ${val3 ?? ""}`;
}

// objects
let training: { title: string; attendees: number };
training = {
  title: "TS 101",
  attendees: 20,
};

// unknown
function convertUnkown(val: unknown) {
  if (typeof val === "string") {
    return val;
  }
  return val.toString();
}

type Training = {
  title: string;
  topics: string[];
  getTopicsAmount: (argument: string) => number;
}

// complex type:
let typeScriptTraining: Training = {
  title: "TS Basics",
  topics: ["JS Types", "TS Types"],
  getTopicsAmount: function (f: string): number {
    return this.topics.length;
  },
};

let angularTraining: Training = {
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

function getAnimal(animal: Bird | Fish) {
  if ('canSpeak' in animal) {
    animal.fly()
  } else {
    animal.swim()
  }  
}

//const foo = {foo: ()  => {}}

// getAnimal(foo as Fish)

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
const obj1: { foo?: {foobar?: () => void}, bar?: () => void } = {};

obj1.foo.foobar();
if (obj1 != null && obj1.foo != null && obj1.foo.foobar != null) {
  obj1.foo.foobar()
}

obj1 && obj1.foo && obj1.foo.foobar && obj1.foo.foobar();

obj1?.foo?.foobar?.()


// nullish coalescing
function myFun(foo: string | undefined) : void {
  foo = foo ?? 'default';
}

// -----------------------------------------------------------------------------

// template literals
const val1 = 'foo';
const val2 = 'bar';
const val3 = 'foobar';
const templateLit = `An error occured: ${val1} ${val2} ${val3}`;

// spread & rest operatory

// destructuring of objects and arrays
const stringArray = ['foo', 'bar'];

const [first, ...rest] = stringArray;

const fancyObj = {
  foo: 'foo',
  bar: 10,
  foobar: true,
}

let {foo: myFoo, ...restObj} = fancyObj
myFoo = 'bar';

const array = [1, 2, 3, 4, 5];
const array2 = [...array];

function getFancyObj({foo}: typeof fancyObj) {
}


// promises
const myFetch = fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => res.json() as Promise<{ title: string; }>)
  .then(json => console.log(json));


async function ()  {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const json = await response.json();
  console.log(json);
}
// -----------------------------------------------------------------------------

// map & reduce

// concat
const originArr = ['foobar', 'foobarfo']
const concant1 = ['foo', 'bar'].concat(origin)
const concat2 = ['foo', 'bar', ...originArr]

// foreach
originArr.forEach(item => console.log(item));

//filter
originArr.filter(item => item.length > 5);

// find
originArr.find(item => item.length > 5);

// some	
originArr.some(item => item.length > 5);

// map
originArr.map(item => item.length);

// reduce
originArr.reduce((acc, item) => acc + item.length, 0);


const bankAccounts = [
  { name: "John", balance: 4000 },
  { name: "Jane", balance: 3000 },
  { name: "Jane", balance: 3000 },
  { name: "Peter", balance: -500 },
  { name: "Chloe", balance: 11000 },
  { name: "Alan", balance: NaN },
];