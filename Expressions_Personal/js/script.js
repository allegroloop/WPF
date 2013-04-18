//James "Jordan" Rocha_4-17-2013_Personal Calculator "How much of my trash in lbs is Recyclable in one year"

var weeklyTotal = 24; //This is the total amount of trash in lbs
var weeklyDumpster = 5.8; //This is how much trash actually wen into the dumpster
var weeklyRecycle = weeklyTotal - weeklyDumpster; //Math for the lbs of trash recycled in a week

var yearlyRecycle = 365.25 / 7 * weeklyRecycle; // PEMDAS - Calculate how many weeks are in a year by dividing the number of day in a year by the number of days in a week and then multiply that by the weekly total of lbs of recycled material.

console.log("If I throw away" + " " + weeklyDumpster + "lbs" + " " + "of trash a week, then I can expect to recycle about" + " " + yearlyRecycle + "lbs" + " " + "of material a year!"); //It seems a lot bigger with that exclamation point at the end of it
