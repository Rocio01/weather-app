import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from "./weather";
import Display from "./ui";


const weather = new Weather("Bogota");
const ui = new Display();

const weatherInformation = () => {
  weather.weatherInformation()
  .then(results => {
    ui.displayInfo(results);
  })
  .catch(err => console.log(err));

}

weatherInformation();
