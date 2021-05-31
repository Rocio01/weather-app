class Display {
  constructor() {
    this.city = document.getElementById("city-name");
    this.weatherMain = document.getElementById("weather-main");
    this.weatherDescription = document.getElementById("weather-description");
    this.icon = document.getElementById("weather-icon");
  }
 

  displayInfo(weather){
    const info = weather.weather[0];
    const fetchIcon = info.icon;
    
    const iconUrl = "http://openweathermap.org/img/wn/" + fetchIcon + ".png";
    
    this.city.innerHTML = weather.name + " , " + weather.sys.country + "."; 
    this.weatherMain.innerHTML = info.main;
    this.weatherDescription.innerHTML = `Description: ${info.description}` ;
    this.icon.setAttribute("src", iconUrl);
  }

}

export {Display as default}
