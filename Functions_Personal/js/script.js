//Jordan Rocha_5/2/13_Functions: Personal

//How long until I need to do the dishes?


//What is the volume of the sink in inches? Length, width , height?
//Assume the average volume of the dish is 40 inches cubed and prompt how many dishes are dirty?

var length = prompt("What is the length of your sink in inches?");//prompt for length
var width = prompt("What is the width of your sink in inches?");//prompt for width
var height = prompt("What is the height of your sink in inches?");//prompt for height

var sinkVolume = calcVolume(length,width,height); //store return function in the var sinkVolume

function calcVolume(l, w, h){  //function for volume is length time width time height
    var volume = l * w * h;
    return volume;  //return command volume to above sinkVolume var
}

//console.log(sinkVolume); //sink volume function tested as working.

var dirtyDishes = prompt("How many dishes are dirty in your sink?"); //prompt the dirty dishes

var dishSpace = sinkVolume - (dirtyDishes * 40)//assuming an arbitrary average of 40 square inches per dish, I calculated the total volume difference of the dirty dishes in the sink.

//console.log(dishSpace)//printed and tested code. Tested as working.

answer = (dishSpace > 200) ? "You have " + dishSpace + " cubic inches of space left in your sink. You can wait a little longer." : "You have " + dishSpace + " cubic inches of space left in your sink. Quit being lazy and start scrubbing.";// if/else ternary statement to print to console

console.log(answer); //print final comment and tested code as working.



