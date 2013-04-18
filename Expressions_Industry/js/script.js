// James Jordan Rocha_4-17-2013_Assignment Expressions - Industry Calculator
// Calculate the average pay per day in a given month

var weeks = 4; // I used 22 as the number of working weeks in a month
var days = 5 // Defining how many day are in one work week
var payChecks = [738, 875, 650, 754]; // An arbitrary list of weekly paychecks
var monthlyTotal = payChecks[0] + payChecks[1] + payChecks[2] + payChecks[3]; //add all the paychecks using and array

var weeklyAverage = monthlyTotal / weeks; //Take the total for the month and divide by the total number of weeks in a month
var dayAverage = weeklyAverage / days; // Unorthodox way to find the average I know, but by dividing the weekly average by the days in a work week we get the average per day.

console.log("The average pay I received per day for this month is" + " " + "$" + dayAverage); //put in the final variable to represent the average daily pay. Checked code and it worked. Success!