import React from "react";
import "./Podcasts.css"; // Підключаємо стилі

const podcasts = [
  {
    title: "НАСІРОВ | Корупція, суди та мобілізація. СПРАВЕДЛИВІСТЬ ПІД ПРИЦІЛОМ | Подкаст",
    url: "https://www.youtube.com/watch?v=m4Q52Cem5cU",
  },
  {
    title: "МІЛЬЙОНИ ДОЛАРІВ на готелі в Буковелі: лакшері життя колишніх ТОП-правоохоронців",
    url: "https://www.youtube.com/watch?v=TkWUNFB2IcM",
  },
  {
    title: "Як Офіс «приручив» опозицію: договорняки, бонуси і несподівані союзи у Раді",
    url: "https://www.youtube.com/watch?v=AuhneqQWFjk",
  },
  {
    title: "ЧЕРНИК: ВИДИХАЄМО! Розвіяно ГОЛОВНИЙ МІФ про атаки РФ. ПЕРЕВОРОТ у Кремлі ВЖЕ СКОРО",
    url: "https://www.youtube.com/watch?v=3nyvJn2Mzvc",
  },
  {
    title: "Операція Павутина: неймовірна атака на авіабази РФ!",
    url: "https://www.youtube.com/watch?v=NbmDqSuZSnI",
  },
];

function getYoutubeEmbedUrl(url) {
  const videoId = url.split("v=")[1];
  return `https://www.youtube.com/embed/${videoId}`;
}

function Podcasts() {
  return (
    <div className="podcast-container">
      <h1 className="podcast-title">Подкасти</h1>
      <div className="podcast-grid">
        {podcasts.map((podcast, index) => (
          <div key={index} className="podcast-card">
            <div className="video-wrapper">
              <iframe
                src={getYoutubeEmbedUrl(podcast.url)}
                title={podcast.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="podcast-caption">{podcast.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Podcasts;
