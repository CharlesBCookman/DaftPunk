import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Music from './Daft-Punk';


function getMusic() {
  Music.getMusic()
    .then(function (response) {
      if (response.data) {
        printElements(response);
      } else {
        printError(response);
      }
    });
}


function printElements(response) {
  console.log(response);
}

function printError(error, city) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the weather data for ${city}: 
  ${error}.`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  getMusic();

}

window.addEventListener("load", function () {
  document.querySelector('#main').addEventListener("click", handleFormSubmission);
});