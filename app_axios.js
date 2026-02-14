const axios = require("axios");

const API_KEY = "1aa3b3a2a30479c44d2b14e77bed9a07";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

function getWeatherData(city, callback) {
  const url = `${BASE_URL}?appid=${API_KEY}&q=${encodeURIComponent(city)}&units=metric&lang=fr`;

  axios.get(url)
    .then((response) => callback(null, response.data))
    .catch((error) => callback(error, null));
}

getWeatherData("Sousse", (err, data) => {
  if (err) {
    console.error("Erreur:", err.message);
    return;
  }

  console.log("Ville :", data.name);
  console.log("Description :", data.weather?.[0]?.description);
  console.log("Température :", data.main?.temp, "°C");
  console.log("Humidité :", data.main?.humidity, "%");
});
