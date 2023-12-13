import PageContainer from "@/components/PageContainer";
import HomeView from "@/views/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};
export default function HomePage() {
  return (
    <main>
      <HomeView />
    </main>
  );
}
