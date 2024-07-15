// 3.Write a function that takes an array of numbers and returns the largest number.
function largest(arr){
    let large = Math.max(...arr);
    return large;
}
console.log(largest([2,3,7,5,9,1,10,4,11,9]));