/*comman js example
var cities = [
   { name: 'Dharan', state: '1' },
   { name: 'janakpur', state: '2' },
   { name: 'Kathmandu', state: '3' },
   { name: 'Butawal', state: '4' },
   { name: 'Napaljung', state: '6' },
   { name: 'Jumla', state: '7' }
];
var city;
for (var i = 0; i < cities.length; i++) {
   if (cities[i].name === 'janakpur') {
      city = cities[i];
   }
}
console.log('city', city);
*/
// using ES6
const cities = [
   { name: 'Dharan', state: '1' },
   { name: 'janakpur', state: '2' },
   { name: 'Kathmandu', state: '3' },
   { name: 'Butawal', state: '4' },
   { name: 'Napaljung', state: '6' },
   { name: 'Jumla', state: '7' }
];
let city = cities.find(city => city.name === 'janakpur');
console.log(city);
