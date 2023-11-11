import localFont from "next/font/local";
import IconBlockchain from "@/public/icons/blockchain.svg";
import IconBackend from "@/public/icons/backend.svg";
import IconFrontend from "@/public/icons/frontend.svg";
import IconMobile from "@/public/icons/mobile.svg";
import IconGame from "@/public/icons/game.svg";
import IconQC from "@/public/icons/qc.svg";

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

export const CHECK_STATUS_QUIZ = {
  NOT_STARTED: "new",
  PASSED: "passed",
  FAILED: "failed",
};

export const QUIZ_COMPLETED = 1;
export const QUIZ_NOT_COMPLETED = 0;

export const CHECK_SHOW_QUIZ = {
  1: "completed",
  0: "not-completed",
};

export const CHECK_STATUS_ASSIGNMENT = {
  COMPLETED: "completed",
  NOT_COMPLETED: "not-completed",
};

export const RESULT_QUIZ_PASS = 1;
export const RESULT_QUIZ_FAIL = 0;

export const RESULT_QUIZ = {
  1: "Pass",
  0: "Fail",
};

export const RESULT_QUESTION_CORRECT = 1;
export const RESULT_QUESTION_INCORRECT = 0;

export const RESULT_QUESTION = {
  1: "Correct",
  0: "Incorrect",
};
