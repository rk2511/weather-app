const request = require('request');
var geocodeAddress1 = (address) => {
  var addr = encodeURIComponent(address);
  return new Promise((resolve,reject) => {
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addr}`,
      json:true
    },(error,response,body) =>{
      if(error) {
        reject(error);
      } else if (body.status === "ZERO_RESULTS"){
        reject('Invalid address');
      } else if (body.status === "OK") {
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    });
  });
}



module.exports = {
  geocodeAddress1
}
