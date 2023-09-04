import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Course",
};

export default function CoursePage() {
  redirect("/courses/all");
}
