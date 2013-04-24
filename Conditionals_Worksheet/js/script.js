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

var grade = prompt ("What is you grade for this course",95); //prompt for users grade

if(grade <= 100 && grade >= 90){
    //if grade is greater than 89 and equal or less to 100 than write out an A
    console.log("Great Job! You got an A.")
}



