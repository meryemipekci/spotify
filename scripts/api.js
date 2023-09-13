import { renderSongs } from "./ui.js";

//yapılan istekler icin kullanılan ayarlar
const url =
  "https://shazam.p.rapidapi.com/charts/track?locale=tr-TR&listId=ip-country-chart-TR";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "aaa87057c5mshd59e724c7729e2fp1401ffjsnc9179aababe1",
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
};

export class API {
  constructor() {
    this.song = [];
  }

  // populer mzikleri getirir
  async getPopular() {
    const res = await fetch(url, options);
    const data = await res.json();
    this.songs = data.tracks;

    this.songs = data.tracks;
    //ekrana populer muzikleri listeler
    renderSongs(this.songs);
  }

  //arama methodu
  async searchMusic(query) {
    const res = await fetch(
      `'https://shazam.p.rapidapi.com/search?term=muslum${query}&locale=tr-TR&offset=0&limit=5';`,
      options
    );

    const data = await res.json();
    //veriyi istedigimiz jhale cevirme
    //song.track yerine song.a erisince
    const newData = data.tracks.hits.map((song) => ({
      ...song.track,
    }));
    this.song = newData;

    //aratilan sarkilari ekrana basma
    renderSongs(this.songs);
  }
}
