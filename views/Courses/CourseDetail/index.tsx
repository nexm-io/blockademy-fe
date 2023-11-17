"use client";
import Link from "next/link";
import gift from "@/public/icons/giftcourse.svg";
import Image from "next/image";
import VideoPlayer from "@/components/VideoPlayer";
import CourseModule from "@/components/CourseModule";
import { useCallback, useEffect, useMemo, useState } from "react";
import Quiz from "@/components/Quiz";
import Button from "@/components/Common/Button";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { getDetailCourse } from "@/redux/features/courses/action";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import api from "@/services/axios";
import InfoPopup from "@/components/Popup/InfoPopup";
import { Loader3 } from "@styled-icons/remix-line";
import BackToTop from "@/components/BackToTop";
import { useSelector } from "react-redux";
import { Skeleton } from "@mui/material";
import { toast } from "react-toastify";
import { Share } from "@/components/Icon";
import { ASSIGNMENT_STATUS } from "@/utils/constants";
import { PLACEHOLDER_BASE64 } from "@/utils/getLocalBase64";
import slugifyText from "@/utils/slugifyText";
import { format, parseISO } from "date-fns";
import cn from "@/services/cn";
import { SpinnerIos } from "@styled-icons/fluentui-system-regular";

const CourseDetail = () => {
  const [formState, setFormState] = useState<"video" | "quiz">("video");
  const params = useParams();
  const searchParams = useSearchParams();
  const courseId = params.id;
  const lessonId = searchParams.get("lesson_id") || (0 as number);
  const [isWatching, setIsWatching] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showSharePopup, setShowSharePopup] = useState(false);
  const [registered, setRegistered] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [viewCertificate, setViewCertificate] = useState<boolean>(false);
  const [stepCompleted, setStepCompleted] = useState<string[]>([]);
  const [completedLesson, setCompletedLesson] = useState<number[]>([]);
  const [urlNextLesson, setUrlNextLesson] = useState<string>("");
  const [isNextLesson, setIsNextLesson] = useState<boolean>(false);
  const [certAssets, setCertAssets] = useState<any>({
    image: "",
    pdf: "",
    isClaimed: 0,
  });
  const [getCerLoading, setGetCerLoading] = useState<boolean>(false);

  const courseDetail = useAppSelector(
    (state: RootState) => state.courses.details
  );
  const isLoading = useAppSelector(
    (state: RootState) => state.courses.isLoading
  );
  const isLogin = useAppSelector((state) => state.auth.isAuthenticated);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const accountRx = useSelector((state: RootState) => state.account);
  const token = useSelector((state: RootState) => state.auth.token);
  const isCompletedQuiz = useMemo(() => {
    if (!courseDetail?.lesson_data || !courseDetail?.lesson_data.length)
      return false;
    return courseDetail?.lesson_data.every((item) => item.is_complete === 1);
  }, [courseDetail?.lesson_data]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const lesson = useMemo(
    () =>
      courseDetail?.lesson_data?.find((item) => item.lesson_id === +lessonId),
    [courseDetail?.lesson_data, lessonId]
  );

  const lessonOrder = useMemo(() => {
    const lessonData = courseDetail?.lesson_data || [];
    const currIndex =
      lessonData.findIndex((lesson) => lesson.lesson_id === Number(lessonId)) ||
      0;
    const lessonLength = lessonData.length - 1;
    return {
      first: lessonData?.[0]?.lesson_id === +lessonId,
      last: currIndex >= lessonLength,
    };
  }, [courseDetail?.lesson_data, lessonId]);

  const isNotCompletedLesson = useMemo(() => {
    return isCompletedQuiz ||
      (lessonOrder.last && completedLesson.includes(+lessonId))
      ? false
      : true;
  }, [completedLesson, isCompletedQuiz, lessonOrder.last, lessonId]);

  const getNextLessonUrl = useCallback(() => {
    const lessonData = courseDetail?.lesson_data || [];
    const currIndex =
      lessonData.findIndex((lesson) => lesson.lesson_id === Number(lessonId)) ||
      0;
    const lessonLength = lessonData.length - 1;

    const nextLessonId =
      currIndex < lessonLength
        ? lessonData[currIndex + 1].lesson_id
        : lessonData[0].lesson_id;
    const url = `/courses/${courseId}?lesson_id=${nextLessonId}`;
    return url;
  }, [courseDetail?.lesson_data, courseId, lessonId]);

  const getPrevLessonUrl = useCallback(() => {
    const lessonData = courseDetail?.lesson_data || [];
    const currIndex =
      lessonData.findIndex((lesson) => lesson.lesson_id === Number(lessonId)) ||
      0;
    const lessonLength = lessonData.length - 1;

    const prevLessonId =
      currIndex < lessonLength
        ? lessonData[currIndex - 1].lesson_id
        : lessonData[0].lesson_id;
    const url = `/courses/${courseId}?lesson_id=${prevLessonId}`;
    return url;
  }, [courseDetail?.lesson_data, courseId, lessonId]);

  const handleChangeForm = useCallback(
    (status: boolean) => {
      if (status) {
        const url = getNextLessonUrl();
        setStepCompleted([...stepCompleted, "video"]);
        setUrlNextLesson(url);
        if (stepCompleted.length >= 1) {
          setIsNextLesson(true);
        }
        // setFormState(`quiz`);
      }
    },
    [getNextLessonUrl, stepCompleted]
  );

  const handleOnchange = (status: boolean) => {
    setIsWatching(status);
  };

  const handleApplyCourse = async () => {
    if (!isLogin) {
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
        setRegistered(true);
        setShowPopup(true);
      }
    } catch (error) {
      return null;
    } finally {
      setLoading(false);
    }
  };

  const exportPDF = () => {
    const assets = accountRx.data;
    const filename =
      assets?.first_name && assets.last_name
        ? slugifyText(
            `${assets?.first_name} ${assets?.last_name} ${courseDetail?.title}`
          )
        : slugifyText(`${assets?.email.split("@")[0]} ${courseDetail?.title}`);
    if (!assets) return;
    fetch(certAssets.pdf).then(function (t) {
      return t.blob().then((b) => {
        var a = document.createElement("a");
        a.href = URL.createObjectURL(b);
        a.setAttribute("download", `${filename}.pdf`);
        a.click();
      });
    });
  };

  const shareFacebook = () => {
    window.open(
      "http://www.facebook.com/sharer.php?u=" +
        encodeURIComponent(certAssets.image) +
        "&t=" +
        encodeURIComponent(
          accountRx.data?.first_name && accountRx.data?.last_name
            ? slugifyText(
                `${accountRx.data?.first_name} ${accountRx.data?.last_name} ${courseDetail?.title}`
              )
            : slugifyText(
                `${accountRx.data?.email.split("@")[0]} ${courseDetail?.title}`
              )
        ),
      "sharer",
      "toolbar=0,status=0,width=626,height=436"
    );
  };

  const shareTwitter = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?url=${certAssets.image}&text=`;
    window.open(tweetUrl, "_blank");
  };

  const handleGetCertificate = async () => {
    if (courseDetail?.assignment_status.slug === ASSIGNMENT_STATUS.PASSED) {
      if (!certAssets.isClaimed) {
        setGetCerLoading(true);
        try {
          const { data } = await api.get(`/api/v10/claim-reward/${courseId}`);
          console.log(data);
          setCertAssets({
            image: data.data.certificate_image_url,
            pdf: data.data.certificate_pdf_url,
            isClaimed: 1,
          });
        } catch (error) {
          toast.warning("Something wrong...");
          return null;
        } finally {
          setGetCerLoading(false);
        }
      } else {
        setCertAssets({
          image: courseDetail?.certificate_image_url,
          pdf: courseDetail?.certificate_pdf_url,
          isClaimed: courseDetail?.is_claimed,
        });
      }
    }
  };

  useEffect(() => {
    setCertAssets({
      image: courseDetail?.certificate_image_url,
      is_claimed: courseDetail?.is_claimed,
      pdf: courseDetail?.certificate_pdf_url,
    });
  }, [courseDetail]);

  console.log(certAssets);

  useEffect(() => {
    dispatch(getDetailCourse(courseId as string));
  }, []);

  useEffect(() => {
    if (courseDetail?.id) setRegistered(!!courseDetail.is_registered);
  }, [courseDetail]);

  const handleScroll = useCallback(() => {
    const bodyBottom = document.body.getBoundingClientRect().bottom;
    const bottom = Math.round(bodyBottom) <= window.innerHeight;
    if (
      bottom &&
      !completedLesson.includes(+lessonId) &&
      !stepCompleted.includes("read")
    ) {
      setStepCompleted([...stepCompleted, "read"]);
    }
  }, [completedLesson, lessonId, stepCompleted]);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const isCompletedStep = useMemo(() => {
    if (!lesson?.lesson_description) {
      return stepCompleted.includes("video");
    }
    if (!lesson?.lesson_link) {
      return stepCompleted.includes("read");
    }
    return stepCompleted.length >= 2;
  }, [lesson?.lesson_description, lesson?.lesson_link, stepCompleted]);

  const handleCheckCompletedCourse = useCallback(async () => {
    if (!isCompletedStep) return;
    if (completedLesson.includes(+lessonId)) return;
    if (!isAuthenticated || !token) {
      if (isNextLesson && !lessonOrder.last) {
        router.push(urlNextLesson);
        setIsNextLesson(false);
      }
      return;
    }
    try {
      const response = await api.post(
        `/api/v10/course/${courseId}/lesson/${lessonId}`
      );
      if (response.status === 200) {
        setCompletedLesson([...completedLesson, +lessonId]);
        setStepCompleted([]);
        if (isNextLesson && !lessonOrder.last) {
          router.push(urlNextLesson);
        }
      }
    } catch (error) {
      return null;
    } finally {
      setIsNextLesson(false);
    }
  }, [
    isCompletedStep,
    isAuthenticated,
    token,
    courseId,
    lessonId,
    completedLesson,
    isNextLesson,
    lessonOrder.last,
    router,
    urlNextLesson,
  ]);

  useEffect(() => {
    handleCheckCompletedCourse();
  }, [handleCheckCompletedCourse]);

  return (
    <div className="container mt-36">
      {isLoading ? (
        <div className="md:mt-[56px] mt-8">
          <div className="">
            <Skeleton
              variant="rounded"
              sx={{ maxWidth: "300px" }}
              height={24}
            />
            <div className="flex flex-col md:flex-row justify-between mt-[52px]">
              <Skeleton variant="rounded" sx={{ width: "400px" }} height={50} />
            </div>
          </div>
          <div className="mt-10">
            <div className="relative mt-10 grid grid-cols-1 lg:grid-cols-3 lg:gap-10 w-full p-0">
              <div className="w-full px-0 md:px-0 col-start-1 col-end-3">
                <Skeleton
                  variant="rounded"
                  sx={{ width: "100%" }}
                  height={400}
                />
                <div className="mt-4 grid gap-2">
                  {Array(10)
                    .fill(0)
                    .map((z, i) => (
                      <Skeleton
                        key={i}
                        variant="rounded"
                        sx={{ width: "100%" }}
                        height={24}
                      />
                    ))}
                </div>
              </div>
              <div className="h-full w-full sticky top-[100px]">
                <div className="flex flex-col gap-4 md:px-0 ">
                  <Skeleton
                    variant="rounded"
                    sx={{ width: "100%" }}
                    height={68}
                  />
                  <Skeleton
                    variant="rounded"
                    sx={{ width: "100%" }}
                    height={68}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <section className="md:mt-[56px] mt-8">
            <div className="grid gap-4">
              <nav className="w-full rounded-md">
                <ol className="list-reset flex text-gray-300 items-center pl-4 md:pl-0 flex-wrap">
                  <li className="leading-[23px] hover:underline cursor-pointer">
                    <Link href="/">
                      <span className="text-gray-300 md:text-sm font-normal capitalize text-[12px]">
                        Home
                      </span>
                    </Link>
                  </li>
                  <li className="leading-[23px]">
                    <span className="mx-3 md:text-[12px] text-[10px]">
                      &gt;
                    </span>
                  </li>
                  <li className="leading-[23px] hover:underline">
                    <Link href="/courses">
                      <span className="text-gray-300 md:text-sm font-normal capitalize text-[12px]">
                        Courses
                      </span>
                    </Link>
                  </li>
                  <li className="leading-[23px]">
                    <span className="mx-3 md:text-[12px] text-[10px]">
                      &gt;
                    </span>
                  </li>
                  <li className="leading-[23px]">
                    <span className="text-gray-300 md:text-sm font-normal capitalize text-[12px]">
                      {courseDetail?.title}
                    </span>
                  </li>
                </ol>
              </nav>
              <div className="flex justify-between gap-4 items-center flex-wrap lg:flex-nowrap mt-[36px]">
                <h1 className="text-black-100 font-bold md:text-4xl text-3xl">
                  {courseDetail?.title}
                </h1>
              </div>
              {isLogin ? null : (
                <div className="bg-blue-200 py-3 px-4 flex gap-2">
                  <Image alt="gift-icon" src={gift}></Image>
                  <span className="md:text-base text-[13px] font-normal text-black-100 ">
                    Log into your Blockademy account to register courses, track
                    progress and claim your rewards.
                  </span>
                </div>
              )}
            </div>

            {/* PASSED CASE */}
            {isLogin &&
              courseDetail?.is_registered === 1 &&
              courseDetail?.is_completed === 1 &&
              courseDetail?.is_completed_assignment === 1 && (
                <div className="p-5 rounded-lg bg-blue-900 flex justify-between lg:flex-row flex-col items-center mt-10 gap-10">
                  <div
                    className="relative group cursor-pointer"
                    onClick={() => setViewCertificate(true)}
                  >
                    <Image
                      src={certAssets.image}
                      onError={() =>
                        setCertAssets({
                          ...certAssets,
                          image: "/images/default-certificate.jpg",
                        })
                      }
                      height={381}
                      blurDataURL={PLACEHOLDER_BASE64}
                      width={580}
                      alt="blockademy-certificate"
                    />
                    <div
                      className="group-hover:visible group-hover:opacity-100 invisible opacity-0 transition-all duration-500 ease-in-out absolute inset-0 flex justify-center items-center bg-black-300/50"
                      style={{
                        background:
                          "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%) / cover no-repeat",
                      }}
                    >
                      <span className="bg-grey-300 p-[10px] rounded">
                        <Image
                          src="/icons/expand.svg"
                          width={40}
                          height={40}
                          alt="expand icon"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="h-fit flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                      <p className="text-2xl font-bold text-blue-100">
                        Congratulations on getting your certificate!
                      </p>
                      <p className="text-xl text-grey-700">
                        You completed this course on{" "}
                        {format(
                          parseISO(courseDetail.complete_assignment_at),
                          "MMM d, yyyy"
                        )}
                      </p>
                      <p className="text-xl text-grey-700">
                        Grade Achieved:{" "}
                        {courseDetail?.aissignment_grade || "--"}%
                      </p>
                    </div>
                    <div className="flex items-center flex-wrap gap-4">
                      {certAssets.isClaimed && certAssets.isClaimed === 1 ? (
                        <Button className="min-w-[184px]">Issue NFT</Button>
                      ) : (
                        <Button
                          className="min-w-[184px] !px-3"
                          onClick={handleGetCertificate}
                        >
                          {getCerLoading ? (
                            <SpinnerIos
                              className="animate-spin text-white-100"
                              size={20}
                            />
                          ) : (
                            <span>Get Certificate</span>
                          )}
                        </Button>
                      )}
                      <Button
                        disabled={certAssets.isClaimed === 0}
                        className="min-w-[184px] bg-blue-600 group hover:bg-blue-600/50 group !px-3"
                        onClick={exportPDF}
                      >
                        <span className="text-blue-700 group-hover:text-blue-700/80transition-all">
                          Download Certificate
                        </span>
                      </Button>
                      <button
                        disabled={certAssets.isClaimed === 0}
                        className={cn({
                          "cursor-pointer": certAssets.isClaimed === 1,
                          "cursor-not-allowed opacity-50":
                            certAssets.isClaimed === 0,
                        })}
                        onClick={() => setShowSharePopup(true)}
                      >
                        <Share />
                      </button>
                    </div>
                  </div>
                </div>
              )}

            <div className="relative mt-10 grid grid-cols-1 lg:grid-cols-3 lg:gap-10 w-full p-0">
              <div className="w-full px-0 md:px-0 col-start-1 col-end-3 order-last lg:order-first">
                <div className="w-full">
                  {courseDetail ? (
                    courseDetail.lesson_data.map(
                      (lesson, index) =>
                        Number(lessonId) === lesson.lesson_id && (
                          <>
                            {lesson.lesson_type_format === 2 &&
                              formState === "video" && (
                                <>
                                  <VideoPlayer
                                    typeUpload={lesson.lesson_type_upload}
                                    url={lesson.lesson_link}
                                    onChangeForm={handleChangeForm}
                                    onChangeStatus={handleOnchange}
                                  />
                                </>
                              )}
                            {lesson.lesson_type_format === 1 &&
                              formState === "quiz" && (
                                <Quiz
                                  lesson={lesson}
                                  index={index}
                                  campaign_id={courseDetail.campaign_id}
                                  course_id={courseDetail.id}
                                />
                              )}
                            <h2 className="font-bold md:text-[26px] text-xl text-black-100 md:mt-11 mt-7 md:mb-7 mb-5">
                              {lesson.lesson_title}
                            </h2>
                            <div className="text-black-100 md:text-lg text-base font-normal mb-9">
                              <div
                                id="content"
                                className="flex flex-col gap-3 text-xs course-content md:text-base"
                                dangerouslySetInnerHTML={{
                                  __html: lesson.lesson_description,
                                }}
                              />
                            </div>
                          </>
                        )
                    )
                  ) : (
                    <div>No Lesson</div>
                  )}
                </div>
              </div>

              <div className="w-full h-fit lg:sticky top-[100px] order-first lg:order-last mb-6">
                <div className="flex flex-col gap-5 md:px-0">
                  {!isLogin && (
                    <div className="flex justify-end">
                      <Button
                        onClick={handleApplyCourse}
                        className="!px-6 min-w-[184px]"
                      >
                        Apply Course
                        {loading && (
                          <Loader3
                            className="animate-spin ml-2"
                            width={25}
                            height={25}
                          />
                        )}
                      </Button>
                    </div>
                  )}

                  {/* APPLY COURSE */}
                  {isLogin &&
                    !registered &&
                    courseDetail?.is_registered === 0 && (
                      <div className="flex justify-end">
                        <Button
                          onClick={handleApplyCourse}
                          className="!px-6 min-w-[184px]"
                        >
                          Apply Course
                          {loading && (
                            <Loader3
                              className="animate-spin ml-2"
                              width={25}
                              height={25}
                            />
                          )}
                        </Button>
                      </div>
                    )}

                  {/* TRY AGAIN */}
                  {isLogin &&
                    courseDetail?.is_registered === 1 &&
                    courseDetail?.is_completed === 1 &&
                    courseDetail?.is_completed_assignment === 0 && (
                      <div className="rounded-lg bg-red-200/10 px-4 py-3 flex justify-between flex-col sm:flex-row gap-2 flex-1">
                        <div className="text-center">
                          <p className="text-lg">Your Highest Score</p>
                          <p className="text-[28px] leading-10 text-red-100">
                            {courseDetail?.aissignment_grade}%
                          </p>
                        </div>
                        <div className="flex items-center justify-center">
                          <Button
                            className="!px-6 min-w-[184px]"
                            disabled={isNotCompletedLesson}
                            onClick={() => {
                              if (isNotCompletedLesson) return;
                              router.push(
                                `/quiz/${courseDetail?.assigment_id}`
                              );
                            }}
                          >
                            Try Again
                          </Button>
                        </div>
                      </div>
                    )}

                  {/* COMPLETE QUIZ */}
                  {isLogin &&
                    courseDetail?.assignment_status.slug !==
                      ASSIGNMENT_STATUS.FAILED &&
                    courseDetail?.is_completed_assignment === 0 &&
                    registered && (
                      <div className="flex justify-end">
                        <Button
                          className="md:w-auto inline-block !px-6 bg-blue-600 group hover:bg-blue-600/50 min-w-[184px]"
                          disabled={isNotCompletedLesson}
                          onClick={() => {
                            if (isNotCompletedLesson) return;
                            router.push(`/quiz/${courseDetail?.assigment_id}`);
                          }}
                        >
                          <span className="text-blue-700 group-hover:text-blue-700/80 font-bold transition-all">
                            Complete Quiz
                          </span>
                        </Button>
                      </div>
                    )}

                  {courseDetail?.lesson_data.length !== 0 &&
                    !isLoading &&
                    courseDetail?.lesson_data.map((lesson, index) => (
                      <div
                        key={index}
                        className="cursor-pointer"
                        onClick={() => {
                          router.push(
                            `/courses/${courseId}?lesson_id=${lesson.lesson_id}`
                          );
                        }}
                      >
                        <CourseModule
                          key={index}
                          lesson={lesson}
                          completedLesson={completedLesson}
                        />
                      </div>
                    ))}

                  {isLogin &&
                    courseDetail?.assignment_status.slug !==
                      ASSIGNMENT_STATUS.FAILED &&
                    courseDetail?.is_completed_assignment === 0 &&
                    registered && (
                      <p className="text-grey-700">
                        <span className="text-red-200">Note:</span>
                        <span>
                          {" "}
                          Please review all course materials before attempting
                          the quiz.
                        </span>
                      </p>
                    )}
                  {/* LEARN AGAIN */}
                  {courseDetail?.is_completed_assignment === 1 && (
                    <Button
                      className="md:w-auto inline-block !px-6 bg-blue-600 group hover:bg-blue-600/50 w-full"
                      disabled={isNotCompletedLesson}
                      onClick={() => {
                        if (isNotCompletedLesson) return;
                        router.push(`/quiz/${courseDetail?.assigment_id}`);
                      }}
                    >
                      <span className="text-blue-700 group-hover:text-blue-700/80 transition-all">
                        Learn Again
                      </span>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      <div
        className={cn({
          block: viewCertificate,
          hidden: !viewCertificate,
        })}
      >
        <div
          className="fixed top-0 left-0 w-full h-full bg-black-100 opacity-50 z-[998]"
          onClick={() => setViewCertificate(false)}
        ></div>
        <div
          className={`border border-gray-400 w-[90%] lg:w-[948px] fixed z-[999] bg-white-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
        >
          <Image
            src={certAssets.image}
            onError={() =>
              setCertAssets({
                ...certAssets,
                image: "/images/default-certificate.jpg",
              })
            }
            className="w-[90%] lg:w-[948px]"
            width={948}
            height={625}
            alt="blockademy certificate"
          />
        </div>
      </div>

      {showSharePopup && (
        <InfoPopup
          title="Share Certificate"
          desc=""
          onClose={() => setShowSharePopup(false)}
          className="!gap-0"
        >
          <div className="flex gap-10 min-w-[300px] justify-center">
            <button
              type="button"
              className="inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg text-white-100"
              style={{ backgroundColor: "#1877f2" }}
              onClick={shareFacebook}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </button>
            <button
              type="button"
              className="inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg text-white-100 bg-black-100"
              onClick={shareTwitter}
            >
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5 13.9983H14.4175C13.0855 13.9983 11.7532 13.9988 10.4208 13.9999C10.3558 13.9999 10.3169 13.9818 10.2803 13.9296C9.51658 12.8385 8.75183 11.7482 7.98609 10.6585C7.50478 9.97269 7.02316 9.28704 6.54122 8.6016C6.5319 8.58969 6.52196 8.57827 6.51142 8.56738L6.09896 9.03553C5.02398 10.2575 3.94905 11.4795 2.87417 12.7015C2.51143 13.114 2.14947 13.5269 1.78831 13.9404C1.7729 13.9602 1.75271 13.976 1.72955 13.9863C1.70639 13.9967 1.68097 14.0013 1.65555 13.9997C1.27715 13.9969 0.898743 13.9983 0.5 13.9983L5.9651 7.78338L0.503153 0.00724496C0.534687 0.00493275 0.556287 0.00184993 0.578046 0.00184993C1.91823 0.00184993 3.25841 0.00123318 4.59859 0C4.65913 0 4.68688 0.0265135 4.71605 0.0682876C5.14512 0.680254 5.5745 1.29171 6.0042 1.90265C6.71024 2.90769 7.41633 3.91278 8.12248 4.91793C8.17403 4.99146 8.22622 5.06483 8.28314 5.14545C8.39098 5.02352 8.49394 4.90791 8.59611 4.79184L11.9947 0.92689C12.2513 0.634935 12.5071 0.342362 12.7658 0.052102C12.7903 0.0245125 12.8245 0.00700027 12.8617 0.00308314C13.2374 -0.000308107 13.6131 0.000924999 13.989 0.00107915C14.0011 0.00107915 14.0134 0.00292884 14.0401 0.0050869L8.83151 5.92806L14.5 13.9983ZM2.18248 0.911476C2.19825 0.934906 2.2055 0.947392 2.21401 0.959262C2.90586 1.92721 3.59776 2.89495 4.28972 3.86248C5.51701 5.57969 6.74414 7.29684 7.97111 9.01394C8.93815 10.3671 9.90465 11.7204 10.8706 13.0739C10.9022 13.1181 10.9346 13.1312 10.9864 13.1312C11.5645 13.1299 12.1426 13.1299 12.7207 13.1312H12.806C12.7828 13.0969 12.7704 13.0776 12.7571 13.0588C11.9313 11.9038 11.1055 10.7487 10.2797 9.59354C9.44678 8.42726 8.61409 7.26098 7.7816 6.09469C6.94995 4.93088 6.11825 3.76732 5.28649 2.60402C4.89684 2.05936 4.50682 1.51471 4.11644 0.970052C4.09815 0.944618 4.06283 0.914096 4.03524 0.913942C3.42301 0.910705 2.81079 0.911476 2.18248 0.911476Z"
                  fill="inherit"
                />
              </svg>
            </button>
          </div>
        </InfoPopup>
      )}

      {showPopup && (
        <InfoPopup
          title="Congratulations!"
          desc="Thanks for joining the course. Please enjoy your journey, complete
          quiz and get certificate."
          onClose={() => setShowPopup(false)}
          className="md:max-w-[359px]"
        >
          <Button
            type="button"
            onClick={() => setShowPopup(false)}
            className="mt-2"
          >
            Yap, sure
          </Button>
        </InfoPopup>
      )}
      <BackToTop />
    </div>
  );
};

export default CourseDetail;
export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  };
};
