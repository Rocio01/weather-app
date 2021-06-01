import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Weather from "./weather";
import Display from "./ui";


const weather = new Weather("Bogota");
const ui = new Display();

const buttonCheck = document.getElementById("city-form");

const weatherInformation = () => {
  weather.weatherInformation()
  .then(results => {
    ui.displayInfo(results);
    console.log(results)
  })
  .catch(err => console.log(err));

}

buttonCheck.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = document.getElementById("city").value;
  weather.changeCity(city);
  weatherInformation();
});

weatherInformation();
