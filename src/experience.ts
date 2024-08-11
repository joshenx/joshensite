import dayjs from "dayjs";

interface WorkExperience {
  company: string;
  companyLink?: string;
  position: string;
  startYear: number;
  endYear: number | null;
  startMonth: string;
  endMonth: string | null;
  responsibilities: string[];
}

export const experiences: WorkExperience[] = [
  {
    company: "Sea Limited",
    companyLink: "https://www.sea.com/",
    position: "Software Engineer (Frontend Web)",
    startYear: 2024,
    endYear: null,
    startMonth: "June",
    endMonth: null,
    responsibilities: [
      "Spearheaded core product features for Lingosnap, an iOS mobile app to aid Japanese-learning built on React Native, Typescript, Expo, NextJS, Storybook, Jotai, tRPC, Drizzle, Supabase, Jest, Detox.",
      "Singlehandedly designed and implemented user authentication, RevenueCat in-app purchases, enabling initial monetization of product and facilitating seamless and successful transactions from users.",
    ],
  },
  {
    company: "Lalia SG",
    companyLink: "https://www.lingosnap.co/",
    position: "Full-Stack Software Engineer Intern",
    startYear: 2023,
    endYear: 2024,
    startMonth: "December",
    endMonth: "May",
    responsibilities: [
      "Spearheaded core product features for Lingosnap, an iOS mobile app to aid Japanese-learning built on React Native, Typescript, Expo, NextJS, Storybook, Jotai, tRPC, Drizzle, Supabase, Jest, Detox.",
      "Singlehandedly designed and implemented user authentication, RevenueCat in-app purchases, enabling initial monetization of product and facilitating seamless and successful transactions from users.",
    ],
  },
  {
    company: "Autodesk",
    companyLink: "https://www.autodesk.com/",
    position: "Software Engineer Intern",
    startYear: 2023,
    endYear: 2023,
    startMonth: "January",
    endMonth: "June",
    responsibilities: [
      "Optimised core Fusion 360 cloud services in C++ and Typescript, achieving a 98.7% workflow success rate.",
      "Initiated and drove the full-cycle development of innovative cross-platform UX features, leveraging on existing RESTful APIs to deploy refined solutions.",
      "Expedited issue resolution times by proficiently debugging user errors, singlehandedly presenting findings and reports to senior engineers and architects across North America and APAC regions.",
    ],
  },
  {
    company: "The 100 Club SG",
    companyLink: "https://www.the100club.io/",
    position: "Full-Stack Software Engineer",
    startYear: 2022,
    endYear: 2022,
    startMonth: "June",
    endMonth: "December",
    responsibilities: [
      "Developed ReactJS MPA with Typescript, Material-UI, Bootstrap, Typeform, spearheading the blogs page.",
      "Conceptualised and executed ‘My First 100’, weekly startup stories spotlighting Singaporean founders, skyrocketing social media presence by 300% on LinkedIn and 200% on Telegram.",
      "Devised and implemented sophisticated Python-based automation utilities, streamlining extraction and transformation of interview data from Google Docs into structured JSON, enhancing workflow efficiency.",
    ],
  },
];
