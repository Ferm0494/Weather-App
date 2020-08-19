import {
  OPEN_WEATHER_API_KEY,
} from './config/secrets';

import {
  container,
  spinner,
} from './components';

import
weatherAttributes
  from './weatherAttributes';

import { renderWeatherComponents } from './weatherComponents';

const loading = () => {
  container.classList.add('d-none');
  spinner.classList.remove('d-none');
};

const doneLoading = () => {
  spinner.classList.add('d-none');
  container.classList.remove('d-none');
};

const getLocation = async () => {
  if (navigator.geolocation) {
    const position = await new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition((pos) => {
        resolve(pos);
      });
    });
    return position;
  }
  return null;
};


const init = async () => {
  const position = await getLocation();
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${OPEN_WEATHER_API_KEY}`);
  const json = await response.json();
  localStorage.setItem('data', JSON.stringify(json));
  const selectedAttributes = weatherAttributes(json);

  renderWeatherComponents(selectedAttributes).then(() => {
    doneLoading();
  });
};


const getResCity = async (city) => {
  loading();
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_API_KEY}`);
  const json = await response.json();
  localStorage.setItem('data', JSON.stringify(json));
  const selectedAttributes = weatherAttributes(json);
  renderWeatherComponents(selectedAttributes).then(() => {
    doneLoading();
  });
};

export {
  init,
  getResCity,
};