import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from "./weather";


const weather = new Weather("Bogota");

weather.WeatherInformation()
  .then(results => {
    console.log(results);
  })
  .catch(err => console.log(err));