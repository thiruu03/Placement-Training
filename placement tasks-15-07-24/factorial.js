// 6.Write a function that takes a number as input and returns its factorial.

function factorial(n){
    if(n==1 || n==0){
        return 1;
    }
        return n*factorial(n-1);
    }
    console.log(factorial(5));