//Jordan Rocha_5/2/13_Functions: Wacky

//When you wish upon a star, will your dreams come true?

//calculate the odds of seeing a shooting star

//How many hours will you be looking at the sky?

var gazeTime = prompt("How many hours will you be looking at the sky?"); //prompt four hour star gazing



var starChance = function(gazeTime){//my attempt at an anonymous function
    var visibility = .00005 //amount of sky visible to you where you stand in the world
    var day = 24 //hours in the day
    var meteorites = 1000000 // approx number of meteorites in a 24 hour period
    var chance =  meteorites * visibility / day * gazeTime //PEMDAS - ordered numbers to get the correct calculations
    return chance;// return "chance" to function answer

}

var shootingStars = starChance(gazeTime);//defined shooting stars and invoked the function

console.log("If you are outside at night and look at the sky for " + gazeTime + " hours, then you will probably see " + shootingStars + " shooting stars.");

//code tested as working.