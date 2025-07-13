// 1. Reverse an array
// Reverse the elements of an array manually (without using .reverse()).
// Input 1: [1, 2, 3]
// Output 1: [3, 2, 1]
// Input 2: [10, 20, 30]
// Output 2: [30, 20, 10]



let arr = (array) => {
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;

    start++;
    end--;
  }

  return array;
};
console.log(arr([1, 2, 3]));
console.log(arr([10, 20, 30]));








// 3. Remove duplicates from array
// Return a new array with all duplicates removed (no Set).
// Input 1: [1, 2, 2, 3]
// Output 1: [1, 2, 3]
// Input 2: [5, 5, 5, 1]
// Output 2: [5, 1]


let val = [1, 2, 2, 3];
let num = val.filter((item,index) => val.indexOf(item) === index);
console.log(num);



let number = [5, 5, 5, 1];
let value = number.filter((item,index) => number.indexOf(item) === index);
console.log(value);





// 4. Check if two arrays are equal
// Compare if two arrays have same elements in same order.
// Input 1: [1, 2, 3], [1, 2, 3]
// Output 1: true
// Input 2: [1, 2], [2, 1]
// Output 2: false




function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  
  return true;
}

console.log(arraysEqual([1, 2, 3], [1, 2, 3]));


function value(arry1, arry2){
    if (arry1.length !== arry2.length) return false;

    for (let i = 0; i < arry1.length; i++){
        if (arry1[i] !== arry2[i]) return false;
    }
    return true;
}
console.log(value([1,2],[2,1]));







// 5. Rotate array k times to the right
// Rotate array elements k times to the right.
// Input 1: [1, 2, 3, 4], k = 2
// Output 1: [3, 4, 1, 2]
// Input 2: [10, 20, 30], k = 1
// Output 2: [30, 10, 20]



function val(arr, k) {
  k = k % arr.length;
  let num = arr.slice(-k).concat(arr.slice(0, -k));
  return num;
}
console.log(val([1, 2, 3, 4], 2));



function variable(arr, k){
    k  = k % arr.length;
    let  num = arr.slice(-k).concat(arr.slice(0,-k));
    return num;
}
console.log(variable([10, 20, 30],1))






// 6. Count vowels in a string
// Count number of vowels (a, e, i, o, u) in a given string.
// Input 1: "hello"
// Output 1: 2
// Input 2: "JAVASCRIPT"
// Output 2: 3



let string = "hello";
let vowels = ['a', 'e', 'i', 'o', 'u'];
let count = 0;
for (let i = 0; i < string.length; i++){
    if(vowels.includes(string[i].toLocaleLowerCase())){
        count ++;
    }
}
console.log(count);




let char = "JAVASCRIPT";
let vowels1 = ['a', 'e', 'i', 'o', 'u'];
let count1 = 0;
for (let i = 0; i < char.length; i++){
    if (vowels1.includes(char[i].toLocaleLowerCase())){
        count1 ++;
    }
}
console.log(count1);













// 11. Count frequency of array elements
// Return an object with count of each element in array.
// Input 1: [1, 2, 2, 3]
// Output 1: {1:1, 2:2, 3:1}
// Input 2: [4, 4, 4]
// Output 2: {4:3}


let arr = [1, 2, 2, 3];
let val = {};
for (let i = 0; i < arr.length; i++){
    if (val[arr[i]]){val[arr[i]]++;}
    else{val[arr[i]]=1}
}
console.log(val);




let arr2 = [4, 4, 4];
let val2 = {};
for (let i = 0; i < arr2.length; i++){
    if (val2[arr2[i]]){val2[arr2[i]]++;}
    else{val2[arr2[i]]=1}
}
console.log(val2);





// 13. Merge two objects
// Combine two objects into one.
// Input 1: {a:1}, {b:2}
// Output 1: {a:1, b:2}
// Input 2: {x:10}, {x:20, y:30}
// Output 2: {x:20, y:30}



let val = {a:1};
let val2 = {b:2};
let output = {...val, ...val2};
console.log(output);



let char = {x:10}
let char2 = {x:20, y:30};
let output1 = {...char, ...char2}
console.log(output1);





// 14. Find key with highest value in object
// Return the key which has the highest numeric value.
// Input 1: {a: 1, b: 5, c: 3}
// Output 1: "b"
// Input 2: {x: 100, y: 99}
// Output 2: "x"



let obj = {a: 1, b: 5, c: 3};
let max = 0;
let key = '';
for (let k in obj){
    if(obj [k] > max){
        max = obj[k];
        key=k;
    }

}
console.log(key);



let obj1 = {x: 100, y: 99};
let max1 = 0;
let key1 = '';
for (let k in obj1){
    if(obj1 [k] > max1){
        max1 = obj1[k];
        key1=k;
    }

}
console.log(key1);




