import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from "./weather";
import Display from "./ui";


const weather = new Weather("belen");
const ui = new Display();

const weatherInformation = () => {
  weather.weatherInformation()
  .then(results => {
    ui.displayInfo(results);
    console.log(results)
  })
  .catch(err => console.log(err));

}

weatherInformation();
