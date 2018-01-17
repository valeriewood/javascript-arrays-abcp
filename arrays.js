var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
console.log(chocolateBars);

var dinner = ["mashed potatoes", "green beans"];
function addElementToBeginningOfArray(element, ...dinner) {
return [element, ...dinner];
}
addElementToBeginningOfArray(dinner, "Sopranos"); 


