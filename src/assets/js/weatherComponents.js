import {
  glify,
  getIdOfGIF,
} from './gifs';
import {
  values,
  gifImg,
  form,
} from './components';

const renderWeatherComponentsC = (weather) => {
  values[1].innerHTML = weather.temperatureInCelc();
  values[2].innerHTML = weather.tempMaxInC();
  values[3].innerHTML = weather.tempMinInC();
};


const renderWeatherComponents = async (weather) => {
  const idGIF = getIdOfGIF(weather.icon);
  const icon = await glify(idGIF);
  gifImg.src = icon;
  form.value = weather.location;
  values[0].innerHTML = weather.timezone();
  renderWeatherComponentsC(weather);
  return true;
};


const renderWeatherComponentsF = (weather) => {
  values[1].innerHTML = weather.temperatureToFarenheit();
  values[2].innerHTML = weather.tempMaxInF();
  values[3].innerHTML = weather.tempMinInF();
};

export {
  renderWeatherComponents,
  renderWeatherComponentsF,
  renderWeatherComponentsC,
};