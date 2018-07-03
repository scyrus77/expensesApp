import * as firebase from 'firebase';
import moment from 'moment';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // child_removed
// database.ref('expenses')
//   .on('child_removed', (snapshot) => {
//     console.log('child_removed', snapshot.key, snapshot.val());
//   });
//
// // child_changed
// database.ref('expenses')
//   .on('child_changed', (snapshot) => {
//     console.log('child_changed', snapshot.key, snapshot.val());
//   });
//
// // child_added
// database.ref('expenses')
//   .on('child_added', (snapshot) => {
//     console.log('child_added', snapshot.key, snapshot.val());
//   });
//
// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log('expenses', expenses);
//   });
//

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log('expenses', expenses);
//   });

// database.ref('expenses').push({
//   description: 'Coffee',
//   note: 'was falling asleep',
//   amount: 5678,
//   createdAt: moment().subtract(5, 'hours').valueOf()
// });
// database.ref('expenses').push({
//   description: 'Diet Coke',
//   note: 'coffee didn\'t work',
//   amount: 150,
//   createdAt: moment().subtract(3, 'hours').valueOf()
// });
// database.ref('expenses').push({
//   description: 'Chipotle',
//   note: 'got humgry',
//   amount: 958,
//   createdAt: moment().subtract(1, 'hours').valueOf()
// });


// database.ref('notes/-LG7IATuP2_CVElYOm3O').remove();
// database.ref('notes/-LG7IATuP2_CVElYOm3O').update({
//   body: 'updated body'
// });


// database.ref('notes').push({
//   title: 'First Note',
//   body: 'This is my note'
// });
// database.ref('notes').push({
//     title: 'Other Note',
//     body: 'This is my other note'
// });


// const database = firebase.database();
// database.ref()
//   .on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   }, (e) => {
//     console.log('Error with data fetching', e);
//   });
//
// setTimeout(() => {
//   database.ref('job/company').set('Microsoft');
// }, 3500);


// const database = firebase.database();
// const onValueChange = database.ref()
//   .on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log('val changed', val);
//   }, (e) => {
//     console.log('Error with data fetching', e);
//   });
//
// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);
//
// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 5000);
//
// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);
//

// const database = firebase.database();
// database.ref('location/city')
//   .once('value')
//   .then( snapshot => {
//     const val = snapshot.val();
//     console.log('val fetched', val);
//   })
//   .catch((e) => {
//     console.log('Error Fetching data', e);
//   });


// database.ref().set({
//   name: 'Steve Cyrus',
//   age: 40,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Denver',
//     state: 'Colorado',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('Error', e);
// });

// database.ref('age').set(57);
// database.ref('location/city').set('San Jose');

// database.ref('attributes').set({
//   height: 180,
//   weight: 220
// }).then(() => {
//   console.log('2nd Data is saved');
// }).catch((e) => {
//   console.log('2nd Error', e);
// });

// database.ref().remove()
//   .then(() => {
//     console.log('remove completed');
//   })
//   .catch((e) => {
//     console.log('remove Error', e);
//   });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'seattle'
// });
//
