//Jordan Rocha_5/2/13_Functions: Personal

//How long until I need to do the dishes?


//What is the volume of the sink in inches? Length, width , height?
//Assume the average volume of the dish is 40 inches cubed and prompt how many dishes are dirty?

var length = prompt("What is the length of your sink in inches?");
var width = prompt("What is the length of your sink in inches?");
var height = prompt("What is the length of your sink in inches?");

var sinkVolume = calcVolume(length,width,height);

function calcVolume(l, w, h){
    var volume = l * w * h;
    return volume;
}



console.log(sinkVolume);