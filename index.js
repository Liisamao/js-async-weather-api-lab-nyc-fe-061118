const API_KEY = "15c702583834f96c6f2ec5c6c4295eb9"
const BASE_URL = 'https://api.openweathermap.org/data/2.3/weather?'

function handleFormSubmit(event) {
  event.preventDefault();
  let city = document.getElementById("city").value
  getWeatherFromApi(city)
  //handle submit event
}

function getWeatherFromApi(city) {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + "&APPID=" + API_KEY + "&units=metric")
  .then(response => response.json())
  .then(displayWeather)
  //fetch current weather based on city
}

function displayWeather(weatherJson) {
  let temp = weatherJson.main.temp
  let tempRow = document.getElementById('temp')
  tempRow.innerHTML = temp
  //render current weather data to the DOM using provided IDs and json from API
}


function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
}

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
}

document.addEventListener('DOMContentLoaded', function() {
  let cityForm = document.getElementById("cityForm");
  cityForm.addEventListener("submit", handleFormSubmit)
  //add event listener here for form submission
})
