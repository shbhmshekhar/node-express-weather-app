const request = require('request');
const API_KEY = require('../../apikey');

const forecast = (latitude, longitude, callback) => {
  const weatherServiceUrl = `http://api.weatherstack.com/current?access_key=${API_KEY.WEATHER_STACK_API_KEY}&query=${latitude},${longitude}`;
  request({ url: weatherServiceUrl, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather Service', undefined);
    } else if (body.error) {
      callback('Unable to find the location', undefined);
      console.log(weatherServiceUrl);
    } else {
      callback(
        undefined,
        `Temprature is ${body.current.temperature}°C outside with winds blowing at ${body.current.wind_speed} kmph with ${body.current.precip}% chance of rain`
      );
    }
  });
};

module.exports = forecast;
