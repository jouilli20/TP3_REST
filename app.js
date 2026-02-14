const API_KEY = "1aa3b3a2a30479c44d2b14e77bed9a07";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

function getWeatherData(city, callback) {
 const url = `${BASE_URL}?appid=${API_KEY}&q=${encodeURIComponent(city)}&units=metric&lang=fr`;


  fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error("Erreur HTTP: " + res.status);
      return res.json();
    })
    .then((weatherData) => callback(null, weatherData))
    .catch((error) => callback(error, null));
}
getWeatherData("Sousse", (err, data) => {
  if (err) {
    console.error("Erreur:", err.message);
    return;
  }

  const description = data.weather?.[0]?.description;
  const temperature = data.main?.temp;
  const humidite = data.main?.humidity;

  console.log("Ville :", data.name);
  console.log("Description :", description);
  console.log("Température :", temperature, "°C");
  console.log("Humidité :", humidite, "%");
});

