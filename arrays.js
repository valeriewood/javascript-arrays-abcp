var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
console.log(chocolateBars);


var cities = ["New York", "San Francisco"];
cities.unshift("Philadelphia");

var cities = ["New York", "San Francisco"];
cities = ["Philadelphia", ...cities];
// ["Philadelphia", "New York", "San Francisco"];
console.log(cities);

const cats = ["Milo", "Garfield"];
const moreCats = ["Felix", ...cats];




var addElementToBeginningOfArray = ["Mashed Potatoes", "Green Beans"];
 
 addElementToBeginningOfArray.push("Corn");

// we can assign it to the existing `cities` variable

var destructivelyAddElementToBeginningOfArray = ["Silverware", ...addElementToBeginningOfArray];

destructivelyAddElementToBeginningOfArray.push("Plate");
 console.log(addElementToBeginningOfArray);
console.log(destructivelyAddElementToBeginningOfArray);




const addElementToEndOfArray = ["Mashed Potatoes", "Green Beans"];
 
 addElementToEndOfArray.push("Corn");

// we can assign it to the existing `cities` variable

var destructivelyAddElementToEndOfArray = ["Silverware", ...addElementToEndOfArray];

destructivelyAddElementToEndOfArray.push("Plate");


 addElementToEndOfArray.push("Corn");
// we need a new variable:
const destructivelyAddElementToEndOfArray = ["Felix", ...addElementToEndOfArray];

 console.log(addElementToEndOfArray);
console.log(destructivelyAddElementToEndOfArray);


var accessElementInArray = ["Elizabeth Holmes", "Laurene Powell Jobs", "Arianna Huffington"];
 
// the line below will print the string "Elizabeth Holmes"
console.log(accessElementInArray[0]);
 
// the code below will print the string "Arianna Huffington is the co-founder and editress-in-chief of The Huffington Post"
var bio = " is the co-founder and editress-in-chief of The Huffington Post";
console.log(accessElementInArray[2] + bio);
 
// the line below will return undefined
accessElementInArray[9];



var destructivelyRemoveElementFromBeginningOfArray = ["Milo"];
 
destructivelyRemoveElementFromBeginningOfArray.pop(0);
 
console.log(destructivelyRemoveElementFromBeginningOfArray[0]);





var removeElementFromBeginningOfArray = ["Milo"];
 
removeElementFromBeginningOfArray.slice(1);
 
var removeElementFromBeginningOfArray = ["Milo", "Garfield", "Otis"];
 
removeElementFromBeginningOfArray = removeElementFromBeginningOfArray.slice(1);
 removeElementFromBeginningOfArray;


var destructivelyRemoveElementFromEndOfArray = ["chocolate", "vanilla", "raspberry"];
 
destructivelyRemoveElementFromEndOfArray.slice(0, iceCreams.length - 1);
 
destructivelyRemoveElementFromEndOfArray;