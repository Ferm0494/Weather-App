import "bootstrap";
import "./assets/stylesheets/toggle.scss"
import "./assets/stylesheets/index.scss";
import './assets/stylesheets/weatherBackgrounds.scss'
import {
    toggle,
}from "./assets/js/components"
import {

} from './assets/js/weatherAttributes'
import {
    init,
    getResCity
} from './assets/js/location';
import 
    weatherAttributes
 from './assets/js/weatherAttributes'
import{
   renderWeatherComponentsC,
  renderWeatherComponentsF
} from './assets/js/weatherComponents'
import {form,search} from './assets/js/components'

init()
    // sun().then(x => {
    //     console.log(x);
    // });
toggle.addEventListener('change',function(e){
    let data = JSON.parse(localStorage.getItem('data'));
    let values = weatherAttributes(data);
if(toggle.checked){
    renderWeatherComponentsF(values)
}else{
    renderWeatherComponentsC(values)
}
})

search.addEventListener('click',function(e){
    e.preventDefault();
    getResCity(form.value);
    

})