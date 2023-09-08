import BreadCrumb from "@/components/BreadCrumb";
import GiftHeader from "@/components/GiftHeader";

import CourseDetail from "@/views/Courses/CourseDetail";

export default function CoursesSlug() {
 

  return (
    <div className="mt-[74px]">
      <GiftHeader />
      <div className="md:mt-[42px] mt-5 flex gap-3">
        <BreadCrumb />
      </div>
      <CourseDetail />
    </div>
  );
}
