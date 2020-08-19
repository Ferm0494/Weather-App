import 'bootstrap';
import './assets/stylesheets/toggle.scss';
import './assets/stylesheets/index.scss';
import './assets/stylesheets/weatherBackgrounds.scss';
import {
  toggle,
  form, search,
} from './assets/js/components';
import weatherAttributes, {

} from './assets/js/weatherAttributes';
import {
  init,
  getResCity,
} from './assets/js/location';

import {
  renderWeatherComponentsC,
  renderWeatherComponentsF,
} from './assets/js/weatherComponents';


init();
// sun().then(x => {
//     console.log(x);
// });
toggle.addEventListener('change', () => {
  const data = JSON.parse(localStorage.getItem('data'));
  const values = weatherAttributes(data);
  if (toggle.checked) {
    renderWeatherComponentsF(values);
  } else {
    renderWeatherComponentsC(values);
  }
});

search.addEventListener('click', (e) => {
  e.preventDefault();
  getResCity(form.value);
});