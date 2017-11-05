var asyncAdd = (a,b) => {
  return new Promise ((resolve,reject) => {
    setTimeout(() => {
      if(typeof a === 'number' && typeof b === 'number') {
        resolve (a+b);
      } else {
        reject('Invalid arguments');
      }
    },1500);
  });
};

asyncAdd(5,4).then((result) => {
  console.log(result);
  return asyncAdd(result,10);
}).then((res) => {
  console.log(res);
}).catch((error) => {
  console.log(error)
})
// var somePromise = new Promise((resolve,reject) => {
//   resolve('Promise successfully resolved');
//   reject('Promise failed');
// });
//
// somePromise.then((message) => {
//   console.log('Success', message);
// }, (errorMessage) => {
//   console.log('Error', errorMessage);
// });
