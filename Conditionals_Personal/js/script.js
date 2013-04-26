//Jordan Rocha_4/23/13_Conditionals Personal

//Question: Should you go on a hike?

//Conditions: 1.What time do you get off? , 2.What is the temperature?

//The sun goes down at 8pm and you need at least 3 hours to complete the hike. Also, if its hotter than 80 or colder than 55 than go home and work on Java Script

var dayOff = prompt("What time do you get off?"); //prompt question to define time off
var weather = prompt("What is the temperature?"); //prompt question to define what the temperature is

console.log(dayOff + " " + weather); //var prompts checked as working

     //rewrite working code as Ternary

(dayOff >= 1 && dayOff <=5 && weather > 54 && weather < 81) ? console.log("Take a hike buddy!") : console.log("Not today, work on Java Script instead.");
    //if prompts are answered as time on or between 1 and 5 and the temperature is between 55 and 80 degrees then print to console "take a hike buddy!"
    //if answers anything else - print to console "Not today, work on Java Script instead."

