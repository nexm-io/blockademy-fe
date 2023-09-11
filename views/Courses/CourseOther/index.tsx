'use client'
import { getListCourse } from '@/redux/features/courses/action';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import React, { useEffect } from 'react'
import CoursePanel from '../CoursePanel';

export default function CourseOther() {
    const listCourse = useAppSelector((state) => state.courses.data);

  return (
    <div>
        {listCourse.length == 0 ? <div> Không có course</div> 
            : <>
                {listCourse.map((course,index) => (
                    <>
                    {course.list_courses.data.map(item => (
                        <CoursePanel course={item}/>
                    ) )}
                    </>
                    
                ))}
            </>
        }
    </div>
  )
}
