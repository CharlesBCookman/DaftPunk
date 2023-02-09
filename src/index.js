import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Music from './Daft-Punk';


function getMusic() {
  Music.getTop5()
    .then(function (response) {
      if (response.data) {
        printElements(response);
      } else {
        printError(response);
      }
    });
}


function printElements(response) {
  for (let i = 0; i < response.data.length; i++) {
    let pEl = document.createElement("p");
    pEl.innerText = response.data[i].title;
    console.log(response.data[i].title);
    document.querySelector("#top5-div").append(pEl);

  }
}

function printError() {
  alert('something went wrong');
}

function handleFormSubmission() {
  getMusic();
}

window.addEventListener("load", function () {
  if (window.location.href.match('top5.html') != null) {
    handleFormSubmission();

  }

  // document.querySelector('#top5body').addEventListener("load", handleFormSubmission);

});