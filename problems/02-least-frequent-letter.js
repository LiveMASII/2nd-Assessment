/***********************************************************************
Write a function `leastFrequentLetter(string)` that will take a
string as an argument and return the character that appears the
least often. In case of a tie, return any character with the
lowest count. The string will have at least one character.

Examples:

leastFrequentLetter("mississippi") // "m"
leastFrequentLetter("ananab") // "b"
leastFrequentLetter("Cheese") // "C", "h", or "s"
***********************************************************************/
leastFrequentLetter("mississippi") // "m"
leastFrequentLetter("ananab") // "b"
leastFrequentLetter("Cheese") // "C", "h", or "s"

function leastFrequentLetter(string) {
  let stringCount = {}

  for (let char of string){
    stringCount[char] = (stringCount[char] || 0) + 1
  }
  let lowestStrCount = string[0]
  let leastCount = stringCount[lowestStrCount]

  for (let char in stringCount){
    if (stringCount[char] < leastCount){
      lowestStrCount = char
      leastCount = stringCount[char]
    }
  }
  return lowestStrCount
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = leastFrequentLetter;
