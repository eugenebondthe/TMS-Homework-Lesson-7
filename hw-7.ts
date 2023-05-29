//task 1

const colors = ["red", "green", "blue"];

console.log(colors.length);

//task 2

const animals = ["monkey", "dog", "cat"];

console.log(animals[animals.length - 1]);

//task 3

const numbers = [5, 43, 63, 23, 90];

//variant 1

numbers.splice(0, numbers.length);
console.log(numbers);

//variant 2

while (numbers.length) {
  numbers.shift();
}

console.log(numbers);

//task 4

const students = ["Polina", "Dasha", "Masha"];

students.pop();
students.push(`Borya`);
students.shift();
students.unshift(`Andrey`);

console.log(students);

//task 5

const cats = ["Gachito", "Tom", "Batman"];

for (let i = 0; i < cats.length; ++i) {
  console.log(cats[i]);
}

for (const cat of cats) {
  console.log(cat);
}

//task 6

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
let numbersList: number[] = [];

for (let i = 0; i < evenNumbers.length; ++i) {
  oddNumbers.push(evenNumbers[i]);
}

numbersList = oddNumbers.splice(0);

console.log(numbersList);
console.log(numbersList.indexOf(8));

//task 7

const binary = [0, 0, 0, 0];
let binaryToStr = binary.join("1");

console.log(binaryToStr);


