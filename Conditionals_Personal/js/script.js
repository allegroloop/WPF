//Jordan Rocha_4/23/13_Conditionals Personal

//Question: Should you go on a hike?

//Conditions: 1.What time do you get off? , 2.What is the temperature?

//The sun goes down at 8pm and you need at least 3 hours to complete the hike. Also, if its hotter than 80 or colder than 55 than go home and work on Java Script

var dayOff = prompt("What time do you get off?"); //prompt question to define time off
var weather = prompt("What is the temperature?"); //prompt question to define what the temperature is

console.log(dayOff + " " + weather); //var prompts checked as working

if(dayOff >= 4 && dayOff <=5 && weather > 54 && weather < 81){
    //if prompts are answered as yes and sunny - take a hike buddy!
    console.log("Take a hike buddy!");
}else{
    //if answers anything else -  print to console "Not today, work on Java Script instead."
    console.log("Not today, work on Java Script instead.");

}
