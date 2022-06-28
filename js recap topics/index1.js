          //.................... Task 1: Simple Programs todo for variables................................//

// 1.Declare four variables without assigning values and print them in console

var j;
var a;
var g;
console.log(j);
console.log(a);
console.log(g);

// 2.How to get value of the variable myvar as output

var myvar = 1;
console.log(myvar);

//    3. Declare variables to store your first name, last name, marital status, country and age in multiple lines

var firstname = 'aj';
var lastname = 'siva';
var maritalstatus = "unmarried";
var country = "india";
var age = "26";

console.log(firstname, lastname, maritalstatus, country, age);

//    4. Declare variables to store your first name, last name, marital status, country and age in a single line

// var firstname = 'aj', lastname = "siva", maritalstatus = "unmarried", country = "india", age = "26"; console.log(firstname, lastname, maritalstatus, country, age);


//5. Declare variables and assign string, boolean, undefined and null data types

//strings example
const name = 'ram';
const name1 = "hari";
const result = `The names are ${name} and ${name1}`;
console.log(result);
//boolean
const dataChecked = true;
const valueCounted = false;
console.log(dataChecked, valueCounted);

// undefined
let names;
console.log(names);

//null
const number = null;
console.log(number);


// 6. Convert the string to integer

// 1. Using parseInt()
var a = "10";
var b = parseInt(a);
console.log(b);

// 2. Using Number()
Number("10");          // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33

// 3. Using Unary Operator (+)
const x = 25;
console.log(+x); // expected output: 25

// 7. Write 6 statement which provide truthy & falsey values.


// Truthy:
// When a value is truthy in Javascript, it does not means that the value is equal to true but it means that the value coerces to true when evaluated in a boolean context.

// function truthyOrFalsy(value){
//     if(value){
//       console.log("Truthy Value");
//     } else {
//       console.log("Falsy Value");
//     }
//    } 

// The above function evaluates the passed value in a Boolean Context(if condition) and checks if whether the passed value is truthy or falsy.


// Falsy Values:
// Most of the values in javascript are Truthy, so it is better to list the Falsy value where we have only a limited number of cases. There are a total of 8 falsy values in Javascript:

// undefined
// NaN
// null
// false
// "" (Empty String)
// 0 (0 is an alias for +0)
// -0
// // 0n (BigInt)


// truthyOrFalsy(undefined); // Falsy Value 
// truthyOrFalsy(NaN);       // Falsy Value
// truthyOrFalsy(null)       // Falsy Value
// truthyOrFalsy("");        // Falsy Value
// truthyOrFalsy(false)      // Falsy Value
// truthyOrFalsy(0);         // Falsy Value
// truthyOrFalsy(-0);        // Falsy Value
// truthyOrFalsy(0n);        // Falsy Value



  //  ....................Task 2: Simple Programs todo for Operators...................//


                        // Square of a number
let z = [2, 4, 6, 8, 10];

const square = function (y) {
    return Math.pow(z, 2);
};


       // Swapping 2 numbers
let a = 5, b = 6;
[a, b] = [b, a];

            // Addition of 3 numbers
const num1 = 1;
const num2 = 2;

const concat = '' + num1 + num2;

console.log(concat); // 12
console.log(typeof concat);

            // Celsius to Fahrenheit conversion
function celsiusToFahrenheit(clesius) {
    var fahrenheit = clesius * 9 / 5 + 32;
    return fahrenheit;
}
console.log(celsiusToFahrenheit(4))

               // Meter to miles
function getMiles(meters) {
    return meters * 0.000621371192;
}
function getMeters(miles) {
    return miles * 1609.344;
}
console.log(getMiles(meters), getMeters(miles))
// Pounds to kg
var kilograms = pounds * 0.453592;
console.log(kilograms);


               // Calculate Batting Average
//             Total Avg = Total Runs scored / (Total number of innings batted-Number of Not Out Innings)

// Ex:
// 1) A player plays 7 matches in a series. Bats all 7 matches. Scores 10 runs each.

// His Avg = 70/(7-0) = 10

// 2) A player plays 7 matches in a series.Bats in 5 matches only. Scores 10 runs each

// His Avg = 50/(5-0) = 10

// 3) A player plays 7 matches. Bats in 5 matches. Scores 10 runs each and remains not out in 2 matches

// His avg = 50/(5-2) = 16.66


              // Power of any number x ^ y.
var b, e, r;

// b = base
// e = exponent
// r = result

b = 8;
e = 4;

// finding power of base value by equiping exponent value
r = Math.pow(b, e);

console.log("Result:: " + b + "^" + e + " = " + r)

               // Calculate Simple Interest
function simpleInterest(amount) {
    var interest = amount * (6 / 100);
    return interest;
}
console.log(simpleInterest(100));


             // Calculate area of an equilateral triangle
var side1 = 5;
var side2 = 6;
var side3 = 7;
var s = (side1 + side2 + side3) / 2;
var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
console.log(area);


          // Area Of Isosceles Triangle
const baseValue = prompt('Enter the base of a triangle: ');
const heightValue = prompt('Enter the height of a triangle: ');

// calculate the area
const areaValue = (baseValue * heightValue) / 2;

console.log(
    `The area of the triangle is ${areaValue}`
);


             // Volume Of Sphere
var sphereVol = function (radius) {
    var c = (4 / 3) * Math.PI * Math.pow(radius, 3);
    return c;
}
console.log(sphereVol(radius));
// Volume Of Prism
var volume = 0.5 * b * a * h;
// Find area of a triangle.
var a1 = 10
var a2 = 2
console.log((a1 * a2) / 2)
// Give the Actual cost and Sold cost, Calculate Discount Of Product
var bill = parseInt(prompt("Enter bill amount:"));
var discount = parseInt(prompt("Enter discount percentage:"));
var afterDiscount = bill - (bill * discount / 100);
console.log("After discount your bill is: " + afterDiscount);


           // Given their radius of a circle and find its diameter, circumference and area.
// var r, d, c, a;

r = radius
d = diameter
c = circumference
a = area

// Calculation of diameter, circumference, and area */

r = 10;
d = 2 * 10;
c = 2 * 3.14 * 10;
a = 3.14 * (10 * 10);

document.write("Diameter = " + d + " units<br />");
document.write("Circumference = " + c + " units<br />");
document.write("Area = " + a + " sq. units");

                 // Given two numbers and perform all arithmetic operations.
var p, q;
var sum, sub, mul, div, mod;
p = 8;
q = 6;

               /* Perform all arithmetic operations */
sum = p + q;
sub = p - q;
mul = p * q;
div = p / q;
mod = p % q;

/* Print result of all arithmetic operations */
document.write("SUM " + p + " + " + q + " = " + sum + "<br />");
document.write("DIFFERENCE " + p + " - " + q + " = " + sub + "<br />");
document.write("PRODUCT " + p + " * " + q + " = " + mul + "<br />");
document.write("QUOTIENT " + p + " / " + q + " = " + div + "<br />");
document.write("MODULUS " + p + " % " + q + " = " + mod);

                // Display the asterisk pattern 
let numberSquare = 5;
let stringSquare = '';
for (let i = 1; i <= numberSquare; i++) {
    for (let j = 1; j <= numberSquare; j++) {
        stringSquare += '*';
    }
    stringSquare += '\n';
}
console.log(stringSquare);
// *****
// *****
// *****
// *****
// *****

                     // Calculate electricity bill?
units = 1000
bill = 0
if (units <= 50) {
    bill = units * 1
}
else if (units <= 150) {
    bill = 50 * 1 + (units - 50) * 2
}
else if (units <= 250) {
    bill = 50 * 1 + 100 * 2 + (units - 150) * 3
}
else if (units > 250) {
    bill = 50 * 1 + 100 * 2 + 150 * 3 + (units - 250) * 4
}

if (bill > 150) {
    bill = bill + bill * 0.2
}
console.log(bill)
           
                                  // Program To Calculate CGPA
function gradeCalc(grade, unit) {
    if (grade === "A") {
      return 5 * unit;
    } else if (grade === "B") {
      return 4 * unit;
    } else if (grade === "C") {
      return 3 * unit;
    } else if (grade === "D") {
      return 2 * unit;
    } else if (grade === "E") {
      return 1 * unit;
    } else if (grade === "F") {
      return 0 * unit;
    }
  }
   console.log(gradeCalc('A',10));
    console.log(gradeCalc('B',9));
     console.log(gradeCalc('C',7));
      console.log(gradeCalc('D',5));
       console.log(gradeCalc('E',4));
        console.log(gradeCalc('F',2));


//................... Task 3: Simple Programs todo for Condition , Looping and Arrays.......................//


// 1.Write a loop that makes seven calls to console.log to output the following triangle:
let n = 7;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "#";
  }
  string += "\n";
}
console.log(string);

// 2. Iterate through the string array and print it contents

// var strArray= ["<option>Jazz</option>",
// ,"<option>Blues</option>",
// ,"<option>New Age</option>",
// ,"<option>Classical</option>",
// ,"<option>Opera</option>"]

strArray.forEach((res)=>console.log(`${res}`));


// var myarray=[11,22,33,44,55]

// write a code to count the elements in the array . Don’t use length property


var myarray=[11,22,33,44,55]
let length = 0;
for (let i of myarray){
	length++;
}
console.log(length)

// Print the contents of the input variable

// var input = [
//     ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
//     ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
//     ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
//     ["000", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
//     ]
    
    function dataHandling(input){
    for (var i = 0; i < input.length; i++) {
    //Your code goes here
      for(var j=0; j<input[i].length;j++){
          
          console.log(input[i][j])
      }
    
    }
    }
    // 
      

// 9.What the output
myobject = {"1":"one","11":1,"name":"arun"}
// console.log(myobject.11); //Error
console.log(myobject.name); //arun 

// 10.Add a new key value pair to myobject
// key : ten
// value : ten
myobject["ten"]="ten";
console.log(myobject); 

// 11.Write out an object literal to represent the data below.
// Guvi, Geek, 6, IIT-M RP,Chennai.
let s={"name1":"Guvi","name2":"Geek","no":6,"location":"IIT-M","city":"Chennai"};
console.log(s);

// 12.How would you represent the following data using a combination of object literals and arrays? 
// Guvi, Geek, 6, IIT-M RP,Chennai.
// Amazon, Inc, 31, SP Infocity, Chennai.
// Google, Alphabet, 34 Amphitheater Parkway, MountainView.
// Tesla, Inc , 32, 333 Santana Row,San Jose.
let y=[{"name1":"Guvi","name2":"Geek","no":6,"location":"IIT-M","city":"Chennai"},
["name3","AmazonInc","no",31,"location","IIT-M RP","city","Chennai"],
{"name3":"Google","type":"Alphabet","no":34,"location":"Amphitheater Parkway","city":"MountainView"},
["name4","Tesla","no",32,"no1",333,"location","Santana Row","city","San Jose"]];
console.log(y);