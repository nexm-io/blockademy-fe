import localFont from "next/font/local";
import IconBlockchain from "@/public/icons/blockchain.svg";
import IconBackend from "@/public/icons/backend.svg";
import IconFrontend from "@/public/icons/frontend.svg";
import IconMobile from "@/public/icons/mobile.svg";
import IconGame from "@/public/icons/game.svg";
import IconQC from "@/public/icons/QC.svg";

export const LIMIT_COURSES = 8;
export const TYPE_QUIZ = {
  ESSAY: "essay",
  MULTIPLE_CHOICE: "quiz",
  IQ: "iq",
};

export const soleil = localFont({
  src: [
    {
      path: "../public/fonts/SoleilLight.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/SoleilBook.otf",
      weight: "normal",
    },
    {
      path: "../public/fonts/SoleilBold.otf",
      weight: "700",
    },
  ],
  variable: "--font-soleil",
});

export const TOPIC_LIST = [
  {
    id: "blockchain",
    title: "Blockchain",
    img: IconBlockchain,
  },
  {
    id: "backend",
    title: "Backend",
    img: IconBackend,
  },
  {
    id: "frontend",
    title: "Frontend",
    img: IconFrontend,
  },
  {
    id: "mobile",
    title: "Mobile",
    img: IconMobile,
  },
  {
    id: "game",
    title: "Game",
    img: IconGame,
  },
  {
    id: "qc",
    title: "QC",
    img: IconQC,
  },
];

export const MENU = [
  {
    activePathname: ["/courses/all", "/courses"],
    key: "courses",
    label: "Courses",
    pathname: "/courses",
  },
  {
    activePathname: ["/articles"],
    key: "articles",
    label: "Articles",
    pathname: "/articles",
  },
];
