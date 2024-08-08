// function factorial(n){
// if(n==1 || n==0){
//     return 1;
// }
//     return n*factorial(n-1);
// }
// console.log(factorial(5));

// function max(arr){
//     //spread operator//
//     return Math.max(...arr);
// }
// console.log(max([1,4,3,5,6,4]));

// // function removeduplicates(array){
// //     return[...new Set(array)]

// // }

// // console.log(removeduplicates([1,1,2,3,4,4,5]));

// var products = ['rod', 'hammer', 'pins', 'steel',];
// document.getElementById('demo1').innerHTML = products;
// products.shift();
// // document.getElementById('demo1').innerHTML = products;
// products.unshift('Wood');
// document.getElementById('demo2').innerHTML = products;
// var i = '3';
// var r = 3;
// //loose equality
// console.log(i == r);
// //tight equality
// console.log(i === 3);



// // switch (p1,p2,p3) {

// //         case p1>p2 && p1>p3 : 
// //         console.log(p1);        
// //         break;

// //         case p2>p3 && p3>p1: 
// //         console.log(p2);        
// //         break;

// //         default:
// //         console.log(p3);
// //         break;
// // }
//  function greatest(p1,p2,p3){
// if(p1 > p2 && p1 > p3){
//     return p1;
// }else if(p2 > p3 && p2 > p1){
//   return p2;
// }else{
//     return p3;
// }
// }
// console.log(greatest(6,9,2)+" is greatest");

// function oddeven(a){
// if(a % 2 == 0 ){
//     return 'even'
// }
//     return 'odd'
// }

// console.log(oddeven(8));

// function age(age){
//     if(age >= 0 && age <= 12){
//         return "child";
//     }else if(age >=13 && age <=19 ){
//         return "Teen";
//     }else if(age >=20 && age <= 59){
//         return "Adult";
//     }else{
//         return "Senior citizen"
//     }
// }

// console.log(age(13));


// // 1.Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".


//     for( i = 1; i <= 100; i++){
//         if(i % 3 == 0 && i % 5 == 0){
//             console.log("FIZZBUZZ");
//         }else if(i % 3 == 0){
//             console.log("FIZZ");
//         }else if(i % 3 == 0){
//             console.log("BUZZ");
//         }
//         else{
//             console.log(i);
//         }
//     }

//     // 2.Write a function that checks if a given string is a palindrome (reads the same forwards and backwards).
    
//     function palindrome(str){
//        let str2 = str.split("").reverse().join("");
//         if(str == str2){
//             console.log("Palindrome")
//         }else{
//             console.log("Not a palindrome");
//         }
//     }
//     console.log(palindrome("madam"));

//     // 3.Write a function that takes an array of numbers and returns the largest number.

//     function largest(arr){
//         let large = Math.max(...arr);
//         return large;
//     }
//     console.log(largest([2,3,7,5,9,1,10,4,11,9]));

//     // 6.Write a function that takes a number as input and returns its factorial.

//     function factorial(n){
//         if(n==1 || n==0){
//             return 1;
//         }
//             return n*factorial(n-1);
//         }
//         console.log(factorial(5));

//     // 7.Write a function that converts a temperature from Celsius to Fahrenheit.
 
//         function temp(c){
//             let f = c + 273.15;
//             return f;
//         }
//         console.log(temp(27));

//     console.log(~(13));
//     console.log((12)<<2);
//     console.log(~(-15));
//     function showconfirm(){
//         let query = prompt("Enter name");
//         let answer = alert("Hello" +" "+ query);
//         return answer;
//         }

//   const person1 =  {
//     fname : "thiru",
//     lname : "Kumaran",
//     fullname :function(){
//         return this.fname + " " + this.lname;
//     }
//   }    
  
//   const person2 = {
//     fname : "Uday",
//     lname : "Ram",
//     fullname :function(){
//       return this.fname + " " + this.lname;
//   }
//   }

//   console.log("call() :",person1.fullname.call(person2));
//   console.log("apply() :",person1.fullname.apply(person2));

//   const bindname = person1.fullname.bind(person2);
//   console.log("Bind():",bindname());

  //creating a class and a constructor 

  // class car {
  //   constructor(name,model){
  //     this.name = name;
  //     this.model = model;
  //   }
  //   getData(){
  //     console.log(this.name + " " + this.model);
  //   }  
  // }

  // const data = new car("BMW", "2019");
  // console.log(data.getData())




  // console.log(person.fullname());
  // const add = (a,b) => a+b;
  // console.log(add(5,7));


  // // arrow function in array
 
  // var max = (array) => Math.max(...array);
  // console.log(max([1,2,3,4,5]));



  // document.getElementById('demo3').addEventListener('click', function(){console.log("Helooo"),this});



//Query Selector
function color(){
  document.getElementById("demo").style.color="blue";
}
document.getElementById("demo2").style.color="blue";

function alerting(){
  document.getElementById("demo").innerHTML = Date();
}
var count = 0;
var n = 7;
var k = 1;
var sum = 0;

// sum of first n odd numbers
// for (let i = 0; i < 6; i++) {
//     sum+=k;
//     k+=2
  
// }
// console.log(sum);

//key object

// const sts = {Name:' Thiru', Dept:' CSE'};
// for(const key in sts){
//   console.log(key+ " :"+ sts[key]);
// }

// const array = [1,2,3,4,5,6];
// for(const p of array){
//   console.log(p);
//   document.write(p);
// }

// let sum1 = 0;
// for(let j = 1; j<10; j++){
//   sum1+=j;
//   if(sum1>=20){
//     break;
//   }
//   console.log(sum1);
// }
// console.log(window.screen.width);
// console.log(window.screen.height);
// console.log(window.innerHeight+" px");
// console.log(window.innerWidth+" px");
// // console.log(location.href);
// // location.href = "https://www.youtube.com/";


// function alerting(){
//   window.open();
// }
// console.log(screen.colorDepth);

// console.log("Hi");
// console.error("typerror");
// console.warn("Warninggg");
// console.info("You have missed something")

 function alerting(){
  var name = document.getElementById('name');
  var emails = document.getElementById('email');
  var password = document.getElementById('pass');
  var ckbox = document.getElementById('ck');

  
  
}