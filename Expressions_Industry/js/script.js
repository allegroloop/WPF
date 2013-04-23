// James Jordan Rocha_4-17-2013_Assignment Expressions - Industry Calculator
// Calculate the average pay per day in a given month

var weeks = 4; // I used 4 as the number of working weeks in a month
var days = 5 // Defining how many days are in one work week

var payCheck1 = parseInt( prompt('What was your paycheck for week 1?','' ));//prompt for paycheck 1 - Had to look up how to convert the string into a number so the monthly total would not concatenate.
var payCheck2 = parseInt( prompt('What was your paycheck for week 2?','' ));//prompt for paycheck 2
var payCheck3 = parseInt( prompt('What was your paycheck for week 3?','' ));//prompt for paycheck 3
var payCheck4 = parseInt( prompt('What was your paycheck for week 4?',''));//prompt for paycheck 4

console.log(payCheck1)

var monthlyTotal = payCheck1 + payCheck2 + payCheck3 + payCheck4; //add all the paychecks using and array

console.log(monthlyTotal)

var weeklyAverage = monthlyTotal / weeks; //Take the total for the month and divide by the total number of weeks in a month
var dayAverage = weeklyAverage / days; // Unorthodox way to find the average I know, but by dividing the weekly average by the days in a work week we get the average per day.

console.log("The average pay that you received per day for this month was" + " " + "$" + dayAverage); //put in the final variable to represent the average daily pay. Checked code and it worked. Success!