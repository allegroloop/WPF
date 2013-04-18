
     //Jordan Rocha 4-17-2013 Expression Worksheet

     //Dog Years

     var sparkysAge = 2;   //sparkys age is given
     var dogYears = sparkysAge * 7;   // multiply 7 by sparky's age which is 2

     console.log("Sparky is" + " " + sparkysAge + " " + "human years which is" + " " + dogYears+ " " + "in dog years");

     //SLice of Pie part 1

     var slicesPerPizza = 12; //given
     var partyPeople = 12; //given
     var pizza = 6; //given

     var slicesPerPerson = pizza * slicesPerPizza / partyPeople;  // first we need the total slices, then we divide by the total people to see who gets how many slices

     console.log("Each person ate" + " " + slicesPerPerson + " " + "slices of pizza at the party");

     //Slice of Pie part 2

     var sparkySlice = pizza * slicesPerPizza % partyPeople; // same as the code before but with the Modulo to show the remainder

     console.log("Sparky got" + " " + sparkySlice + " " + "slices of pizza"); //poor sparky gets none

     //Average Shopping Bill

     var weeklyGroceries = [45, 88, 120, 35, 54]; //shopping totals for week 1 through 5 given using the Array in []

     var total = weeklyGroceries[0] + weeklyGroceries[1] + weeklyGroceries[2] + weeklyGroceries[3] + weeklyGroceries[4];  //  adding totals using previously defined array of 0 through 5

     var average = total/ 5; //find the average by dividing by the total weeks. In this case 5.

     console.log("You have spent a total of" + " " + "$" + total + " " + "on groceries over 5 weeks. That is an average of" + " " + "$" + average + " " + "per week.");

     //Discount

     var originalPrice = 100;   //given
     var discount = 20;  //given
     var itemDescription = "Facny Pants"; //given
     var tax = 1.08; //given

     var discountedPrice = originalPrice - (discount/100 * originalPrice); //PEMDAS - Turn the discount into a percent by dividing by 100. Then, multiply to the price to fond the discount. Last subtract that from the Original price to find the new discounted price
     var itemWithTax = discountedPrice * tax;  //I just wrote the tax as a whole number and a decimal so all I had to do was multiply instead of re-writing the abouve equation and turning the tax into a percent.


     console.log("Your" + " " + itemDescription + " " + "were originally" + " " + "$" + originalPrice + " " + "but after a" + " " + discount + "%" + " " + "discount, it is now" + " " + "$" + discountedPrice + " " + "without tax, and" + " " + "$" + itemWithTax + " " + "with tax.");
