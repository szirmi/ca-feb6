
const p = new Promise(function (resolve, reject) {
  console.log('start');
  setTimeout(function() {
    resolve('hello');
  }, 2000);
});

p.then((value) => {
  console.log(value);
  return new Promise(function (resolve, reject) {
    console.log('1. then');
    setTimeout(function() {
      resolve('1. then resolve - 2.then');
    }, 2000);
  });
})
.then((value) => {
  console.log(value);
  return Promise.reject(new Error('NO MORE PROMISE'));
})
.catch((err) => {
  throw err;
})
.catch((err) => console.log('ERROR 2'))