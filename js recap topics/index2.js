//  ........................TASK2..................//



// Part 1: Find the culprits and nail them — debugging javascript

	
// FIND THE CULPRIT

// 1.fix.html

// <!DOCTYPE html>
// <html>
// <body>
//  <script>
//  alert( “I’m JavaScript!’);
//  </script>
//  Whats the error in this ?
// </body>
// </html>

// ANS:

// <!DOCTYPE html>
// <html>
//     <head>
//         <script>
//             alert( "I’m JavaScript!");
//        </script>
//     </head>
// <body>

//  Whats the error in this ?
// </body>
// </html>

// 2.
// fix.html

// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// scripts.js

// alert(“I’m invoked!”);

// ANS:

// fixed.html
// <!DOCTYPE html>
// <html>
//     <head>
//         <script src="script.js"></script>
//     </head>
// <body>
 
// </body>
// </html>

// script.js
// alert(“I’m invoked!”);

// 3.Explain the below how it works

// explain.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// alert("I'm JavaScript!");
// alert('Hello') // this line is not having semicolon
// alert(`World`)
// alert(3 + 2+ 1); // this is multiple line code and its working

// ANS:

// 1. Multiple alert works as alert functions are queued in callback queue and get completed one by one.

// 2. missing semi-colon is just gives warning that function statement is not ended. It allows to run with and even without semi-colon.

// 3. since statements inside the alert are numerical opertions and it performed those operations before alerting.


// 4.Fix the below to alert Guvi geek

// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// let admin=9, fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// admin = fname+lname;
// alert( admin ); // "Guvi geek"

// ANS:

// since expected output is with space between guvi & geek. we  have to add the space to the admin in script.

// script.js

// let admin=9, fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// admin = fname+" "+lname;
// alert( admin ); // "Guvi geek"

// 5.Fix the below to alert hello Guvi geek

// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// let fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// let name = fname+lname;
// alert( 'hello ${name}' );

// ANS:
// script.js

// let fname=10.5; 
// fname = "Guvi";
// let lname = "geek"
// let name = fname+" "+lname;
// alert( `hello ${name}` );

// 6.Fix the below to alert sum of two numbers

// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// let a = prompt("First number?");
// let b = prompt("Second number?");
// alert(a + b);

// ANS:

// since they are in string  we need to convert them into numbers.
// we use parseInt() , Number() (or) add '+' in front of the variable storing the entered values.

// let a = prompt("First number?");
// let b = prompt("Second number?");
// alert(parseInt(a) + Number(b));


// 7.Fix the below to alert sum of two numbers

// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// let a = prompt("First number?");
// let b = prompt("Second number?");
// alert(a + b);

// ANS:

// let a = prompt("First number?");
// let b = prompt("Second number?");
// alert(parseInt(a) + Number(b));


// 8.If you run the below scritpt you will get “Code is Blasted”
// Explain Why the Code is blasted and how to diffuse it and get “Diffused”.

// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// var a = "2" > "12";
// //Don't touch below this
// if (a) {
//   console.log("Code is Blasted")
// }
// else
// {
//   console.log("Diffused") 
// }

// ANS:

// since string of 2 is less than the string of one , the code is blasted as the condition was false.
// To diffuse it , we have to make the condition true.

// var a = "2" > "12";
// //Don't touch below this
// if (a) {
//   console.log("Code is Blasted")
// }
// else
// {
//   console.log("Diffused") 
// }


// 9.How to get the success in console.

// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// let a = prompt("Enter a number?");
// //Don't modify any code below this
// if (a) {
//  console.log( 'OMG it works for any number inc 0' );
// }
// else
// {
//  console.log( "Success" );
// }

// ANS:

// If an empty input is passed, the variable that store data would become false and hence we get success.

// 10.How to get the correct score in console.

// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// let value = prompt('How many runs you scored in this ball');
// if (value === 4) {
//       console.log("You hit a Four");
// } else if (value === 6) {
//       console.log("You hit a Six");
// } else {
//       console.log("I couldn't figure out");
// }

// ANS:

// To get the correct score in console , we need to convert the string that stored in variable "value" to number.

// let value = prompt('How many runs you scored in this ball');
// if (+value === 4) {
//       console.log("You hit a Four");
// } else if (+value === 6) {
//       console.log("You hit a Six");
// } else {
//       console.log("I couldn't figure out");
// }

// 11.Fix the code to welcome the Employee

// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// let login = 'Employee';
// let message = (login == 'Employee') ? :
//   (login == 'Director') ? 'Greetings' :
//   (login == '') ? 'No login' :
//   '';
// console.log(message);

// ANS:

// let login = 'Employee';
// let message = (login == 'Employee') ? 'Greetings' : '';
// console.log(message);


// 12.Fix the code to welcome the boss

// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// // You cant change the value of the msg
// let message;
// if (null || 2 || undefined )
// {
//  let message = "welcome boss";
// }
// else
// {
//  let message = "Go away";
// }
//   console.log(message);

// ANS:

// let message;
// if (null || 2 || undefined )
// {
//   message = "welcome boss";
// }
// else
// {
//   message = "Go away";
// }
//   console.log(message);

// 13.Fix the code to welcome the boss

// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// let message;
// let lock = 2;
// //Dont change any code below this 
// if (null || lock || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
//   console.log(message);
// ANS:
// let message;
// let lock;
// //Dont change any code below this 
// if (null || lock || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
//   console.log(message);

// 14.Fix the code to welcome the boss

// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// let message;
// let lock = 2;
// //Dont change any code below this
// if (lock && " " || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
// console.log(message);


// ANS:

// let message=2;
// let lock;
// //Dont change any code below this
// if (lock && " " || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
// console.log(message);

// 15.Change the code to print
// 3
// 2
// 1

// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// //You can change only 2 characters
// let i = 3;
// while (i) {
//   console.log( --i );
// }

// ANS:

// let i = 3;
// while (i) {
//   console.log( i-- );
// };

// 16.Change the code to print 1 to 10 in 4 lines

// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// let num = 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// ANS:

// let num = 1
// console.log(num,num+1,num+2)
// num += 1
// num += 1
// num += 1
// console.log(num,num+1,num+2)
// num += 1
// num += 1
// num += 1
// console.log(num,num+1,num+2)
// num += 1
// num += 1
// num += 1
// console.log(num)

// 17.Change the code to print even numbers

// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// //You are allowed to modify only one character 
// for (let num = 2; num <= 20; num += 1) {
//   console.log(num)
// }
// ANS:

// for (let num = 2; num <= 20; num += 2) {
//     console.log(num)
//   }

// 18.Change the code to print all the gifts

// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// let gifts = ["teddy bear", "drone", "doll"];
// for (let i = 0; i < 3; i++) {
//   console.log('Wrapped ${'gifts[i]'} and added a bow!');
// }

// ANS:

// let gifts = ["teddy bear", "drone", "doll"];
// for (let i = 0; i < 3; i++) {
//   console.log(`Wrapped ${gifts[i]} and added a bow!`);
// }

// 19.Fix the code to disarm the bomb.

// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// let countdown = 100;
// while (countdown > 0) {
//   countdown--;
//   if(countdown == 0)
//   {
//    console.log("bomb triggered");
//   }
// }

// ANS:

// let countdown = 0;
// while (countdown > 0) {
//   countdown--;
//   if(countdown == 0)
//   {
//    console.log("bomb triggered");
//   }
// }


// 20.Whats the msg printed and why?

// var lemein = “0”;
// var lemeout = 0;
// var msg = “”;
// if (lemein) {
//  msg += “hi”;
//  }
// if (lemeout) {
//  msg += ‘Hello’;
// }
// console.log(msg);

// ANS:

// the msg printed is "hi".
// since zero is within the string its considered as true and assigned "hi" to msg and got printed in console.

// 21.Whats the msg printed and why? Guess you answer before running it.

// var lemein = “0”;
// var lemeout = 0;
// var msg = “”;
// if (lemein) {
//  msg += “hi”;
//  }
// if (lemeout) {
//  msg += ‘Hello’;
// }
// console.log(msg);


// ANS:

// the msg printed is "hi".
// since zero is within the string its considered as true and assigned "hi" to msg and got printed in consol