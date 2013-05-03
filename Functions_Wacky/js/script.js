//Jordan Rocha_5/2/13_Functions: Wacky

//When you wish upon a star, will your dreams come true?

//calculate the odds of seeing a shooting star

//How many hours will you be looking at the sky?

var gazeTime = prompt("How many hours will you be looking at the sky?");



var starChance = function(gazeTime){
    var visibility = .00005 //amount of sky visible tou where we stand in the world
    var day = 24 //hours in the day
    var meteorites = 1000000 // approx number of meteorites in a 24 hour period
    var chance =  meteorites * visibility / day * gazeTime
    return chance;

}

var shootingStars = starChance(gazeTime);

console.log("If you are outside at night and look at the sky for " + gazeTime + " hours, then you will probably see " + shootingStars + " shooting stars.");
