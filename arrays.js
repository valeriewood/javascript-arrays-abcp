var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
console.log(chocolateBars);


var dinner = ["mashed potatoes", "green beans"];
function addElementToBeginningOfArray(element, ...dinner) {
return [element, ...dinner];
}
addElementToBeginningOfArray(dinner, "meat loaf"); 



function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}



function addElementToEndOfArray(array, element) {
  newArr= [...array,element];
  return newArr;
}


function destructivelyAddElementToEndOfArray(array, element) { array.push(element);
return array;
}
destructivelyAddElementToEndOfArray(dinner, "dinner rolls");


function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift(element)
  return array
}