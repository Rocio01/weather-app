import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Weather from './weather';
import Display from './ui';

const weather = new Weather('Bogota', 'metric');
const ui = new Display();

const buttonCheck = document.getElementById('city-form');

const weatherInformation = () => {
  weather.weatherInformation()
    .then((results) => {
      ui.displayInfo(results);
    })
    .catch((e) => {
      console.log(e);
      alert('city not found');
    });
};

buttonCheck.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = document.getElementById('city').value;
  const unit = document.getElementById('unit').value;
  weather.changeValues(city, unit);
  weatherInformation();
});

weatherInformation();
