const request = require('request');

const secretKeyDarkSky = 'c799816efe051ef93ac69075bcee0467';

const geocodeAddress = (address, callback) => {
  const encodedAddress = encodeURIComponent(address);

    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(encodedAddress)}`,
      json: true
    },(error, response, body) => {
      if (error) {
        callback('unable to connet to Google servers')
      } else if (body.status === 'ZERO_RESULTS') {
        callback('unable to find the address');
    } else if (body.status === 'OK') {
    callback(undefined, {
      address: body.results[0].formatted_address,
      latitude: body.results[0].geometry.location.lat,
      longitud: body.results[0].geometry.location.lng
    })
    }
  });

};

module.exports.geocodeAddress = geocodeAddress;