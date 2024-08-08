// 2.Write a function that checks if a given string is a palindrome (reads the same forwards and backwards).

function palindrome(str){
    let str2 = str.split("").reverse().join("");
     if(str == str2){
         console.log("Palindrome")
     }else{
         console.log("Not a palindrome");
     }
 }
 console.log(palindrome("madam"));
 