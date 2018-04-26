const request = require('request');

const getWeather = (lat, lng, callback) => {
  console.log('lat', lat);
  console.log('lng', lng);
  request({
    url: `https://api.darksky.net/forecast/c799816efe051ef93ac69075bcee0467/${lat},${lng}`,
    json: true
  },(error, response, body) => {
    // console.log('entra', response);
    if (error) {
      callback('unable to connet to Forecast.io server');
    } else if(response.statusCode === 400) {
    callback('unable to fetch weather');
  } else if (response.statusCode === 200) {
    callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      }
      );
  }
});
}

module.exports.getWeather = getWeather;