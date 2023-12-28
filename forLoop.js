/* Simple Array Sum */
/*Given an array of integers, find the sum of its elements.
Example:  if the array ar = [1,2,3], 1+2+3 = 6 
then return 6 
Complete the simpleArraySum function
It must return the sum of array elements as an integer
ar : an array of integers
Input Format:
Fist line contains an integer n denoting the size of the array.
Second line contains n space-separated integers representing the
array's elements.
Constraints:
0 < n, ar[i] <= 1000
Output Format:
Print the sum of the array's elements as a single integer

Solution:
First method:  for loop
*/
function simpleArraySum(ar) {
   
    let sum  = 0;
    for (let i=0; i < ar.length; i++) { 
        let currentElement = ar[i];
         sum = currentElement + sum;
    }
    return sum;
}

console.log(simpleArraySum([1,2,3,4,10,11]));