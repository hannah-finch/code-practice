// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function(str) {};
let characterObject = {}

console.log(str)

//some kind of loop to go through each character of the string

for (let i=0; i < str.length; i++) {
  let character = str[i]

  if(char in characterObject) {
    characterObject[char]++
  } else {
  characterObject[char] = 1
}
console.log(characterObject)
return characterObject
}