import MainPage from "@/views/Home/MainPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center xl:mt-36">
      <MainPage />
    </main>
  );
}
