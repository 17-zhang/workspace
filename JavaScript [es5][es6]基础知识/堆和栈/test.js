

var arr1 = [1,2,5,8];
var arr2 = arr1;
var str1 = arr1[2];

console.log(arr2);  // [1,2,5,8]
console.log(str1);  // 5

arr2[4] = 99;
str1 = 6;

console.log(arr1);  // [1,2,5,8,99]
console.log(arr1[2]); // 5