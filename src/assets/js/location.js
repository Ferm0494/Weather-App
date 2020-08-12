import {
    OPEN_WEATHER_API_KEY
} from './config/secrets'

import {
    container,
    spinner
} from './components'

import
weatherAttributes
from './weatherAttributes'

import renderWeatherComponents from './weatherComponents'

const loading = () => {
    container.classList.add('d-none');
    spinner.classList.remove('d-none');
}

const doneLoading = () => {
    spinner.classList.add('d-none')
    container.classList.remove('d-none')
}

const init = async() => {

    let position = await getLocation()
    let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${OPEN_WEATHER_API_KEY}`)
    let json = await response.json()
    let selectedAttributes = weatherAttributes(json);
    renderWeatherComponents(selectedAttributes).then(res => {
        doneLoading()
    })

}

const getLocation = async() => {
    if (navigator.geolocation) {
        let position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((pos) => {
                resolve(pos)
            })
        })
        return position
    } else {
        console.log(`Not avaible...`);
    }
}

export {
    init
}