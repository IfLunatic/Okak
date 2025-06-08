import React from "react";
import "./MediaLaws.css";

function MediaLaws() {
  return (
    <div className="media-laws-container">
      <h1>Закони медіа</h1>
      <ul>
        <li>
          <a
            href="https://www.unian.ua/politics/verhovna-rada-uhvalila-noviy-zakon-pro-zmi-detali-12884721.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Верховна Рада ухвалила новий закон про ЗМІ: деталі
          </a>
        </li>
        <li>
          <a
            href="https://detector.media/community/article/238149/2025-02-12-pro-vidpovidalnist-mediynykiv-voiennyy-aspekt-2025/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Про відповідальність медійників: воєнний аспект 2025
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MediaLaws;
