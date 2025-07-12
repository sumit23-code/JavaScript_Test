// 9. Get Last 3 Items
//  Return the last 3 items in the array using `slice()`.
//  Input 1: [1, 2, 3, 4, 5]
//  Output 1: [3, 4, 5]
//  Input 2: [10, 20, 30, 40]
//  Output 2: [20, 30, 40]


// let ele = [1, 2, 3, 4, 5];
// let element =  ele.slice(-3);
// console.log(element);


// let val = [10, 20, 30, 40];
// let values =  val.slice(-3);
// console.log(values);





// 10. Remove Element at Index 2
//  Use `splice()` to remove the element at index 2.
//  Input 1: [1, 2, 3, 4]
//  Output 1: [1, 2, 4]
//  Input 2: [10, 11, 12, 13]
//  Output 2: [10, 11, 13]

// const elements = [1, 2 , 3, 4];
// elements.splice(2,1);
// console.log(elements);


// const numbers = [10, 11, 12, 13];
// numbers.splice(2,1);
// console.log(numbers);




// 3. Positive Numbers?
//  Check if all elements in the array are greater than 0 using `every()`.
//  Input 1: [1, 2, 3, 4]
//  Output 1: true
//  Input 2: [-1, 0, 5]
//  Output 2: false


// let array = [1, 2, 3, 4];
// let numbers = array.every(num => num > 0);
// console.log(numbers);


// let arry = [-1, 0, 5];
// let elements = arry.every(num => num > 0);
// console.log(elements);




// 4. Find First Number Greater Than 50
//  Return the first number in the array greater than 50 using find or loop.
//  Input 1: [10, 25, 60, 40]
//  Output 1: 60
//  Input 2: [45, 52, 19]
//  Output 2: 52



// let ele = [10, 25, 60, 40];
// let number = ele.find(num => num > 50);
// console.log(number);


// let numbers = [45, 52, 19];
// let element = numbers.find(num => num > 50);
// console.log(element);




// 6. Double the Elements
//  Using `map()`, return a new array where every number is multiplied by 2.
//  Input 1: [1, 2, 3]
//  Output 1: [2, 4, 6]
//  Input 2: [5, 10]
//  Output 2: [10, 20]


// let input = [1, 2, 3];
// let output = input.map(num => num * 2);
// console.log(output);


// let num = [5,10];
// let ele = num.map(num => num*2);
// console.log(ele);




// 7. Filter Out Even Numbers
//  Return a new array with only the odd numbers using `filter()`.
//  Input 1: [1, 2, 3, 4, 5]
//  Output 1: [1, 3, 5]
//  Input 2: [10, 15, 20, 25]
//  Output 2: [15, 25]


// let input = [1, 2, 3, 4, 5];
// let output = input.filter(num => num % 2 === 1);
// console.log(output);


// let ele = [10, 15, 20, 25];
// let val = ele.filter(num => num % 2 === 1);
// console.log(val);






// . Total Character Count in Strings
//  Return the total number of characters in an array of strings using `reduce()`.
//  Input 1: ['hi', 'world']
//  Output 1: 7
//  Input 2: ['a', 'ab', 'abc']
//  Output 2: 6


// let input = ['hi', 'world'];
// let output = input.reduce((acc,curr) => acc + curr.length,0);
// console.log(output);

// let char = ['a', 'ab', 'abc'];
// let val = char.reduce((acc,curr) => acc + curr.length, 0);
// console.log(val);






// 18. Flatten One-Level Nested Array
//  Flatten a single-level nested array (no recursion).
//  Input 1: [1, [2, 3], 4]
//  Output 1: [1, 2, 3, 4]
//  Input 2: ['a', ['b', 'c']]
//  Output 2: ['a', 'b', 'c']


// let val = [1, [2, 3], 4];
// let number = val.flat();
// console.log(number);


// let value = ['a', ['b', 'c']];
// let char = value.flat();
// console.log(char);




// 12. Check Divisibility by 5
//  Use `some()` to check if at least one number in the array is divisible by 5.
//  Input 1: [3, 6, 10, 14]
//  Output 1: true
//  Input 2: [2, 4, 6]
//  Output 2: false


// let val = [3, 6, 10, 14];
// let num = val.some(num => num % 5 === 0);
// console.log(num);


// let number = [2, 4, 6];
// let value = number.some(num => num % 5 === 0);
// console.log(value);






// 1. Count Even and Odd Numbers
//  Write a function that takes an array of numbers and returns how many are even and how many are odd.
//  Input 1: [2, 3, 4, 5]
//  Output 1: { even: 2, odd: 2 }
//  Input 2: [11, 14, 16, 17, 19]
//  Output 2: { even: 2, odd: 3 }




let arr = [2, 3, 4, 5];
let obj = {};
let even = 0;
let odd = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    even++;
  } else {
    odd++;
  }
}
obj.even = even;
obj.odd = odd;
console.log(obj);
