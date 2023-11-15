import ListCourse from '@/views/MyCourse/ListCourse'
import React from 'react'
import PageContainer from "@/components/PageContainer";
import { Metadata } from "next";
import CourseBanner from "@/views/Courses/Banner";

export const metadata: Metadata = {
  title: "My Courses",
};

const MyCourse: React.FC = () => {
  return (
    <div className="mt-[74px]">
       <CourseBanner />
      <PageContainer>
        <ListCourse />
      </PageContainer>
    </div>
  )
}

export default MyCourse