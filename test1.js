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

//heigher order fucntions
const companies = [
   { name: 'company one', category: 'Finance', start: 1981, end: 2003 },
   { name: 'company two', category: 'Retail', start: 1992, end: 2008 },
   { name: 'company three', category: 'Auto', start: 1999, end: 2007 },
   { name: 'company four', category: 'technology', start: 2009, end: 2014 },
   { name: 'company five', category: 'Finance', start: 1987, end: 2000 },
   { name: 'company six', category: 'Retail', start: 1981, end: 1996 },
   { name: 'company seven', category: 'Finance', start: 1990, end: 2017 }
];
const ages = [33, 12, 20, 16, 554, 21, 44, 62, 13, 54, 25, 64, 32];

//forEach
companies.forEach(company => {
   console.log(company.name);
});
