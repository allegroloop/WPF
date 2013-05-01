//Jordan Rocha_4/30/13_Functions Worksheet

//It takes 8.666666667 bee stings per pound to kill an animal.
//Calculate how many bee stings are needed to kill an animal in a function.

var weight = prompt("What is the weight of the animal?");//prompt for the variable "weight" for calculations.

function deathStings(weight){
    //8.666666667 multiplied by the weight of the animal
    var death = weight * 8.666666667;
    console.log("It takes " + death + " bee stings to kill a " + weight + " lb creature"); //print to console the results of the function

}

deathStings(weight);// plugged in the var "weight" into the argument and invoked it to return solution and print to console the number of bee stings

//code tested as working



