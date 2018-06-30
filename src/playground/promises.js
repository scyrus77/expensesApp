const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Steve',
      age: 40
    });
    // reject('Something went wrong');
  }, 1500);
});

console.log('before');

promise.then( data => {
  console.log('1', data);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is my other promise resolved.');
    }, 1500);
  });

}).then((data) => {
  console.log('does this run?',data);
}).catch( error => {
  console.log('error', error);
});
// promise.then( data => {
//   console.log('1', data);
// }, error => {
//   console.log(error);
// });

console.log('after');

