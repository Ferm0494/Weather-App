import {
    glify,
    getIdOfGIF
} from './gifs'
import {
    values,
    gifImg,
    form
} from './components'



const renderWeatherComponents = async(weather) => {
    let idGIF = getIdOfGIF(weather.icon)
    let icon = await glify(idGIF);
    gifImg.src = icon;
    form.value = weather.location
    values[0].innerHTML = weather.timezone();
    values[1].innerHTML = weather.temperatureInCelc();
    values[2].innerHTML = weather.tempMaxInC();
    values[3].innerHTML = weather.tempMinInC();
    return true;


}

export default renderWeatherComponents