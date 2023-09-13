//html den gelenler

export const elements = {
  list: document.querySelector(".list"),
  audio: document.querySelector("audio"),
  audioSource: document.querySelector("audio source"),
  playingInfo: document.querySelector(".playing .info"),
  form: document.querySelector("form"),
  title: document.querySelector(".songs, h2"),
};

//her bir muzik icin ekrana kart basar
export const renderSongs = (songs) => {
  // eskiden eklenenleri temizler
  elements.list.innerHTML = "";

  songs.forEach((song) => {
    const div = document.createElement("div");
    //class verme
    div.className = "card";

    //kart elemanina bazi verileri ekleme
    div.dataset.url = song.hub?.actions?.pop()?.uri;
    div.dataset.title = song.title;
    div.dataset.img = song.images.coverart;

    console.log(song);
    //icerigi belirleme
    div.innerHTML = `
    <figure>
    <img src=${song.images.coverart} />
    <div class="play">
      <i id="play-btn" class="bi bi-play-fill"></i>
    </div>
  </figure>

  <h4>${song.subtitle}</h4>
  <p>${song.title}</p>
  `;
    //html e gonderme
    elements.list.appendChild(div);
  });
};

// oynayan sarkilarin bilgilerini ekrana basar
export const renderPlayingInfo = (song) => {
  elements.playing.innerHTML = `
    <img 
    id="info-img"
     src=${song.img} />
    <div>
      <p>Su an oynatiliyor...</p>
      <h3>${song.title}</h3>
    </div>`;
};

//baslik metnini gunceller

export const updateTitle = (message) => {
  title.innerText = message;
};
