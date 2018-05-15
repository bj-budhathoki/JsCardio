// var arr = [3, 4, 6, 5, 6, 2, 7, 5];
// for (var i = 0; i < arr.length; i++) {
//    arr[i] = arr[i] * 2;
// }
/*console.log(arr);
const arr = [3, 4, 6, 5, 6, 2, 7, 5];
arr.map(data => console.log(data * 2));
*/
const airlineData = [
   { carrier: 'BudhaAir', destination: 'phokhara', price: 3000 },
   { carrier: 'TaaraAir', destination: 'phokhara', price: 2500 },
   { carrier: 'YatiAir', destination: 'phokhara', price: 3200 },
   { carrier: 'nepalAir', destination: 'phokhara', price: 35000 }
];
airlineData.map(data => console.log(data.price));
