// longest word
function longestWord(sen) {
   const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
   // sort by word length
   const sorted = wordArr.sort(function(a, b) {
      return b.length - a.length;
   });
   const longestWordArr = sorted.filter(word => {
      return word.length === sorted[0].length;
   });
   if (longestWordArr.length === 1) {
      return longestWordArr[0];
   } else {
      return longestWordArr;
   }
}

const output = longestWord('hello,my name is bijay');
console.log(output);
