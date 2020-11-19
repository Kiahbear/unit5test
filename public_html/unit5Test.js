//Kiah Nicholson-Wilcox
//this is some beginning text
let miles = prompt("How many miles per tank of gas?");
let gallons = prompt("How many gallons does the car hold?");

function milesPerGallon(miles, gallons){
    return miles / gallons;
}
document.write("The miles per gallon is "+ milesPerGallon(miles, gallons) + " miles");