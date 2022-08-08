function sumZero(array){  
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        return true;
      }
    
 }
}
return false;
}
console.log(sumZero([]));
//time Complexity is O(n^2)
//space complexity is O(n)

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

 //time Complexityis O(n)
 //space complexity is O(n) because it based on the size of the word 

 const isPangram = (string)=> new Set(string.toLowerCase().match(/[a-z]/g)).size === 26;



console.log(isPangram("The quick brown fox jumps over the lazy dog!"));

//time Complexity is 0(n)
//space complexity is O(n)

const findLongestWord = (words) => {
    return words.sort((a,b) => b.length - a.length)[0].length;
};

console.log(findLongestWord(["hi", "hello"]));
//time Complexity is O(n log(n))
//space complexity is O(n)