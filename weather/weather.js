const request = require('request');
const apikey = 'e9a937444e1bc7d855cfa3b800c4fdd7';
var getWeather = (lat,long,callback) => {
  request({
    url: `https://api.darksky.net/forecast/${apikey}/${lat},${long}`,
    json:true
  },
  (error,response,body) => {
    if(!error && response.statusCode === 200) {
      callback(undefined,{
        temperature: body.currently.temperature,
        apparentTemp: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather data');
    }

  });
}

module.exports = {
  getWeather
}
