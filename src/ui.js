class Display {
  constructor() {
    this.city = document.getElementById("city-name");
  }


  displayInfo(weather){
    this.city.innerHTML = weather.name + " , " + weather.sys.country + ".";
  }

}

export {Display as default}
