// 1st problem
var moneyGiven = 1000;
var applePrice = 400;
var orangesPrice = 300;

var totalPrice = applePrice + orangesPrice;
var giveBack = moneyGiven - totalPrice;
console.log(giveBack);

// 2nd problem

var mathMarks = 75.25;
var biologyMarks = 65;
var chemistryMarks = 80;
var physicsMarks = 35.45;
var banglaMarks = 99.50;

var totalMarks = mathMarks + biologyMarks + chemistryMarks + physicsMarks + banglaMarks;
 var average = totalMarks / 5;
 var averageTwoDecimal = average.toFixed(2);
 console.log(averageTwoDecimal);

// 3rd problem
var teachersGiveMeFirstLine = 'I am going to be';
var teachersGiveMeSecondLine = 'an awesome web developer';

var twoLinesPlus = teachersGiveMeFirstLine + ' ' + teachersGiveMeSecondLine;
console.log(twoLinesPlus);

// 4th problem

var number = 119;
var reminder = number % 5;
console.log(reminder);


// 5h problem
// array updated

var fruits = ['apple', 'banana', 'orange'];
var bananaIndex = fruits.indexOf('banana');
fruits[bananaIndex] = 'mango';
console.log(bananaIndex);
fruits.pop();
fruits.push('watermelon');
console.log(fruits);

// 6th problem
// Grade average
// var myMarksAndFriendsMarks = [['myScore', 85],['tomScore', 66],['jane', 95],['peter', 56], ['john', 40]];
// var averageMarks = 40;
// for(var i = 0; i < myMarksAndFriendsMarks; i++){
//     averageMarks += myMarksAndFriendsMarks[i][1];
//     // var averageMarks = (averageMarks / myMarksAndFriendsMarks.length);
// }
// console.log('Average Grade', (averageMarks) / myMarksAndFriendsMarks.length);
// if(averageMarks >= 80 && averageMarks <= 100 ){
//     console.log("Grade : F");
// }
// else if(averageMarks >= 70 && averageMarks <= 79 ){
//     console.log('Grade : D');
// }
// else if(averageMarks >= 60 && averageMarks <= 59 ){
//     console.log('Grade : C');
// }
// else if (averageMarks >= 40 && averageMarks <= 50 ){
//     console.log('Grade : B');
// }
// else if( averageMarks >= 30 && averageMarks <= 39 ){
//     console.log('Grade : A')
// }

// 2nd problem
var num1 = 1330;
var num2 = 79000;
var num3 = 405;

if(num1 > num2){
    if(num1 > num3){
        console.log(num1);
    }
    else{
        console.log(num3);
    }
}
else{
    if(num2 > num3){
        console.log(num2);
    }
    else{
        console.log(num3);
    }
}

// if(num1 > num2 && num1 > num3){
//     console.log('its largest number', num1);
// }
// else if(num2 > num1 && num2 > num3){
//     console.log('its largest number', num2);
// }
// else{
//     console.log('its largest number',num3);
// }

// Problem Grading System chart

var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var Avgmarks = 39;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

// console.log("Average grade: " + (Avgmarks)/students.length);

        if (avg < 50){
          console.log("Grade : F");      
          }
          else if(avg < 60){
            console.log("Grade : D");      
            } 
        else if (avg < 70) {
                console.log("Grade : C"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : B"); 
        } else if (avg < 90) {
                console.log("Grade : A"); 
        } else if (avg < 100) {
                console.log("Grade : A+"); 
}



// isosceles
var side1 = 9;
var side2 = 8;
var side3 = 9;

if(side1 == side2 || side1 == side3 || side2 == side3){
    console.log('isosceles');
}
else{
    console.log('wrong type');
}