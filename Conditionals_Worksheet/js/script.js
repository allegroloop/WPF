// Jordan Rocha_4/22/13_Conditionals Worksheet

//Get Gas?

//Determine if driver has enough fuel.

//If car has enough fuel, drive on

//if car cannot make it 200 mile, stop for gas.


var mpg = 20;
var gasPercent = .5;
var gasCapacity = 20;

var fuel = gasCapacity * gasPercent * mpg;
var fuelRemaining = gasCapacity * gasPercent;

if(fuel >= 200){
    //if fuel is greater than or equal to then drive on
    console.log("Yes,you can make it without stopping for gas/!");
}else{
    //if fuel is less than 200, then stop and get gas
    console.log("You only have" + " " fuelRemaining + " " + "gallons of gas in your gas tank, better get gas while you can!")
}



