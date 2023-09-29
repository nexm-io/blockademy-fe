import BreadCrumb from "@/components/BreadCrumb";
import GiftHeader from "@/components/GiftHeader";
import NoSignal from "@/components/NoSignal";
import AuthorList from "@/views/Authors/ListAuthor";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Author Lists",
};
export default function AuthorListPage() {
  return (
    <section>
      <GiftHeader />
      <AuthorList />
      <NoSignal />
    </section>
  );
}
