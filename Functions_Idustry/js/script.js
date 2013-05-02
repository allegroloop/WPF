//Jordan Rocha-5_1_13_Functions: Industry

//Is this class meeting attendance requirements?

//If 75% or more attendance, then print "The class is a success.";
//If 74-35% attending, then print "We need to work on getting our numbers up.";
//If below 35%, then print "Give up, this class is a bust.";

var students = prompt("How many students showed up to class today?");//prompt to define number of students present in class
var percent = calcPercent(students);//return to store calcPercent of function

function calcPercent(students){ //function to send "students" prompt to classPercent equation
    var classSize = 16;//standard class size
    var classPercent = students/ classSize * 100;//percentage equation = number of students divided
    return classPercent;//return command to send function result to be stored in var percent
}
calcPercent(students);// i believe this send the prompt "students" to the function calcPercent's perameter

if(percent >= 75){  //If 75% or more attendance, then print
    console.log (percent + "% of your class showed up today. Your class is a success!");
}else if(percent <=74 && percent > 34){  //If between 74-35% attending, then print "We need to work on getting our numbers up.";
    console.log(percent + "% of your class showed up today. Need to work on getting people to show up!");
}else{ //If below 35%, then print "Give up, this class is a bust.";
    console.log(percent + "% of your class showed up today. This class is a bust. Just give up!");

}        //code tested as working

