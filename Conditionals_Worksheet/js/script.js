// Jordan Rocha_4/22/13_Conditionals Worksheet

//Get Gas?

//Determine if driver has enough fuel.

//If car has enough fuel, drive on

//if car cannot make it 200 mile, stop for gas.


var mpg = 20;
var gasPercent = .1;  //Amount in the gas tank
var gasCapacity = 20;

var fuel = gasCapacity * gasPercent * mpg; //gas capacity * the 50%(written as.5) * times the miles per gallon gives me my fuel in how many miles I can drive
var fuelRemaining = gasCapacity * gasPercent;//how much gas is remaining. 50% of the capacity


if(fuel >= 200){
    //if fuel is greater than or equal to then drive on
    console.log("Yes,you can make it without stopping for gas!");
}else{
    //if fuel is less than 200, then stop and get gas
    console.log("You only have" + " " + fuelRemaining + " " + "gallons of gas in your gas tank, better get gas while you can!");
}


//Grade Letter Calculator

//Student earns a number grade. Determine the letter grade using conditional statements.

var grade = prompt ("What is your grade for this course?"); //prompt for users grade

if(grade <= 100 && grade >= 90){
    //if grade is greater than 89 and equal or less to 100 than write out an A
    console.log("Great Job! You got an A.")//code checked as working
}else if(grade <= 89 && grade >= 80){
    //if grade is greater than 80 and equal or less than 89 than write out an B
    console.log("Good Job! You got a B.")
}else if(grade <= 79 && grade >= 73){
    //if grade is greater than 72 and equal or less than 79 than write out an C
    console.log("Nice try. You got a C.")
}else if(grade <= 72 && grade >= 70){
    //if grade is greater than 69 and equal or less than 72 than write out an D
    console.log("Try Harder. You got a D.")
}else if(grade <= 69){
    //if grade is less than 69 than write out an F
    console.log("Loser! You got a F.")
}else{
    console.log("There is no letter grade for that number.")//code tested. code working.
}

//Movie Ticket Price

//Cost of a movie equals $12
//if they're older than 55, under 10, or watch it between 3pm and 5pm,then it is only $7

var age = prompt ("How old are you?"); //define var age by using prompt
var movieTime = ("What time does the movie begin?"); //define movie start time with prompt

if(age > 55 || age <10){
    //if older than 55 or under than 10, then you only have to pay $7.00
    console.log("You only have to pay $7.00.");
}else if(movieTime > 2 && movieTime < 6){
    //If movie time is greater than 2 and less than 6 than you only have to pay $7.00
    console.log("It's Happy Hour! You only have to pay $7.00.");
}else{
    //everyone else has to pay $12.00
    console.log("You're not special in any way so you have to pay $12.00 to see this movie.");
}


