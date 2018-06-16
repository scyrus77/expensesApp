///////////////////// Object Destructuring /////////////////////

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     // name: 'Penguin'
//   }
// };
// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

// console.log('desctructring');
//
// const person = {
//   name: 'Andrew',
//   age: 26,
//   location: {
//     city: 'Philadelphia',
//     temp: 92
//   }
// };
//
// console.log(`${person.name} is ${person.age}`);
//
// const { name, age } = person;
// console.log(`${name} IS ${age}`);
//
// if (person.location.city && person.location.temp) {
//   console.log(`It's ${person.location.temp} in ${person.location.city}`);
// }
//
// const {temp, city} = person.location;
//
// if (city && temp) {
//   console.log(`IT's ${temp} IN ${city}`);
// }

///////////////////// Array Destructuring /////////////////////

// const address = ['1299 S. Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// console.log(`You are in ${address[1]} ${address[2]}`);

// const [street, city, state, zip] = address;
// console.log(`You are in ${city} ${state}`);
// const [,, state] = address;
// console.log(`You are in ${state}`);
// const [,, state,,country='USA'] = address;
// console.log(`You are in ${state} ${country}`);


const item = ['Coffee (Hot)', '$2.00', '$2.50', '$2.75', ];
const [ name,,priceMedium ] = item;
console.log(`${name} costs ${priceMedium}`)


