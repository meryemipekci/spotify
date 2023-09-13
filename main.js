import { API } from "./scripts/api.js";
import { elements, renderPlayingInfo, updateTitle } from "./scripts/ui.js";

//api classtan bir ornek olusturma
const api = new API();

//sayfa yuklendigi anda api e istek atar
//populer muzikleri listeler
document.addEventListener(
  "DOMContentLoaded",
  async () => await api.getPopular()
);

//parametre olarak aldıgı muzigi calar
const playMusic = (url) => {
  // muzigin url html aktarma
  elements.audioSource.src = url;

  //audio elementinin muzigi yuklemesini sagladik
  elements.audio.load();
  //muzigi oynatir
  elements.audio.play();
};

// listede tiklamalarda calisir

const handleClick = (e) => {
  if (e.target.id === "play-btn") {
    //kapsayici kart elemanina erisme
    const parent = e.target.closest(".card");

    console.log(parent.dataset);
    // muzigi calar
    playMusic(parent.dataset.url);
  }
};

//liste alanindaki tıklamalari izler
document.addEventListener("click", handleClick);

//fotoyu dondurur
const animatePhoto = (e) => {
  document.querySelector(".info img");
  console.log(animatePhoto);
  img.className = "animate";
};

const stopAnimation = (e) => {
  document.querySelector(".info img");
  img.classList.remove("animate");
};

//muzıgıin calma olayını izleme
elements.audio.addEventListener("play", animatePhoto);
elements.audio.addEventListener("pause", stopAnimation);

// form olaylarini izleme

elements.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = e.target[0].value;
  if (!query) return;

  //basligi uncelle
  updateTitle(`${query} icin sonuclar`);

  //aratilan kelimeyle eslesen muzikleri ceker
  api.searchMusic(query);
});
