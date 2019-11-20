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
 */

 /**********************
  * The Ternary Operator and Switch Statement
  

  var firstName = 'John';
  var age = 17;

  // ternary operator
  age >= 18 ? console.log(firstName + ' drinks beer.') 
  : console.log(firstName + ' drinks juice.')

  var drink = age >= 18 ? 'beet' : 'juice'
  console.log(drink);

  // if(age >= 18) {
  //   var drink = 'beer'
  // } else {
  //   var drink = 'juice'
  // };

  // Switch Statement
  var job ='instructor';

  switch(job) {
      case 'teacher':
      case 'instructor':
        console.log(firstName + ' teaches kids how to code');
        break;
      case 'driver':
        console.log(firstName + ' drives an uver in Lisbon');
        break;
      case 'designer':
        console.log(firstName + ' designs beautiful wensties');
        break;
      default: 
        console.log(firstName + ' does something else');
  }

  switch(true){
    case age < 13:
        console.log(firstName + ' is a boy.')
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age > 20 && age < 30:
        console.log(firstName + ' is a young man.')
        break;
    default:
        console.log(firstName + ' is a man.')
  }
*/

/****************************
 * Truthy and Falsy and equality operators

 // falsy values: undefined, null, 0, '', NaN
 // truthy values: NOT falsy values

 var height;

 height = 23;

 if(height || height === 0) {
   console.log('Variable is defined');
 } else {
   console.log('Variable has NOT been defined');
 }

 // Equality operators

 if (height == '23') {
   console.log('The == operator does type coercion!');
 }

 */

 /***************************
  * Code Challenge 2

  var teamMikeAvg, teamJohnAvg; 

  teamMikeAvg = (89 + 120 + 103) / 3;
  teamJohnAvg = (116 + 94 + 123) / 3;
  teamMaryAvg = (97 + 134 + 105) / 3;
  console.log(teamJohnAvg, teamMikeAvg, teamMaryAvg);

  if(teamJohnAvg > teamMikeAvg && teamJohnAvg > teamMaryAvg) {
    console.log('John\'s team wins with ' + teamJohnAvg + ' points')
  } else if (teamMikeAvg > teamJohnAvg && teamMikeAvg > teamMaryAvg) {
    console.log('Mike\'s team wins with ' + teamMikeAvg + ' points')
  } else if ( teamMaryAvg > teamMikeAvg && teamMaryAvg > teamJohnAvg) {
    console.log('Mary\'s team wins with ' + teamMaryAvg + ' points')
  } else {
    console.log('There is a draw!')
  }






  // if(teamMikeAvg > teamJohnAvg) {
  //   console.log('Mike\'s team is the winner with an average score of ' + teamMikeAvg)
  // } else if (teamMikeAvg < teamJohnAvg) {
  //   console.log('John\'s team is the winner with an average score of ' + teamJohnAvg)
  // } else {
  //   console.log('Both John and Mike\'s team average score is a draw!')
  // }
*/

/*********************************
 * Functions
 

 function calculateAge(birthYear) {
   return 2019 - birthYear;
 }

 var ageJohn = calculateAge(1990);
 var ageMike = calculateAge(1948);
 var ageJane = calculateAge(1969);
 console.log(ageJohn, ageMike, ageJane);


 function yearsUntilRetirement(year, firstName) {
   var age = calculateAge(year);
   var retirement = 65 - age;
   if(retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years.');
   } else {
    console.log(firstName + ' is already retired.')
   }
   
 }

 yearsUntilRetirement(1990, 'John');
 */

 /*********************************
  * Function Statements and Expressions


  // Function declaration
  // function whatDoYouDo(job, firstName){}

  // Function expression

  var whatDoYouDo = function (job, firstName) {
    switch(job) {
      case 'teacher':
        return firstName + ' teaches kids how to code';
      case 'driver':
        return firstName + ' drives a cab in Lisbon';
      case 'designer':
        return firstName + ' designs beautiful websites';
      default:
        return firstName + ' does something else.';
    }
  }

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));

*/

/***********************************
 * Arrays
 


 // Initialize new array
 var names = ['John', 'Mark', 'Jane'];
 var years = new Array(1990, 1969, 1948);

 console.log(names[2]);
 console.log(names.length);

 // Mutate array data
 names[1] = 'Ben';
 names[names.length] = 'Mary';
 console.log(names);

 // Different data types
 var john = ['John', 'Smith', 1990, 'teacher', false];

 john.push('blue');
 john.unshift('Mr.');
 console.log(john)

 john.pop();
 john.pop();
 john.shift();
 console.log(john);

 console.log(john.indexOf(1990));

 var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/

/****************************
 * Code Challenge 3
 

 tipArr = [];
 finalBillArr =[];

 function tipCalc(bill) {
   var percentage;
   if(bill < 50) {
      percentage = .2;
   } else if (bill >= 50 && bill < 200) {
      percentage = .15;
   } else {
      percentage = .1;
   }
   return percentage * bill;
 }

 var bills = [124, 48, 268];
 var tips = [tipCalc(bills[0]),
             tipCalc(bills[1]),
             tipCalc(bills[2])];
 var finalValues = [bills[0] + tips[0],
                    bills[1] + tips[1],
                    bills[2] + tips[2]]
console.log(tips, finalValues);

*/

/******************************
 * Objects and properties


// Object Literal
 var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
 };
 console.log(john.firstName);
 console.log(john['lastName']);
 var x = 'birthYear';
 console.log(john[x]);

 john.job = 'designer';
 john['isMarried'] = true;
 console.log(john)

 // new Object syntax
 var jane = new Object();
 jane.name = 'Jane';
 jane.birthYear = 1969;
 jane['lastName'] = 'Smith';
 console.log(jane);
*/

/**************************
 * Objects and methods


var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function(){
    this.age = 2019 - this.birthYear;
  }
};
john.calcAge();
console.log(john);
*/

/**************************
 * Code Challenge #4
 

 var mark = {
   name: 'Mark Lovecraft',
   mass: 69,
   height: 1.72,
   calcBMI: function(){
     this.bmi = this.mass / (this.height * this.height)
   }
 }

 var john = {
   name: 'John Smith',
   mass: 73,
   height: 1.69,
   calcBMI: function(){
     this.bmi = this.mass / (this.height * this.height)
   }
 }

 if (john.calcBMI() > mark.calcBMI()){
   console.log(john.name + ' has a higher BMI of ' + john.bmi);
 } else if (mark.bmi > john.bmi) {
   console.log(mark.name + ' has a higher BMI of ' + mark.bmi);
 } else {
   console.log('They have the same BMI!')
 }

 */

 /************************
  * Loops and iteration
  */

  for(var i = 0; i <= 20; i++) {
    console.log(i)
  }

  // i = 0, 0 < 10 true, log i to console, i++
  // i = 1, 1 < 10 true, log i to console, i++
  // ...
  // i = 9, 9 < 10, true log i to console, i++
  // i = 10, 10 < 10 FALSE, exit the loop!

 var john = ['John', 'Smith', 1990, 'designer', false];

 for(var i = 0; i < john.length; i++) {
   console.log(john[i]);
 }