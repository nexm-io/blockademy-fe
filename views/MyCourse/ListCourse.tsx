"use client";
import React from 'react'
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import InProgressTab from './InProgressTab';
import CompletedTab from './CompletedTab';
import { TAB_STATUS } from '@/utils/constants';


const ListCourse: React.FC = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('tab')

  return (
    <div className="w-full relative pt-[80px]">
      <h2 className="text-center text-3xl sm:text-[40px] font-bold sm:leading-[52px]">
        My Learning
      </h2>
      <div className='flex gap-[40px] mt-[40px]'>
        <Link
          href="/my-learning?tab=progress"
          className={`course-status ${
            search !== TAB_STATUS.COMPLETED ? "active" : ""
          }`}
        >
          In Progress
        </Link>
        <Link
          href="/my-learning?tab=completed"
          className={`course-status ${
            search === TAB_STATUS.COMPLETED ? "active" : ""
          }`}
        >
          Completed
        </Link>
      </div>

      {search === TAB_STATUS.COMPLETED ? <CompletedTab /> :  <InProgressTab />}
    </div>
  )
}

export default ListCourse