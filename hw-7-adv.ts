//task 1

const palindrom = "Madam";

function isPalindrom(str: string): boolean {
  const reverseStr = str.toLowerCase().split("").reverse().join("");
  return str.toLowerCase() === reverseStr;
}

console.log(isPalindrom(palindrom));

//task 2

const matrix = [
  [12, 98, 78, 65, 23],
  [54, 76, 98, 43, 65],
  [13, 324, 65, 312],
  [9092, 22, 45, 90000],
];

let counter = 0;
let allNumsSum = 0;

for (let num of matrix) {
  counter += num.length;
  for (let i = 0; i < num.length; i++) [(allNumsSum += num[i])];
}

const result = allNumsSum / counter;
console.log(result);

//task 3

const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];

let posNums: number[] = [];
let negNums: number[] = [];

for (let number of mixedNumbers) {
  if (number >= 0) {
    posNums.push(number);
  } else {
    negNums.push(number);
  }
}

console.log(posNums);
console.log(negNums);

//task 4

function createRndArr(x: number) {
  let rndArr: number[] = [];
  for (let i = 0; i < x; i++) {
    rndArr.push(Math.floor(Math.random() * 100));
  }
  return rndArr;
}

function expArrCube(arr: number[]): number[] {
  let resultArr: number[] = [];
  for (let value of arr) {
    resultArr.push(Math.pow(value, 3));
  }
  return resultArr;
}

let randomNumbers = createRndArr(5);

console.log(randomNumbers);
console.log(expArrCube(randomNumbers));
