"use client";
import React, {useEffect} from 'react'
import Courses from "./Courses";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { listMyCourse } from '@/redux/features/my-course/action';
import { selectMyCourses } from '@/redux/features/my-course/reducer';
import { COURSE_STATUS } from '@/utils/constants';


const InProgressTab: React.FC = () => {
  const dispatch = useAppDispatch();
  const myCourseList = useAppSelector(selectMyCourses)

  useEffect(() => {
    dispatch(listMyCourse({ status: COURSE_STATUS.INPROGRESS }))
  }, [dispatch])

  return (
    <div className="relative w-full">
      <div className="mt-6 md:mt-[60px]">
        <Courses courses={myCourseList.data} loading={myCourseList.isLoading} />
      </div>
    </div>
  )
}

export default InProgressTab