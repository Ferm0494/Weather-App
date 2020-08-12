import {
    glify,
    getIdOfGIF
} from './gifs'
import {
    values,
    gifImg
} from './components'



const renderWeatherComponents = async(weather) => {
    console.log(weather.icon);
    let idGIF = getIdOfGIF(weather.icon)
    let icon = await glify(idGIF);
    gifImg.src = icon;
    values[0].innerHTML = weather.timezone();
    values[1].innerHTML = weather.temperatureInCelc();
    values[2].innerHTML = weather.temp_max;
    values[3].innerHTML = weather.temp_min;
    return true;


}

export default renderWeatherComponents