import Clear from "./images/clear.jpg";
import Cloud from "./images/cloud.png";
import Thunder from "./images/thunder.jpg";
import Mist from "./images/mist.jpg";
import Snow from "./images/snow.jpg";

class Display {
  constructor() {
    this.city = document.getElementById('city-name');
    this.weatherMain = document.getElementById('weather-main');
    this.weatherDescription = document.getElementById('weather-description');
    this.icon = document.getElementById('weather-icon');
    this.temp = document.getElementById('weather-temp');
    this.feelsLike = document.getElementById('weather-feelsLike');
    this.humidity = document.getElementById('weather-humidity');
    this.tempMax = document.getElementById('weather-temp_max');
    this.tempMin = document.getElementById('weather-temp_min');
  }

  displayInfo(weather) {
    const info = weather.weather[0];
    const fetchIcon = info.icon;

    const iconUrl = `https://openweathermap.org/img/wn/${fetchIcon}.png`;

    this.city.innerHTML = `${weather.name} , ${weather.sys.country}.`;
    this.weatherMain.innerHTML = info.main;
    this.weatherDescription.innerHTML = `Description: ${info.description}.`;
    this.icon.setAttribute('src', iconUrl);
    this.temp.innerHTML = `Temperature: ${weather.main.temp}`;
    this.feelsLike.innerHTML = `Feels like: ${weather.main.feels_like}`;
    this.humidity.innerHTML = `Humidity: ${weather.main.humidity}%`;
    this.tempMax.innerHTML = `Max temp at moment: ${weather.main.temp_max}`;
    this.tempMin.innerHTML = `Min temp at moment: ${weather.main.temp_min}`;

    if (info.main === 'Clouds') {
      document.body.style.backgroundImage =  `URL("${Cloud}")`;
    } else if (info.main === 'Clear') {
      document.body.style.backgroundImage = `URL("${Clear}")`;
    } else if (info.main === 'Mist') {
      document.body.style.backgroundImage = `URL("${Mist}")`;
    } else if (info.main === 'Snow') {
      document.body.style.backgroundImage = `URL("${Snow}")`;
    }  else {
      document.body.style.backgroundImage = `URL("${Thunder}")`;
    }
  }
}

export { Display as default };
