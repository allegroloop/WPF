//Jordan Rocha-5_1_13_Functions: Industry

//Is this class meeting attendance requirements?

//If 75% or more attendance, then print "The class is a success.";
//If 74-35% attending, then print "We need to work on getting our numbers up.";
//If below 35%, then print "Give up, this class is a bust.";

var students = prompt("How many students showed up to class today?");//prompt to define number of students present in class
var percent = calcPercent(students);//return to store calcPercent of function

function calcPercent(students){
    var classSize = 16;
    var classPercent = students/ classSize;
    return classPercent;
}
calcPercent(students);

if(percent >= 75){
    console.log (percent + "% of your class showed up today. Your class is a success!");
}else if(percent <=74 && percent > 34){
    console.log(percent + "% of your class showed up today. Need to work on getting people to show up!");
}else{
    console.log(percent + "% of your class showed up today. This class is a bust. Just give up!");

}

