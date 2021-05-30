class Weather {
  constructor(city) {
    this.apiKey = "ca60cb74799b94c82b7e12865a1489c2";
    this.city = city;
    this.unit = "C";
  }

  async WeatherInformation() {
    const response =  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=${this.unit}&APPID=${this.apiKey}`,
    { mode: 'cors' });
    const information = await response.json();
    return information;
  }

}

export {Weather as default};