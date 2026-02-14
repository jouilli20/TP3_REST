// ===============================
// A) RANDOM USER API
// ===============================
function getRandomUser() {
  fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => {
      console.log("\n--- REPONSE RANDOMUSER COMPLETE ---");
      console.log(data);
    })
    .catch(err => console.error("Erreur RandomUser:", err.message));
}


// ===============================
// B) OPEN LIBRARY API
// ===============================
function searchBook() {
  fetch("https://openlibrary.org/search.json?q=harry+potter")
    .then(res => res.json())
    .then(data => {
      console.log("\n--- OPEN LIBRARY ---");
      console.log("Nombre de résultats :", data.numFound);
      console.log("Premier titre :", data.docs[0]?.title);
      console.log("Auteur :", data.docs[0]?.author_name?.[0]);
    })
    .catch(err => console.error("Erreur OpenLibrary:", err.message));
}


// ===============================
// C) NASA API
// ===============================
function getNasaImage() {
  fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(res => res.json())
    .then(data => {
      console.log("\n--- NASA APOD ---");
      console.log("Titre :", data.title);
      console.log("Date :", data.date);
      console.log("URL :", data.url);
    })
    .catch(err => console.error("Erreur NASA:", err.message));
}


// ===============================
// APPELS DES FONCTIONS
// ===============================
getRandomUser();
searchBook();
getNasaImage();
