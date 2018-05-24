//reverse the string
function reveserString(str) {
   // return str
   //    .split('')
   //    .reverse()
   //    .join(' ');
   // let revStr = '';
   // for (let i = str.length - 1; i >= 0; i--) {
   //    revStr = revStr + str[i];
   //    console.log(i);
   // }
   // return revStr;
   //////////////
   // let revStr = '';
   // for (let char of str) {
   //    revStr = char + revStr;
   // }
   // return revStr;
   // usig high order  forEach function
   // let revStr = '';
   // str.split('').forEach(char => (revStr = char + revStr));
   // return revStr;
   // using high order reduce function
   return str.split('').reduce((revStr, char) => char + revStr, '');
}
function isPalindrom(str) {
   const revStr = str
      .split('')
      .reverse()
      .join('');
   return revStr === str;
}
function reverseInt(int) {
   const revInt = int
      .toString()
      .split('')
      .reverse()
      .join('');
   return parseInt(revInt) * Math.sign(int);
}
function capitalizeLetters(str) {
   // const strArr = str.toLowerCase().split(' ');
   // for (let i = 0; i < strArr.length; i++) {
   //    strArr[i] =
   //       strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
   // }
   // return strArr.join(' ');
   return str
      .toLowerCase()
      .split(' ')
      .map(word => word[0].toUpperCase() + word.substring(1))
      .join(' ');
}
const output = capitalizeLetters('i love javascript');
console.log(output);
