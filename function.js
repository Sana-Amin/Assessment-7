// function sumZero(array){
//     let value = []
// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array.length; j++) {
//     if (i !== j) {
//       if (array[i] + array[j] === 0) {
//         return true
//       }
    
//   }
//   return false
//  }
// }
// }
// console.log(sumZero([]));

function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
  }
console.log(hasUniqueChars("Monday"))
console.log(hasUniqueChars("Moonday"))
console.log(hasUniqueChars("Bob"))

//run time is O(n)