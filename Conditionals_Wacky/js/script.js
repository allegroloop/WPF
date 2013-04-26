//Jordan Rocha_4/23/13_Conditional Wacky

//What beverage should I drink?

//Depending on what time of the day it is and when the last time I have eaten, decide whether to drink coffee, tea, or water.

//if it's between 0800 and 1200 and you have eaten in the last hour, then drink coffee.
//if it's between 1200 and 1900 and you have eaten in the last hour, than drink tea.
//all else drink water.

var time = prompt("What time is it in military time?"); //define prompt as the time of day it is
var chowTime = confirm ("Have you eaten in the last hour, ok for yes or cancel for no"); //define prompt as true or false


if(time >= 0800 && time <=1200 && chowTime == true){
    // If its between 8 and 12 and you have eaten in the last hour then you can drink some coffee
     console.log("It's java time!") //coed tested as workin
}