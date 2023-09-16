function add(n1, n2){
    return n1 +n2;
 }
 
 const sub = function(n1,n2){
    return n1 - n2
  } 

  const cb = function(n1,n2, callback){
    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
  };


 
  console.log( add(1,2) )     // What will this print?
  console.log( add )          // What will it print and what does add represent?
  console.log( add(1,2,3) ) ; // What will it print
  console.log( add(1) );	  // What will it print 	
  console.log( cb(3,3,add) ); // What will it print
  console.log( cb(4,3,sub) ); // What will it print
//   console.log(cb(3,3,add())); // What will it print (and what was the problem, at man giver den et funktion add som ikke returner en værdi)
  console.log(cb(3,"hh",add));// What will it print
 

function addVersion2(n1, n2, ...rest){
    return n1 +n2 + rest.reduce((acc,cur)=> acc +cur)
 }
console.log(addVersion2(1,2,3,4,5,6))


function mul(n1, n2){
    return n1 * n2;
 }
console.log(mul(3,5))
console.log(cb(7,7,mul))


const nameArray = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
const filteredArray = nameArray.filter(name => name.length <= 3);
console.log("First Array: ");
nameArray.forEach(name => {
    console.log(name);
});
console.log("Filtered Array: ");
filteredArray.forEach(name => {console.log(name);
});

const upperCaseNames = nameArray.map(name => name.toUpperCase());
console.log("UpperCase Array: ", upperCaseNames);




const cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

const newer1999 = cars.filter(car => car.year > 1999);
console.log("Cars newer the 1999: ", newer1999);

const volvo = cars.filter(car => car.make === "Volvo");
console.log("All Volvo's: ", volvo);

const below5000 = cars.filter(car => car.price < 5000);
console.log("Cars whit price less then 5000: ", below5000);

// myFilter iterates through the elements of the input array and invokes the callback for each element. If the callback returns true, the element is added to the filteredArray.

// myMap iterates through the elements of the input array and applies the callback to each element. The result of the callback is pushed into the mappedArray.

function myFilter(array, callback){
    const filteredArray = [];

for (let i = 0; i < array.length; i++) {
  if (callback(array[i], i, array)) {
    filteredArray.push(array[i]);
  }
}

return filteredArray;
}
// Example usage:
const numbers2 = [1, 2, 3, 4, 5, 6];
const filteredNumbers = myFilter(numbers2, function (number) {
return number % 2 === 0;
});

console.log(filteredNumbers); // Output: [2, 4, 6]


// NOTE: Anvendt ChatGPT for hjælp samt forståelse!!!! Copy Paste function myMap!
// Define a function called myMap that takes two arguments:
// 1. array: An array of data that you want to transform.
// 2. callback: A function that specifies how each element in the array should be transformed.
function myMap(array, callback) {
  // Create an empty array called mappedArray to store the transformed elements.
  const mappedArray = [];

  // Use a "for" loop to iterate through each element of the input array.
  for (let i = 0; i < array.length; i++) {
    // For each element in the input array, call the callback function:
    // - Pass the current element (array[i]) as the first argument to the callback.
    // - Pass the current index (i) as the second argument to the callback.
    // - Pass the entire input array (array) as the third argument to the callback.
    // - Push the result of the callback function into the mappedArray.
    mappedArray.push(callback(array[i], i, array));
  }

  // After processing all elements in the input array, return the mappedArray,
  // which now contains the transformed values.
  return mappedArray;
}

// Example usage:

// Create an array called numbers with some numeric values.
const numbers = [1, 2, 3, 4, 5];

// Use the myMap function to transform each number in the array.
// - The second argument to myMap is a callback function that specifies the transformation.
// - In this case, the callback function multiplies each number by itself (squares it).
const squaredNumbers = myMap(numbers, function (number) {
  return number * number;
});

// Print the squaredNumbers array, which contains the transformed values.
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]


const myPerson = {
  firstName: "Lotte",
  lastName: "Eliasson",
  birthdate: "23-05-79",
  interests: "it All!"
}
for (let fisk in myPerson){
  console.log(fisk + ": " + myPerson[fisk]);
}

// var makeCounter = function() {
//   var privateCounter = 0;
//   function changeBy(val) {
//     privateCounter += val;
//   }
//   return {
//     increment: function() {changeBy(1);},
//     decrement: function() {changeBy(-1);},
//     value: function() { return privateCounter;}
//   }
// };
// var counter1 = makeCounter();
// var counter2 = makeCounter();