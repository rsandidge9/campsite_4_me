console.log("javascript connected!");

const carousel = new bootstrap.Carousel("#homeCarousel", {
  interval: 2000,
  pause: false,
});

// when the pause button is clicked, pause the carousel
const carouselPause = document.getElementById("carouselPause");
carouselPause.addEventListener("click", function () {
  console.log("pausing the carousel");
  carousel.pause();
});

// when the play button is clicked, begin cycling through the images
const carouselPlay = document.getElementById("carouselPlay");
carouselPlay.addEventListener("click", function () {
  console.log("cycle the carousel");
  carousel.cycle();
});
async function fetchWeather() {
  const apiKey = process.env.OPEN_WEATHER_API_KEY;
  console.log(apiKey);
  const city = "Paradise City";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayWeather(data);
    console.log(data);
  } catch (error) {
    console.error("There was an error!", error);
  }
}
function displayWeather(objectJSON) {
  let temp = objectJSON.main.temp;
  let weatherDescription = objectJSON.weather[0].description;
  let icon = objectJSON.weather[0].icon;
    console.log(temp, weatherDescription, icon);
    
  const image = document.createElement("img");
  image.src = `https://openweathermap.org/img/w/${icon}.png`;
  document.querySelector("#weather-icon").appendChild(image);
  document.querySelector("#weather-temp").textContent = `${temp}\u00B0`;
  document.querySelector("#weather-description").textContent = weatherDescription;
}

//help from ai
// function displayWeather(objectJSON) {
//   if (objectJSON && objectJSON.main && objectJSON.weather) {
//     let temp = objectJSON.main.temp;
//     let weatherDescription = objectJSON.weather[0].description;
//     let icon = objectJSON.weather[0].icon;
//     console.log(temp, weatherDescription, icon);

//     const image = document.createElement("img");
//     image.src = `https://openweathermap.org/img/w/${icon}.png`;
//     document.querySelector("#weather-icon").appendChild(image);
//     document.querySelector("#weather-temp").textContent = `${temp}\u00B0`;
//     document.querySelector("#weather-description").textContent =
//       weatherDescription;
//   } else {
//     console.error("Invalid data received from API");
//   }
// }

fetchWeather();
