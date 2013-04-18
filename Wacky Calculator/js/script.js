//Wacky Calculator - Grey Hair Counter

// First I must define the number among all hair types

var hairTypes = ["blonde", "brown", "black", "red"]; //these are the basic given hair types

// at this point I need to re-define the colors as specific numbers of actual hairs on head in order to do the math

hairTypes[0] = 140000; //blonde Consensus found on http://htg.addr.com/didyou.htm
hairTypes[1] = 110000; // brown Consensus found on http://htg.addr.com/didyou.htm
hairTypes[2] = 108000; // black Consensus found on http://htg.addr.com/didyou.htm
hairTypes[3] = 90000; //red Consensus found on http://htg.addr.com/didyou.htm

var age = 32; // My Age, shh, don't tell

console.log(hairTypes[1] + " " + "hairs"); //ran a test, noticed i needed semicolons at the end of each line and i was missing quotations in my array. I got test to work.

var percent = age / 1000000 * (age * age); //I tried to do exponents, but this was simpler for my skill set. 1000000 is an arbitrary number used to make my math get to a closer percentage number.

console.log(percent); // Check code. Code works

var greyHairs = hairTypes[1] * percent;  //added greyHairs line of code and added semicolon to lines16 and 18

console.log(greyHairs); // checking code ... code works

hairTypes[0] = "blonde" //renamed number value back to color value
hairTypes[1] = "brown"   //testing out renaming back to hair color ... success!
hairTypes[2] = "black"  //renamed number value back to color
hairTypes[2] = "red"  // renamed number value back to color

console.log("I have" + " " + hairTypes[1] + " " + "hair and I am" + " " + age + " " + "years old. This means I have" + " " + greyHairs + " " + "grey hairs."); // Final Statement