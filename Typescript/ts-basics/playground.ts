let age: number = 5;
let username: string = "Brian";
let isTrue: boolean = true;
let hobbies: string[];
hobbies = ["a", "b"];

let course: string | number = "Introduction";
course = 123;

type Person = {
  name: string;
  age: number;
};

let people: Person[];

function add(a: number, b: number) {
  return a + b;
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, 0);

