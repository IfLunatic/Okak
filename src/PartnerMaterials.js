import React from "react";
import "./Partners.css";

import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.avif";
import img5 from "./assets/5.avif";

const partnerLinks = [
  {
    title: "Звільнення журналістів і медіа від відповідальності — 3 новели",
    url: "https://unba.org.ua/publications/9918-zvil-nennya-zhurnalistiv-i-media-vid-vidpovidal-nosti-3-noveli-yaki-varto-znati.html",
    image: img1,
  },
  {
    title: "Вироки за злочини проти журналістів у 2024 році — аналіз",
    url: "https://imi.org.ua/monitorings/vyroky-za-zlochyny-proty-zhurnalistiv-u-2024-rotsi-umovni-terminy-shtrafy-ta-tyazhki-pokarannya-i66025",
    image: img2,
  },
  {
    title:
      "Журналістика в умовах війни: яким був 2023 рік для чернівецьких медійників",
    url: "https://imi.org.ua/blogs/zhurnalistyka-v-umovah-vijny-yakym-buv-2023-j-dlya-chernivetskyh-medijnykiv-i58220",
    image: img3,
  },
  {
    title: "Як Зеленський змінив риторику: текст Української правди",
    url: "https://www.pravda.com.ua/articles/2025/04/16/7507756/",
    image: img4,
  },
  {
    title: "Репортаж з фронту інформаційної війни: медіа й правда",
    url: "https://www.pravda.com.ua/articles/2025/02/21/7499346/",
    image: img5,
  },
];

function Partners() {
  return (
    <div className="partners-container">
      <h1 className="partners-title">Партнерські матеріали</h1>
      <div className="partners-grid">
        {partnerLinks.map((item, index) => (
          <div className="partner-card" key={index}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <img
                src={item.image}
                alt={item.title}
                className="partner-image"
              />
              <div className="partner-caption">{item.title}</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;
