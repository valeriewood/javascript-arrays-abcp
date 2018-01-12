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




var addElementToEndOfArray = ["Mashed Potatoes", "Green Beans"];
 
 addElementToBeginningOfArray.push("Corn");

// we can assign it to the existing `cities` variable

var destructivelyAddElementToEndOfArray = ["Silverware", ...addElementToBeginningOfArray];

destructivelyAddElementToBeginningOfArray.push("Plate");

cities = ["Philadelphia", ...cities]
 
// but if we have a const
const cats = ["Milo", "Garfield"]
 
// we need a new variable:
const moreCats = ["Felix", ...cats]
 console.log(addElementToBeginningOfArray);
console.log(destructivelyAddElementToBeginningOfArray);



