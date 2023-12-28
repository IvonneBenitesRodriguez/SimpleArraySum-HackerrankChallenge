/* The forEach method can be used to iterate over the array and
accumulate the sum.
This exercise is written in JavaScript */

 const numbers = [1,2,3,4,5,6];
 let sum = 0;
 numbers.forEach(number => {
    sum = number + sum;
 });

 console.log(sum);