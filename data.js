const BASE_PATH = import.meta.env.BASE_URL || `/JualRumahTanahRuko/`;

export default [
  {
    id: 1,
    images: [
      {
        src: `${BASE_PATH}images/Cemara/image1.jpg`,
        alt: "kavling murah Pekanbaru perumahan pemda",
      },
      {
        src: `${BASE_PATH}images/Cemara/image2.jpg`,
        alt: "tanah kavling dijual di Pekanbaru",
      },
      {
        src: `${BASE_PATH}images/Cemara/image3.jpg`,
        alt: "kavling perumahan elit Pekanbaru",
      },
      {
        src: `${BASE_PATH}images/Cemara/image4.jpg`,
        alt: "kavling luas Pekanbaru murah",
      },
    ],
    videos: [
      { src: `${BASE_PATH}videos/Cemara/video1.mp4`, type: "video/mp4" },
    ],
    title: "Kavling Murah Pekanbaru – Investasi Tanah 540 m²",
    city: "Pekanbaru, Riau",
    googleMapsLink: "https://maps.app.goo.gl/NcrfNhouVWTedPyR8",
    dates: new Date("2025-08-07T12:30:00").toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    text: "Dijual kavling murah di Pekanbaru—investasi tanah ideal dalam perumahan pemda. Luas 540 m², cocok untuk bangun rumah atau usaha. Harga kompetitif, lokasi strategis.",
  },
  {
    id: 2,
    images: [
      {
        src: `${BASE_PATH}images/Ruko/1.jpg`,
        alt: "ruko prospek investasi Sorek Pelalawan",
      },
      {
        src: `${BASE_PATH}images/Ruko/2.jpg`,
        alt: "ruko disewakan pusat kota Sorek",
      },
      {
        src: `${BASE_PATH}images/Ruko/3.jpg`,
        alt: "ruko lokasi strategis Sorek",
      },
      {
        src: `${BASE_PATH}images/Ruko/4.jpg`,
        alt: "bangun mini hotel ruko Sorek",
      },
    ],
    title: "Jual Ruko 5 Pintu Sorek – Strategis & Prospektif",
    city: "Sorek, Pelalawan, Riau",
    googleMapsLink:
      "https://www.google.com/maps/place/0%C2%B007'38.0%22N+102%C2%B004'28.8%22E",
    dates: new Date("2025-08-07T12:30:00").toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    text: "Investasi Ruko di pusat kota Sorek—5 pintu, prospek tinggi, disewakan ramai. Cocok bangun mini hotel atau usaha komersial. Harga kompetitif, lokasi premium.",
  },
  {
    id: 3,
    images: [
      {
        src: `${BASE_PATH}images/Solok/Rumahbenteng1.webp`,
        alt: "rumah di pusat kota Solok hitung harga tanah",
      },
      {
        src: `${BASE_PATH}images/Solok/Rumahbenteng2.webp`,
        alt: "rumah unik Solok bulat dijual tanahnya",
      },
    ],
    videos: [
      { src: `${BASE_PATH}videos/Solok/rumahsolok.mp4`, type: "video/mp4" },
    ],
    title: "Rumah Unik Solok – Hitung Harga Tanah Depan Polres",
    city: "Kota Solok, Sumatera Barat",
    googleMapsLink: "https://maps.app.goo.gl/9Q37cVp1vYbpK8PZA",
    dates: new Date("2025-08-07T12:30:00").toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    text: "Rumah unik di pusat kota Solok—jual harga tanah, bangunan gratis. Letak strategis di depan Polres, dekat sekolah. Ideal untuk investasi atau hunian eksklusif.",
  },
];
