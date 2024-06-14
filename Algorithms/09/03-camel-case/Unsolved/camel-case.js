// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function(str) {
  let newString =''
  console.log(str)
  // figure our what the words are in the string
  // split probably
  // once I have the words individually... lowercase??
  // once all lowercase, then make the first letter uppercase
  let words = str.toLowerCase().split(" ");
  console.log("words array: ", words)

  for (let i=0; i < words.length; i++) {
    let word = words[i];
    let letters = word.split("");

    letters[0] = letters[0].toUpperCase()

    newString += letters.join("")
  }

  console.log(newString)
  return newString;
};

// this doesn't lowercase the first letter yet, so it's not quite done, but class is starting
