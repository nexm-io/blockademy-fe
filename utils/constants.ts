import localFont from "next/font/local";
import BlockchainImg from "@/public/images/home/topics/blockchain.png";
import BackendImg from "@/public/images/home/topics/backend.png";
import FrontendImg from "@/public/images/home/topics/frontend.png";
import MobileImg from "@/public/images/home/topics/mobile.png";
import GameImg from "@/public/images/home/topics/game.png";
import QCImg from "@/public/images/home/topics/QC.png";

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
    img: BlockchainImg,
  },
  {
    id: "backend",
    title: "Backend",
    img: BackendImg,
  },
  {
    id: "frontend",
    title: "Frontend",
    img: FrontendImg,
  },
  {
    id: "mobile",
    title: "Mobile",
    img: MobileImg,
  },
  {
    id: "game",
    title: "Game",
    img: GameImg,
  },
  {
    id: "qc",
    title: "QC",
    img: QCImg,
  },
];
