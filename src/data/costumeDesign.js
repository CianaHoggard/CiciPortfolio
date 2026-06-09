const base = import.meta.env.BASE_URL;

export const costumeDesign = [
  {
    id: "unfortunately-ashly",
    title: "Unfortunatly Ashly",
    role: "Costume Designer",
    year: "2016",
    category: "costume-design",
    description: "Season 1 / Buzzfeed",
    section: "Costume Design",
    cover: `${base}covers/UA.jpg`,
    images: [
      `${base}work/unfortunatly-ashly/ua1.jpg`,
      `${base}work/unfortunatly-ashly/ua2.jpg`,
      `${base}work/unfortunatly-ashly/ua3.jpg`,
      `${base}work/unfortunatly-ashly/ua4.jpg`,
      `${base}work/unfortunatly-ashly/ua5.jpg`,
      `${base}work/unfortunatly-ashly/ua6.jpg`,
      `${base}work/unfortunatly-ashly/ua7.jpg`,
      `${base}covers/uacover1.jpg`
    ],
    trailer: [
      "https://www.youtube.com/embed/11u12irGuH0?si=K1vwinNeF-_MsJNM",
    ]

  },
  {
    id: "asteroid-vs-earth",
    title: "Asteroid vs. Earth",
    role: "Costume Designer",
    category: "costume-design",
    description: "Netflix",
    section: "Costume Design",
    cover: `${base}covers/AE.jpg`,
    images: [
      `${base}work/asteroid-vs-earth/AE2.jpg`,
      `${base}work/asteroid-vs-earth/AE3.jpg`,
      `${base}work/asteroid-vs-earth/AE4.jpg`,
    ],
    trailer: [
      "https://www.youtube.com/embed/HIksMkGC6Xo?si=ykOaOlZvm9fgAz94",
    ]

  },
  {
    id: "option-zero",
    title: "Option Zero",
    role: "Costume Designer",
    category: "costume-design",
    section: "Costume Design",
    cover: `${base}covers/OZ.jpg`,
    trailer: [
      "https://www.youtube.com/embed/NXlJJ3ExLhI?si=AusMGYSJ2pel6b8z",
    ]
  },
];
