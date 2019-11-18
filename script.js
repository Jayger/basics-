/***************************** 
    Variables and data types


var firstName = 'Jay';
console.log(firstName);

var lastName = 'Mich'
var age = 29;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark ='John and MArk';
var if = 23;
*/


/******************** 
 * Variable mutation and type coercion


var firstName = 'Jay';
var age = 29;

// Type Coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher'
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job +'. Is he married? ' + isMarried);

 //Variable mutation
 age = 'twenty eight';
 job = 'driver';

 alert(firstName + ' is a ' + age + ' year old ' + job +'. Is he married? ' + isMarried);

 var lastName = prompt('What is his last name?');
 console.log(firstName + ' ' + lastName);
 */


 /**********************
  * Basic Operators
  
var year, yearJohn, yearMark
now = 2019
ageJohn = 28;
ageMark = 33;

// Math Operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;


console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical Operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder)
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/


/********************
 * Operator precendence 


 var now = 2019;
 var yearJohn = 1990;
 var fullAge = 18;

 // Multiple Operators
 var isFullAge = now - yearJohn >= fullAge; // true 
 console.log(isFullAge);

// Grouping
 var ageJohn = now - yearJohn;
 var ageMark = 35;
 var average = (ageJohn + ageMark) / 2;
 console.log(average);

 // Multiple assignments
 var x, y;
 x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
 console.log(x, y);

 // More operators
 x *= 2;
 console.log(x);
 x += 10; 
 console.log(x);
 x++;
 console.log(x);
 x--;
 console.log(x);
 */

 /********************
  * Code Challenge
  

 var heightMark, heightJohn, massMark, massJohn, bmiMark, bmiJohn, comparison;
 
 heightMark = 1.69; // meters
 massMark = 78; // kg

 heightJohn = 1.72; // meters
 massJohn = 75; // kg

 bmiMark = massMark / (heightMark * heightMark);
 bmiJohn = massJohn / (heightJohn * heightJohn);
 console.log(bmiJohn, bmiMark);

 comparison = bmiMark >= bmiJohn;

 console.log("Is Mark's BMI higher than John's?" + ' ' + comparison);
*/


/**********************
 * If / else Statements
 

 var firstName = 'John';
 var civilStatus = 'single';
 
 if(civilStatus === 'married') {
   console.log(firstName + ' is Married!');
 } else {
   console.log(firstName + ' is Single!');
 }

 var isMarried = true;
 if(isMarried) {
  console.log(firstName + ' is Married!');
} else {
  console.log(firstName + ' is Single!');
}

var heightMark, heightJohn, massMark, massJohn, bmiMark, bmiJohn, higherBmi;
 
 heightMark = 1.69; // meters
 massMark = 78; // kg

 heightJohn = 1.72; // meters
 massJohn = 75; // kg

 bmiMark = massMark / (heightMark * heightMark);
 bmiJohn = massJohn / (heightJohn * heightJohn);
 console.log(bmiJohn, bmiMark);

 if(bmiMark > bmiJohn) {
   console.log("Mark's BMI higher than John's");
 } else {
   console.log("John's BMI higher than Mark's");
 }

//  higherBmi = bmiMark >= bmiJohn;

//  console.log("Is Mark's BMI higher than John's?" + ' ' + higherBmi);

*/

/*********************
 * Boolean Logic
 */

 var firstName = 'John';
 var age = 20;

 if(age < 13) {
   console.log(firstName + ' is a boy.')
 } else if (age >= 13 && age < 20) {
   console.log(firstName + ' is a teenager.')
 } else if (age > 20 && age < 30) {
   console.log(firstName + ' is a young man.')
 } else {
   console.log(firstName + ' is a man.')
 }