//Jordan Rocha_4/23/13_Conditionals Personal

//Question: Should you go on a hike?

//Conditions: 1.Do you have the day off, yes or no? , 2.Is it sunny or raining?

var dayOff = prompt("Do you have the day off, yes or no?"); //prompt question to define day off as yes or no
var weather = prompt("Is it sunny or raining"); //prompt question to define weather as raining or sunny

console.log(dayOff + " " + weather); //var prompts checked as working

if("yes" && "sunny"){
    //if prompts are answered as yes and sunny - take a hike buddy!
    console.log("Take a hike buddy!");
}else if("yes" && "raining"){
    //if answers are yes and raining - print to console "Not today, work on Java Script instead."
    console.log("Not today, work on Java Script instead.");
}else{
    //everything else = "Nice try, go to work!"
    console.log("Nice try! Go to work.");

}
