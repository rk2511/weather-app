
const yargs = require('yargs');
const axios = require('axios');
const apikey = 'e9a937444e1bc7d855cfa3b800c4fdd7';
var argv = yargs
.options({
  a:{
    demand: true,
    alias: 'address',
    describe: 'address of the weather request',
    string: true
  }
})
.help()
.alias('help','h')
.argv;
//console.log(argv);
var addr = encodeURIComponent(argv.a);
var murl = `https://maps.googleapis.com/maps/api/geocode/json?address=${addr}`;
//console.log(murl);
axios.get(murl).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Invalid address');
  }
  var lat = response.data.results[0].geometry.location.lat;
  var long = response.data.results[0].geometry.location.lng;
  var wurl = `https://api.darksky.net/forecast/${apikey}/${lat},${long}`;
  console.log(response.data.results[0].formatted_address);
  return axios.get(wurl);
}).then((response) => {
var temperature = response.data.currently.temperature;
var apparentTemp = response.data.currently.apparentTemperature;
console.log(`It's currently ${temperature}. It feels like ${apparentTemp}.`);
}).catch((e) => {
  if(e.code === 'ENOTFOUND') {
    console.log('Cant connect to API');
  }
  console.log(e.message);
});
