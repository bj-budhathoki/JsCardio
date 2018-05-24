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
const output = reverseInt(-12345);
console.log(output);
