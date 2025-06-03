import React from "react";

const newsLinks = [
  {
    title: "З полону повернувся журналіст Роман Борщ",
    url: "https://zaxid.net/z_polonu_povernuvsya_zhurnalist_i_vipusknik_lvivskogo_universitetu_roman_borshh_n1600843",
  },
  {
    title: "Редакторка УП звинуватила ОП у тиску на ЗМІ",
    url: "https://zaxid.net/redaktorka_ukrayinskoyi_pravdi_zvinuvatila_ofis_prezidenta_u_tisku_na_zmi_n1595329",
  },
  {
    title: "Журналістку Вікторію Рощину катували — Слідство.Інфо",
    url: "https://zaxid.net/zagiblu_v_rosiyskomu_poloni_zhurnalistku_viktoriyu_roshhinu_zhorstoko_katuvali_slidstvoinfo_n1605145",
  },
  {
    title: "Оголошено лауреатів Шевченківської премії 2025",
    url: "https://zaxid.net/v_ukrayini_ogolosili_laureativ_shevchenkivskoyi_premiyi_2025_n1605530",
  },
  {
    title: "Напад на Юрія Макарова — виконавчого продюсера Суспільного",
    url: "https://zaxid.net/na_vikonavchogo_prodyusera_suspilnogo_yuriya_makarova_skoyili_napad_n1608434",
  },
  {
    title: "Депутат програв суд за слово «мародер»",
    url: "https://zaxid.net/deputat_vid_slugi_narodu_obrazivsya_na_slovo_maroder_i_prograv_sud_aktivisttsi_ta_up_n1606618",
  },
  {
    title: "Українська редакція Радіо Свобода скорочує мовлення",
    url: "https://zaxid.net/ukrayinska_redaktsiya_radio_svoboda_skorochuye_movlennya_cherez_pripinennya_finansuvannya_n1608056",
  },
];

function Home() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Головна сторінка</h1>
      <ul className="space-y-4">
        {newsLinks.map((news, index) => (
          <li key={index} className="bg-white shadow-md rounded-lg p-4 hover:bg-purple-50 transition">
            <a
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 font-medium text-lg hover:underline"
            >
              {news.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
