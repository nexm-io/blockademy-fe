import { usePathname, useRouter } from "next/navigation";
import { setRefUrl } from "@/redux/features/auth/action";
import { toast } from "react-toastify";
import api from "@/services/axios";
import React, { useEffect, useState } from "react";
import Button from "@/components/Common/Button";
import { Loader3 } from "@styled-icons/remix-line";
import { selectAuth } from "@/redux/features/auth/reducer";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { getDetailCourseWithoutLoading } from "@/redux/features/courses/action";

const ApplyCourseButton = ({
  courseId,
  showPopup,
  isRegistered,
}: {
  courseId: string;
  showPopup: (params: boolean) => void;
  isRegistered: boolean;
}) => {
  const pathName = usePathname();
  const [registered, setRegistered] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { isAuthenticated: isLogin } = useAppSelector(selectAuth);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleApplyCourse = async () => {
    if (!isLogin) {
      dispatch(setRefUrl(pathName));
      router.push("/login");
      toast.info("Please login to continue");
      return;
    }
    setLoading(true);
    try {
      const response = await api.get(
        `/api/v10/register-course?course_id=${courseId}`
      );
      if (response.status === 200) {
        dispatch(getDetailCourseWithoutLoading(courseId as string));
        setRegistered(true);
        showPopup(true);
      }
    } catch (error) {
      return null;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setRegistered(isRegistered);
  }, [isRegistered]);

  if (registered) return null;

  return (
    <div className="flex justify-end mb-5">
      <Button
        className="w-full md:w-auto md:min-w-[184px]"
        onClick={handleApplyCourse}
        disabled={loading}
      >
        Apply course
        {loading && (
          <Loader3 className="animate-spin ml-2" width={20} height={20} />
        )}
      </Button>
    </div>
  );
};

export default ApplyCourseButton;
