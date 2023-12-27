/* method reduce is the most efficient 
specially for large number of array of integers
For developers who are experienced:
The method reduce is considered efficient in the sum of an array
factors: as readibility, understanding, and performance 
specially in Functional Programming this method is considered
as an elegant and preferred solution.
*/
/* method reduce has 2 elements inside accumulator and currentValue*/
/* the 0 means the initial value --> starting point for the accumulator */

function simpleArraySum(ar) {
    return ar.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(simpleArraySum([1,2,3,4,5,6]));