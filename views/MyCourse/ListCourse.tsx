"use client";
import React, { useEffect } from 'react'
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import InProgressTab from './InProgressTab';
import CompletedTab from './CompletedTab';
import { TAB_STATUS } from '@/utils/constants';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useAppSelector } from '@/redux/hook';


const ListCourse: React.FC = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('tab')
  const isLogin = useAppSelector((state: RootState) => state.auth.isAuthenticated);
  const token = useSelector((state: RootState) => state.auth.token);
  const router = useRouter();
  useEffect(() => {
    if (!isLogin || !token) {
      router.push("/");
    }
  }, [isLogin, token]);

  return (
    <div className="w-full relative pt-10 md:pt-[80px]">
      <h2 className="md:text-center text-3xl sm:text-[40px] font-bold sm:leading-[52px]">
        My Learning
      </h2>
      <div className='flex gap-[40px] mt-[40px]'>
        <Link
          href="/my-learning?tab=progress"
          className={`course-status ${search !== TAB_STATUS.COMPLETED ? "active" : ""
            }`}
        >
          In Progress
        </Link>
        <Link
          href="/my-learning?tab=completed"
          className={`course-status ${search === TAB_STATUS.COMPLETED ? "active" : ""
            }`}
        >
          Completed
        </Link>
      </div>

      {search === TAB_STATUS.COMPLETED ? <CompletedTab /> : <InProgressTab />}
    </div>
  )
}

export default ListCourse