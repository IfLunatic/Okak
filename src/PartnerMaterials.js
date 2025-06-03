import React from "react";

const partnerLinks = [
  {
    title: "Звільнення журналістів і медіа від відповідальності — 3 новели",
    url: "https://unba.org.ua/publications/9918-zvil-nennya-zhurnalistiv-i-media-vid-vidpovidal-nosti-3-noveli-yaki-varto-znati.html",
  },
  {
    title: "Вироки за злочини проти журналістів у 2024 році — аналіз",
    url: "https://imi.org.ua/monitorings/vyroky-za-zlochyny-proty-zhurnalistiv-u-2024-rotsi-umovni-terminy-shtrafy-ta-tyazhki-pokarannya-i66025",
  },
  {
    title: "Журналістика в умовах війни: яким був 2023 рік для чернівецьких медійників",
    url: "https://imi.org.ua/blogs/zhurnalistyka-v-umovah-vijny-yakym-buv-2023-j-dlya-chernivetskyh-medijnykiv-i58220",
  },
  {
    title: "Як Зеленський змінив риторику: текст Української правди",
    url: "https://www.pravda.com.ua/articles/2025/04/16/7507756/",
  },
  {
    title: "Репортаж з фронту інформаційної війни: медіа й правда",
    url: "https://www.pravda.com.ua/articles/2025/02/21/7499346/",
  },
];

function Partners() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Партнерські матеріали</h1>
      <ul className="space-y-4">
        {partnerLinks.map((item, index) => (
          <li key={index} className="bg-white shadow-md rounded-lg p-4 hover:bg-blue-50 transition">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 font-medium text-lg hover:underline"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Partners;
