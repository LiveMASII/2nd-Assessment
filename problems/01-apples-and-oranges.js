/***********************************************************************
Write a function `applesAndOranges(obj)` that takes an object as
an argument and returns an integer representing how many keys and values
in the input object contain the string "apple" or "orange".

For example, `{"fruit": "pineapple", "orange": "juice"}` has two strings
containing "apple" or "orange".

Examples:

obj1 = {"banana": "fruit", "apple": "fruit", "carrot": "vegetable", "cherry": "fruit"}
applesAndOranges(obj1) // 1

obj2 = {"alex": "orange", "erin": "pineapple", "cody": "mango", "daniel": "apple"}
applesAndOranges(obj2) // 3

obj3 = {"orange-juice": "orange", "apple-sauce": "apple", "snapple": "peach-tea"}
applesAndOranges(obj3) // 5


***********************************************************************/

obj1 = {"banana": "fruit", "apple": "fruit", "carrot": "vegetable", "cherry": "fruit"}
applesAndOranges(obj1) // 1

obj2 = {"alex": "orange", "erin": "pineapple", "cody": "mango", "daniel": "apple"}
applesAndOranges(obj2) // 3

obj3 = {"orange-juice": "orange", "apple-sauce": "apple", "snapple": "peach-tea"}
applesAndOranges(obj3) // 5

function applesAndOranges(obj) {
total = 0

  for (let key in obj){
    if (obj[key].includes('apple') || obj[key].includes('orange')){
      total ++
    }
    if (key.includes('apple') || key.includes('orange')){
      total++
    }
  }
  return total
}
console.log(applesAndOranges(obj1)); // 1
console.log(applesAndOranges(obj2)); // 3
console.log(applesAndOranges(obj3)); // 5

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = applesAndOranges;
