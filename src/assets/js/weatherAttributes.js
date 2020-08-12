const weatherAttributes = (json) => {
    return {
        icon: json.weather[0].icon,
        temperatureInCelc: () => {
            return json.main.temp - 275.15;
        },
        // humidity: json.main.humidity,
        temp_max: json.main.temp_max,
        temp_min: json.main.temp_min,
        timezone: () => {
            let date = new Date();
            let offset = json.timezone / 3600;
            let hours = date.getHours() + offset
            let time = `${hours}: ${date.getMinutes()}`
            return time
        },
        temperatureToFarenheit: () => {
            let kelvin = json.main.temp;
            let farenheit = (((kelvin - 273.15) * 9) / 5) + 32
            return farenheit;
        }
    }
}

export default weatherAttributes