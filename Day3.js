
// <----------------------------------Task1-------------------------------------------->
let num=prompt("Enter a number"); 

if(num>0){ 
    console.log("The number is positive");
}else if (num<0){
    console.log("The number is negative");
}
else{
    console.log("Zero");
}

// <----------------------------------Task2-------------------------------------------->
let age=prompt("Enter Your Age"); 
if (age>18){
    console.log("you can vote");
}
else{
    console.log("you can't vote");
}

// <----------------------------------Task3-------------------------------------------->
let a = 45;
let b = 67;
let c = 34;

if (a > b && a > c) {
    console.log("a is the greatest");
} else if (b > a && b > c) {
    console.log("b is the greatest");
} else {
    console.log("c is the greatest");
}


// <----------------------------------Task4-------------------------------------------->
let day= prompt("Enter the any no from 1 to 7 to print the corresponding day"); 

switch(day){
    case '1': {
        console.log("Monday"); 
        break;
    }
    case '2': {
        console.log("Tuesday"); 
        break;
    }
    case '3': {
        console.log("Wednesday"); 
        break;
    }
    case '4': {
        console.log("Thursday"); 
        break;
    }
    case '5': {
        console.log("Friday"); 
        break;
    }
    case '6': {
        console.log("Saturday"); 
        break;
    }
    case '7': {
        console.log("Sunday"); 
        break;
    }
    default: {
        console.log("Wrong input")
    }

}

// <----------------------------------Task 5-------------------------------------------->
let marks = prompt("Enter your marks");
marks = parseInt(marks); // Ensure marks is treated as a number

switch (true) {
    case (marks > 80 && marks <= 100):
        console.log("Your grade is A");
        break;
    case (marks > 60 && marks <= 80):
        console.log("Your grade is B");
        break;
    case (marks > 40 && marks <= 60):
        console.log("Your grade is C");
        break;
    case (marks > 20 && marks <= 40):
        console.log("Your grade is D");
        break;
    default:
        console.log("Wrong input");
        break;
}

// <----------------------------------Task 6-------------------------------------------->
let number=prompt("Enter a number");
number = parseInt(number); 
(number%2===0) ? console.log("Even") : console.log("Odd");

// <----------------------------------Task 7-------------------------------------------->
let year = prompt("Enter year to check if it's a leap year or not");
year = parseInt(year); 
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log("Leap Year");
        } else {
            console.log("Not a leap year");
        }
    } else {
        console.log("Leap Year");
    }
} else {
    console.log("Not a leap year");
}
