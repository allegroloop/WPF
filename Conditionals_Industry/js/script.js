//Jordan Rocha_4/23/13_Conditionals Industry

//Is the student tardy?

//If the Student is on time he gets full credit. If student is 5-30 min late than he gets a tardy. If student is more than 30 min late then he gets no credit for class unless the student has an excuse.

var arrivalTime = prompt("How many minutes after the scheduled class start time did student arrive?"); //define var time for student
var excuse = confirm("Does student have an excuse? Select ok if yes, or cancel for no."); //define var excuse true/false

console.log(excuse); // code checked for true/false

if(arrivalTime > 4 && arrivalTime < 30 && excuse == false){
    //define and print first statement print to log "Student is late for class and receives a tardy."
    console.log("Student is late for class and receives a tardy."); //code tested as working
}else if(arrivalTime > 4 && arrivalTime < 30 && excuse == true){
    //define and print first statement print to log "Student is late for class, but the tardy will be excused."
    console.log("Student is late for class, but the tardy will be excused."); //code tested as working
}else if(arrivalTime >= 30 && excuse == false){
    //if student is 30min or later without an excuse
    console.log("Student is too late to receive credit for this class.");
}
