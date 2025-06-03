import React from "react";

const podcasts = [
  "https://www.youtube.com/watch?v=m4Q52Cem5cU",
  "https://www.youtube.com/watch?v=TkWUNFB2IcM",
  "https://www.youtube.com/watch?v=AuhneqQWFjk",
  "https://www.youtube.com/watch?v=3nyvJn2Mzvc",
  "https://www.youtube.com/watch?v=NbmDqSuZSnI",
];

function getYoutubeEmbedUrl(url) {
  const videoId = url.split("v=")[1];
  return `https://www.youtube.com/embed/${videoId}`;
}

function Podcasts() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Подкасти</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {podcasts.map((url, index) => (
          <div key={index} className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src={getYoutubeEmbedUrl(url)}
              title={`Podcast ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Podcasts;
