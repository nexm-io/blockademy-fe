"use client";

import { Box, Skeleton, Stack, Typography } from "@mui/material";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useParams, useRouter } from "next/navigation";
import {
  RESULT_QUESTION_CORRECT,
  RESULT_QUIZ_FAIL,
  RESULT_QUIZ_PASS,
  TYPE_QUIZ,
} from "@/utils/constants";
import {
  getListHighestResult,
  getListResult,
} from "@/redux/features/quiz/action";
import Image from "next/image";
import Button from "../Common/Button";

export default function ResultQuiz() {
  const { listResultData, loadingListResult, isViewResultInCourse } =
    useAppSelector((state) => state.quiz);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      if (typeof id !== "string") return;
      if (isViewResultInCourse) {
        await dispatch(getListHighestResult(id));
      } else {
        await dispatch(getListResult(id));
      }
    };
    fetchData();
  }, [dispatch, id]);

  const checkColor =
    listResultData?.result === RESULT_QUIZ_PASS
      ? "var(--yellow-color-100)"
      : "var(--yellow-color-100)";
  const checkImage =
    listResultData?.result === RESULT_QUIZ_PASS
      ? "/images/quiz/ellipse-yellow.png"
      : "/images/quiz/ellipse-yellow.png";

  const checkWhiteSpace = (item?: string) => {
    if (!item) return "";
    const isWhitespace = /^((&nbsp;|\s)*<[^>]+>)*(&nbsp;|\s)*$/.test(item);
    if (isWhitespace) {
      return true;
    }
    return false;
  };

  const removeWhiteSpace = (str?: string) => {
    if (!str) return "";
    const trimmedStr = str.replace(/^(&nbsp;\s*)+|(&nbsp;\s*)+$/g, "");
    return trimmedStr;
  };

  useEffect(() => {
    scrollToTop();
    const handleKeyDown = (event: any) => {
      if (event.keyCode === 123) {
        event.preventDefault();
      }
    };

    const handleContextMenu = (event: any) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {loadingListResult ? (
        <Stack sx={{ maxWidth: "650px", py: 10, m: "auto" }}>
          <Skeleton variant="text" sx={{ maxWidth: "250px" }} height={50} />
          <Skeleton variant="text" sx={{ maxWidth: "300px" }} height={50} />
          <Skeleton
            variant="rounded"
            height={227}
            sx={{ borderRadius: "20px", mb: "30px" }}
          />
          <Skeleton
            variant="rounded"
            height={227}
            sx={{ borderRadius: "20px" }}
          />
        </Stack>
      ) : (
        <Box sx={{ py: 10, m: "auto" }}>
          <div className="flex flex-col md:flex-row justify-between">
            {/* <div className="mt-2 mb-"> */}
            <Typography
              sx={{
                color: "var(--primary-black)",
                fontSize: "24px",
                fontWeight: 500,
                lineHeight: "32px",
              }}
            >
              Result
            </Typography>
            {/* </div> */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* {listResultData?.result === RESULT_QUIZ_FAIL && ( */}
                <Button
                  onClick={() => router.push(`/quiz/${id}`)}
                  className="!px-6 !py-2 w-full sm:w-auto !bg-[#e01a59] hover:!bg-[#a31e1e]"
                >
                  Try Again
                </Button>
              {/* )} */}
              <Button
                onClick={() =>
                  router.push(
                    `/courses/${listResultData?.course_id}?lesson_id=${listResultData?.lesson_first?.lesson_id}`
                  )
                }
                className="!px-6 !py-2 w-full sm:w-auto"
              >
                Back to course
              </Button>
            </div>
          </div>

          <Box
            sx={{ maxWidth: "650px", py: 4, m: "auto" }}
            onCopy={(e) => {
              e.preventDefault();
            }}
          >
            <Typography
              sx={{
                color: "var(--primary-black)",
                fontSize: "24px",
                fontWeight: 500,
                lineHeight: "32px",
              }}
            >
              {listResultData?.quiz}
            </Typography>
            <Typography
              sx={{
                color: "var(--primary-color-100)",
                fontSize: "20px",
                fontWeight: 500,
                lineHeight: "32px",
                mt: 2,
                mb: "20px",
              }}
            >
              {removeWhiteSpace(listResultData?.description)}
            </Typography>
            <Box
              sx={{
                backgroundColor: "var(--primary-color-800)",
                color: "white",
                fontWeight: 500,
                p: "40px",
                borderRadius: "20px",
                display: "flex",
                gap: "40px",
                flexWrap: "wrap",
              }}
            >
              <Box
                sx={{
                  display: "inline-block",
                  textAlign: "center",
                  userSelect: "none",
                }}
              >
                <Typography sx={{ mb: "13px" }}>You Scored</Typography>
                <Box
                  sx={{ position: "relative", width: "110px", height: "110px" }}
                >
                  <Image
                    src="/images/quiz/ellipse.png"
                    alt="ellipse"
                    width={110}
                    height={110}
                  />
                  <Typography
                    sx={{
                      position: "absolute",
                      top: "36%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      color: "var(--blue-color-100)",
                      zIndex: 4,
                      fontSize: "24px",
                      fontWeight: 500,
                      lineHeight: "32px",
                    }}
                  >
                    <span>{listResultData?.score}</span>/100
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "inline-block",
                  textAlign: "center",
                  userSelect: "none",
                }}
              >
                <Typography sx={{ mb: "13px" }}>True</Typography>
                <Box
                  sx={{ position: "relative", width: "110px", height: "110px" }}
                >
                  <Image
                    src="/images/quiz/ellipse.png"
                    alt="ellipse"
                    width={110}
                    height={110}
                  />
                  <Typography
                    sx={{
                      position: "absolute",
                      top: "36%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      color: "var(--blue-color-100)",
                      zIndex: 4,
                      fontSize: "24px",
                      fontWeight: 500,
                      lineHeight: "32px",
                    }}
                  >
                    {listResultData?.total_correct_answer}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "inline-block",
                  textAlign: "center",
                  userSelect: "none",
                }}
              >
                <Typography sx={{ mb: "13px" }}>False</Typography>
                <Box
                  sx={{ position: "relative", width: "110px", height: "110px" }}
                >
                  <Image
                    src="/images/quiz/ellipse-yellow.png"
                    alt="ellipse"
                    width={110}
                    height={110}
                  />
                  <Typography
                    sx={{
                      position: "absolute",
                      top: "36%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      color: "var(--yellow-color-100)",
                      zIndex: 4,
                      fontSize: "24px",
                      fontWeight: 500,
                      lineHeight: "32px",
                    }}
                  >
                    {listResultData?.total_incorrect_answer}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "inline-block",
                  textAlign: "center",
                  userSelect: "none",
                }}
              >
                <Typography sx={{ mb: "13px" }}>Result</Typography>
                <Box
                  sx={{ position: "relative", width: "110px", height: "110px" }}
                >
                  <Image
                    src={checkImage}
                    alt="ellipse"
                    width={110}
                    height={110}
                  />
                  <Typography
                    sx={{
                      position: "absolute",
                      top: "36%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      color: `${checkColor}`,
                      zIndex: 4,
                      fontSize: "24px",
                      fontWeight: 500,
                      lineHeight: "32px",
                    }}
                  >
                    {listResultData?.result === RESULT_QUIZ_PASS
                      ? "Pass"
                      : "Fail"}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                fontSize: "14px",
                lineHeight: "20px",
                backgroundColor: "#F9F9F9",
                p: "30px",
                borderRadius: "20px",
                mt: "30px",
              }}
            >
              {listResultData?.list_question_answer?.map((item, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Box
                    sx={{
                      color: "var(--primary-black)",
                      textDecoration: "underline",
                      display: "flex",
                      alignItems: "center",
                      fontSize: "16px",
                    }}
                  >
                    <Typography sx={{ fontWeight: 600 }}>
                      Question {item?.order}:
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: "#121230",
                      fontSize: "16px",
                      lineHeight: "25px",
                      mb: 1,
                      userSelect: "none",
                    }}
                  >
                    {item?.question_title}
                  </Typography>
                  {item?.question_description &&
                    !checkWhiteSpace(item?.question_description) && (
                      <Box sx={{ ml: 4, overflow: "auto" }}>
                        <Box
                          sx={{
                            color: "#71738B",
                            lineHeight: "25px",
                            userSelect: "none",
                          }}
                          dangerouslySetInnerHTML={{
                            __html: item?.question_description,
                          }}
                        />
                      </Box>
                    )}
                  {item?.question_image && (
                    <Box sx={{ maxWidth: "300px", my: 2, userSelect: "none" }}>
                      <Image
                        src={item?.question_image?.original_image}
                        alt="question-image"
                        width={100}
                        height={150}
                        layout="responsive"
                      />
                    </Box>
                  )}
                  {item?.question_type === TYPE_QUIZ.ESSAY ? (
                    <Box>
                      <div
                        className={`flex items-center gap-[9px] ${
                          !item?.user_answer ? "mb-1" : ""
                        }`}
                        // sx={{
                        //   display: "flex",
                        //   alignItems: "center",
                        //   gap: "9px",
                        //   mb: !item?.user_answer && 1,
                        //   userSelect: "none",
                        // }}
                      >
                        <Image
                          src="/images/quiz/answer.svg"
                          alt="answer"
                          width={20}
                          height={20}
                        />
                        <Typography>Your Answer:</Typography>
                      </div>

                      {item?.user_answer && (
                        <Box
                          className="scrollable"
                          sx={{
                            color: "var(--primary-color-300)",
                            ml: "30px",
                            maxHeight: "300px",
                            overflowY: "scroll",
                          }}
                        >
                          {/* <SyntaxHighlighter
                          language="javascript"
                          style={tomorrow}
                        > */}
                          {item?.user_answer.answer_text}
                          {/* </SyntaxHighlighter> */}
                        </Box>
                      )}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "9px",
                        }}
                      >
                        <Image
                          src="/images/quiz/answer.svg"
                          alt="answer"
                          width={20}
                          height={20}
                        />
                        <Typography>Suggest Answer:</Typography>
                      </Box>
                      {item?.suggest_answer && (
                        <Box
                          className="scrollable"
                          sx={{
                            color: "var(--primary-color-300)",
                            ml: "30px",
                            maxHeight: "300px",
                            overflowY: "scroll",
                          }}
                        >
                          {/* <SyntaxHighlighter
                          language="javascript"
                          style={tomorrow}
                        > */}
                          {item?.suggest_answer?.answer_text}
                          {/* </SyntaxHighlighter> */}
                        </Box>
                      )}
                      {item?.user_score && (
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "9px",
                            ml: "-5px",
                            mt: 1,
                            userSelect: "none",
                          }}
                        >
                          <Image
                            src="/images/quiz/result.svg"
                            alt="result"
                            width={27}
                            height={27}
                          />
                          <Typography
                            sx={{
                              fontWeight: 500,
                              textAlign: "center",
                            }}
                          >
                            Result: <span>{item?.user_score}</span>
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  ) : (
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "9px",
                          pb: 1,
                          userSelect: "none",
                        }}
                      >
                        <Image
                          src="/images/quiz/answer.svg"
                          alt="answer"
                          width={20}
                          height={20}
                        />
                        <Typography
                          sx={{
                            color: "var(--primary-black)",
                            alignContent: "center",
                          }}
                        >
                          Your Answer:{" "}
                          <span style={{ fontWeight: "600" }}>
                            {item?.user_answer?.answer_text}
                          </span>
                        </Typography>
                      </Box>
                      {/* <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "9px",
                        my: 1,
                      }}
                    >
                      <Image
                        src="/images/icons/answer.svg"
                        alt="answer"
                        width={20}
                        height={20}
                      />
                      <Typography sx={{ color: "var(--primary-color-100)" }}>
                        Correct Answer:{" "}
                        <span style={{ display: "inline-block", pl: "4px", fontWeight: '600' }}>
                          {item?.correct_answer?.answer_text}
                        </span>
                      </Typography>
                    </Box> */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "9px",
                          ml: "-5px",
                          userSelect: "none",
                        }}
                      >
                        <Image
                          src="/images/quiz/result.svg"
                          alt="result"
                          width={27}
                          height={27}
                        />
                        <Typography
                          sx={{
                            color:
                              item?.result_answer === RESULT_QUESTION_CORRECT
                                ? "var(--green-color-100) !important"
                                : "#CF1818",
                            fontWeight: 500,
                            textAlign: "center",
                          }}
                        >
                          Result:{" "}
                          <span style={{ fontWeight: "600" }}>
                            {item?.result_answer === RESULT_QUESTION_CORRECT
                              ? "Correct"
                              : "Incorrect"}
                          </span>
                        </Typography>
                      </Box>
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}
