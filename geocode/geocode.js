const request = require('request');

var geocodeAddress = (address,callback) => {
  var addr = encodeURIComponent(address);
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addr}`,
    json: true
  }, (error,response,body) => {
    if(error){
      callback('Unable to connect to Google API');
    } else if (body.status === "ZERO_RESULTS"){
      callback('Invalid address');
    } else if (body.status === "OK") {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
  });
}

module.exports = {
  geocodeAddress
}
