import PageContainer from "@/components/PageContainer";
import MainPage from "@/views/Home/MainPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};
export default function Home() {
  return (
    <PageContainer>
      <main className="flex flex-col items-center justify-center">
        <MainPage />
      </main>
    </PageContainer>
  );
}
