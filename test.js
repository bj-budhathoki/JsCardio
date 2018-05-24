//reverse the string
function reveserString(str) {
   return str
      .split('')
      .reverse()
      .join(' ');
}
const txt = reveserString('hello');
console.log(txt);
