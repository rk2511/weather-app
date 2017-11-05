console.log('starting app..');

setTimeout ( () => {
  console.log('Testing async');
},2000);

setTimeout ( () => {
  console.log('Testing async without delay');
},0);

console.log('Ending app...');
