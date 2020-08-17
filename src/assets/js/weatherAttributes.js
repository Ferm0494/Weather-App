const weatherAttributes = (json) => {
    return {
        icon: json.weather[0].icon,
        temperatureInCelc: () => {
            return (json.main.temp - 275.15).toFixed(2) + "° C";
        },

        location: json.name,
        // humidity: json.main.humidity,
        tempMaxInC: () => {
            return (json.main.temp_max - 275.15).toFixed(2) + "° C"
        },
        tempMinInC: () => {
            return (json.main.temp_min - 275.15).toFixed(2) + "° C"
        },
        timezone: () => {
            let date = new Date();
            let offset = json.timezone / 3600;
            console.log(`This is hours: ${date.getHours()}`)
            date.setHours(date.getUTCHours() + offset);
            let time = `${date.getHours()}: ${date.getMinutes()}`
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