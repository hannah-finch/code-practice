// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function(arr) {
  console.log(arr)
  // need to know what the two largest numbers are
  //
  let sortedArray = arr.sort(function(a,b) {
    // return a-b; // return lowest to highest
    return b-a; // return highest to lowest
  })
  console.log(sortedArray);

  return sortedArray[0]*sortedArray[1];
};
