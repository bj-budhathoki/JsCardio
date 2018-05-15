// classic js example
const developers = [
   { name: 'bijay', language: 'javascritp' },
   { name: 'Anil', language: 'javascritp' },
   { name: 'Dibbya', language: 'Php' },
   { name: 'Suresh', language: 'Java' },
   { name: 'sunil', language: '.net' }
];
// var developerss = [];
// for (var i = 0; i < developers.length; i++) {
//    if (developers[i].language === 'javascritp') {
//       developerss.push(developers[i]);
//    }
// }
// console.log(developerss);
const dev = developers.filter(developer => developer.language === 'javascritp');
console.log(dev);
