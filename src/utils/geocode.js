const request = require('request');
const API_KEY = require('../../apikey');

const geocode = (address, callback) => {
  const geoCodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?proximity=ip&types=place%2Cpostcode%2Caddress&access_token=${
    API_KEY.MAP_BOX_API_KEY
  }`;
  request({ url: geoCodeUrl, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to geolocation Service', undefined);
    } else if (body.features.length === 0) {
      callback(
        'Unable to find location. Try again with different location',
        undefined
      );
    } else {
      const longitude = body.features[0].center[0];
      const latitude = body.features[0].center[1];
      const location = body.features[0].place_name;
      callback(undefined, { longitude, latitude, location });
    }
  });
};

module.exports = geocode;
