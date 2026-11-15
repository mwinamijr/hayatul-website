/** Facts about the institution, in one place. Change them here and every page follows. */
export const SITE = {
  name: "Hayatul Islamiya Complex",
  short: "Hayatul Islamiya",
  founded: 1998,
  location: "Bonga, Babati - Manyara",
  postal: "S.L.P. 507, Babati - Manyara",
  phones: ["+255 752 506 523", "+255 788 030 052"],
  email: "hayatulislamiyass@gmail.com",
  sis: "https://sis.hayatulislamiya.com",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Hayatul+Islamiya+Bonga+Babati",
  social: {
    facebook: "https://facebook.com/hayatulislamiya",
    instagram: "https://instagram.com/hayatulislamiya",
    x: "https://twitter.com/hayatulislamiya",
    youtube: "https://www.youtube.com/channel/UCgpGjY3Rd97l53n8r_sSwBQ",
  },
} as const;

export const telLink = (phone: string) => `tel:${phone.replace(/\s/g, "")}`;

export const NAV = [
  { label: "Mwanzo", to: "/" },
  { label: "Kuhusu", to: "/about" },
  {
    label: "Shule zetu",
    to: "/schools/primary",
    children: [
      { label: "Shule ya Awali na Msingi", to: "/schools/primary" },
      { label: "Sekondari: O-Level na A-Level", to: "/schools/secondary" },
    ],
  },
  { label: "Habari", to: "/news" },
  { label: "Afya", to: "/health" },
  { label: "Wasiliana nasi", to: "/contact" },
] as const;

export const LEVELS = [
  {
    level: "primary",
    title: "Shule ya Awali na Msingi",
    short: "Msingi",
    text: "Elimu ya awali hadi darasa la saba, kwa Kiswahili, pamoja na elimu ya dini.",
    to: "/schools/primary",
  },
  {
    level: "o_level",
    title: "Sekondari: O-Level",
    short: "O-Level",
    text: "Kidato cha kwanza hadi cha nne, kwa mtaala wa Wizara ya Elimu.",
    to: "/schools/secondary",
  },
  {
    level: "a_level",
    title: "Sekondari: A-Level",
    short: "A-Level",
    text: "Kidato cha tano na sita, michepuo ya sayansi, sanaa na biashara.",
    to: "/schools/secondary#a-level",
  },
] as const;

export const A_LEVEL_COMBINATIONS = ["PCM", "PCB", "PGM", "HGL", "HGK", "HKL", "EGM", "KLA", "HGE"];

export const O_LEVEL_SUBJECTS = [
  "Basic Mathematics",
  "English",
  "Kiswahili",
  "Physics",
  "Chemistry",
  "Biology",
  "Geography",
  "History",
  "Kiarabu",
  "Elimu ya Dini ya Kiislamu",
];

export const PRIMARY_SUBJECTS = ["Hisabati", "Sayansi", "Maarifa ya Jamii", "Kiswahili", "English"];

export const NURSERY_ACTIVITIES = ["Kuhesabu", "Kuandika", "Kusoma", "Sayansi kwa vitendo", "Michezo na sanaa"];

export const RELIGIOUS_SUBJECTS = [
  "Elimu ya Dini ya Kiislamu",
  "Lugha ya Kiarabu",
  "Kusoma Qur'an",
  "Kuhifadhi Qur'an",
  "Tafsiri ya Qur'an",
];
