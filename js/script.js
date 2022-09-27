'use strict';

// 1
// const arr = ['a', 'b', 'c', 'd'] ;
// const firstNewArr = arr.slice(0,2);
// const secondNewArr = arr.slice(2);
// console.log(firstNewArr.join('+'));
// console.log(secondNewArr.join('+'));

// 2
// const arr = [2, 5, 3, 9];
// const firstValue = arr.slice(0,2);
// const secondValue = arr.slice(2);
// const firstResult = firstValue.reduce(function (accum, item){
//   return accum * item;
// });
// const secondResult = secondValue.reduce(function (accum, item){
//   return accum * item;
// });
// const result = firstResult + secondResult;
// console.log(result);

// 3
// const arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
// console.log(arr[1][0]);

// 4
// const arr = {
//   js: ['jQuery', 'Angular'],
// php: 'hello',
// css: 'world'
// };
// console.log(arr.js[0]);

// 5
// const arr = [];
// arr.push('x', 'xx', 'xxx');
// console.log(arr);

// 6
// const arr = [];
// arr.push(1, 22, 333);
// console.log(arr);

// 7
// const arrayFill = (item, length) => {
// return Array(length).fill(item)
// }
// console.log(arrayFill('x', 5));

// 8
// const arr = [6, 8, 5, 3, 9, 2];
// let sum = 0;
// const newArray = [];
// for (let i = 0; i < arr.length; i += 1) {
//   sum += arr[i];
//   newArray.push(sum);
//
//   if (sum >= 10) break;
// }
//
// console.log(newArray.length);


// 9
// const array = [6, 8, 5, 3, 9, 2];
// const l = array.length;
// const newArray = [];
//
// for (let i = 0; i < array.length; i += 1){
//   newArray.push(array.pop())
// }
//
// console.log(newArray);


// // 10
// const arr =  [[1, 2, 3], [4, 5], [6]];
// const newArr = arr.join(',');
// const updateNewArr = newArr.split(',');
// const result = updateNewArr.reduce(function (accum, item){
//   return +accum + +item
// })
// console.log(result);


// 11
// const arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// const newArr = arr.join(',');
// const updateNewArr = newArr.split(',');
// const result = updateNewArr.reduce(function (accum, item){
//   return +accum + +item;
// });
// console.log(result);
