
import MainPage from "@/views/Home/MainPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};
export default function Home() {
  return (
    <>
      <MainPage />
    </>
  );
}
