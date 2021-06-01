class Display {
  constructor() {
    this.city = document.getElementById("city-name");
    this.weatherMain = document.getElementById("weather-main");
    this.weatherDescription = document.getElementById("weather-description");
    this.icon = document.getElementById("weather-icon");
    this.temp = document.getElementById("weather-temp");
    this.feelsLike = document.getElementById("weather-feelsLike");
    this.humidity = document.getElementById("weather-humidity");
    this.tempMax = document.getElementById("weather-temp_max");
    this.tempMin = document.getElementById("weather-temp_min");
  }
 

  displayInfo(weather){
    const info = weather.weather[0];
    const fetchIcon = info.icon;
    
    const iconUrl = "http://openweathermap.org/img/wn/" + fetchIcon + ".png";
    
    this.city.innerHTML = `${weather.name} , ${weather.sys.country}.`; 
    this.weatherMain.innerHTML = info.main;
    this.weatherDescription.innerHTML = `Description: ${info.description}.` ;
    this.icon.setAttribute("src", iconUrl);
    this.temp.innerHTML =  `Temperature: ${weather.main.temp}&deg`;
    this.feelsLike.innerHTML = `Feels like: ${weather.main.feels_like}&deg`;
    this.humidity.innerHTML = `Humidity: ${weather.main.humidity}%`;
    this.tempMax.innerHTML = `Max temp at moment: ${weather.main.temp_max}&deg`;
    this.tempMin.innerHTML = `Min temp at moment: ${weather.main.temp_min}&deg`;
  }

}

export {Display as default}
