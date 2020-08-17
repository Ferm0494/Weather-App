const weatherAttributes = (json) => ({
  icon: json.weather[0].icon,
  temperatureInCelc: () => `${(json.main.temp - 275.15).toFixed(2)}° C`,

  location: json.name,
  // humidity: json.main.humidity,
  tempMaxInC: () => `${(json.main.temp_max - 275.15).toFixed(2)}° C`,

  tempMaxInF: () => {
    const kelvin = json.main.temp_max;
    const farenheit = (((kelvin - 275.15) * 9) / 5) + 32;
    return `${farenheit.toFixed(2)}° F`;
  },
  tempMinInC: () => `${(json.main.temp_min - 275.15).toFixed(2)}° C`,

  tempMinInF: () => {
    const kelvin = json.main.temp_min;
    const farenheit = (((kelvin - 275.15) * 9) / 5) + 32;
    return `${farenheit.toFixed(2)}° F`;
  },
  timezone: () => {
    const date = new Date();
    const offset = json.timezone / 3600;
    date.setHours(date.getUTCHours() + offset);
    const time = `${date.getHours()}: ${date.getMinutes()}`;
    return time;
  },
  temperatureToFarenheit: () => {
    const kelvin = json.main.temp;
    const farenheit = (((kelvin - 275.15) * 9) / 5) + 32;
    return `${farenheit.toFixed(2)}° F`;
  },

});

export default weatherAttributes;