import "./style.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";


const buildWebsite = () => {
  Header();
  Main();
  Footer();
  getPhotos("beach");
};
const suggestionsContainer = document.getElementById('suggestions-container');

const getPhotos = async (keyword) => {
  const data = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${keyword}&per_page=20&client_id=Znc86gkmwpAZ4jDt5CeLwbOmijOTuXyr1dDa5FPeL8E`)
  const results = await data.json();
  const photos = results.results;
  printPhotos(photos);
};

buildWebsite();

const printPhotos = (photos) => {
  const container = document.querySelector("#results");
  const message = document.querySelector("#message");
  if (photos.length === 0) {
    container.innerHTML = "";
    message.innerText = "No se han encontrado resultados. Otras opciones que te pueden interesar:"
    const article = document.createElement("article")
    const button1 = document.createElement("button")
    button1.innerText = "Tendencias"
    button1.addEventListener("click", () => {
      getPhotos("outfits");
    })
    const button2 = document.createElement("button")
    button2.innerText = "Animales"
    button2.addEventListener("click", () => {
      getPhotos("animales");
    })
    const button3 = document.createElement("button")
    button3.innerText = "Paisajes"
    button3.addEventListener("click", () => {
      getPhotos("montañas");
    })
    message.appendChild(article)
    article.appendChild(button1)
    article.appendChild(button2)
    article.appendChild(button3)
  } else {
    container.innerHTML = "";
    message.textContent = "";
    for (const photo of photos) {
      const li = document.createElement("li");
      li.innerHTML = `
  <img src="${photo.urls.regular}" alt="${photo.alt_description}"/>
  `;
      container.appendChild(li);
    }
  }
};

document.querySelector("#searchBtn").addEventListener("click", () => {
  const value = document.querySelector("#searchInput").value;
  getPhotos(value);
  document.querySelector("#searchInput").value = "";
});
