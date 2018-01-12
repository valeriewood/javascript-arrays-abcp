var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
console.log(chocolateBars);



var addElementToBeginningOfArray = ["Mashed Potatoes"];
 addElementToBeginningOfArray = ["Steak", ...addElementToBeginningOfArray];
 
var destructivelyAddElementToBeginningOfArray = ["Green Beans"];
 destructivelyAddElementToBeginningOfArray = ["Gravy", ...destructivelyAddElementToBeginningOfArray];
 
addElementToBeginningOfArray;
destructivelyAddElementToBeginningOfArray;
 
 

var accessElementInArray = [1];
[...accessElementInArray, 2];

console.log(accessElementInArray[0]);

var acceptAnArray = " The function should accept an array";
console.log(accessElementInArray[0] + acceptAnArray);
 
acceptAnArray[0];



var destructivelyRemoveElementFromBeginningOfArray = [...addElementToBeginningOfArray];