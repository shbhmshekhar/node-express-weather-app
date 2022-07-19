console.log('Client side JS loaded');

// const baseURL = 'http://localhost:3000/';

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const forecastmsg = document.querySelector('#msg-1');
const errMsg = document.querySelector('#msg-2');

weatherForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const location = search.value;

  forecastmsg.textContent = 'Loading...';
  const response = await fetch(`/weather?address=${location}`);
  const data = await response.json();
  if (data.error) {
    forecastmsg.textContent = '';
    errMsg.textContent = '';
    errMsg.textContent = data.error;
  } else {
    forecastmsg.textContent = '';
    errMsg.textContent = '';
    errMsg.textContent = data.location;
    forecastmsg.textContent = data.forecast;
  }
  // console.log('test', location);
});
