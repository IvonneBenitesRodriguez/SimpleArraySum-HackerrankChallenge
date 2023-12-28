/* For ... of Loop can be used to iterate through the array items and calculate the 
sum of the array of numbers.
*/

const arr = [23, 34, 77, 99, 324];
let sum  = 0;
for (const el of arr) {
    sum = el + sum;
}
console.log(sum);
