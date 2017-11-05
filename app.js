
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');
const promise = require('./playground/promise2.js');
var argv = yargs
.options({
  a:{
    demand: true,
    alais: 'address',
    describe: 'address of the weather request',
    string: true
  }
})
.help()
.alias('help','h')
.argv;

// geocode.geocodeAddress(argv.a, (errorMessage,results) => {
//   if(errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results.address,undefined,2));
//     //13.0635202,80.2234146
//     weather.getWeather(results.latitude,results.longitude,(errorMessage,weatherResults) => {
//       if(errorMessage) {
//         console.log(errorMessage);
//       } else {
//         //console.log(JSON.stringify(weatherResults,undefined,2));
//         console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemp}.`)
//       }
//
//     });
//   }
// });

promise.geocodeAddress1(argv.a).then((result) => {
console.log(JSON.stringify(result,undefined,2));
}, (error) => {
console.log(error);
});

//promise.geocodeAddress1(argv.a);
