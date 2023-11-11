import { AnswerType } from "@/redux/features/quiz/type";
import { useAppSelector } from "@/redux/hook";
import { TYPE_QUIZ } from "@/utils/constants";
// import { LoadingButton } from "@mui/lab";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { PropsWithChildren, useEffect } from "react";
import { useSelector } from "react-redux";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Button from "../Common/Button";

const PreviewQuiz: React.FC<
  PropsWithChildren<{
    isShowPreview: boolean;
    onClose: () => void;
    handleSubmit: () => void;
  }>
> = ({ isShowPreview, onClose, handleSubmit }) => {
  const { listView, userAnswer } = useAppSelector((state) => state.quiz);

  const filterListView = listView?.map((item) => {
    const x = userAnswer.find((i) => i.order === item.order);
    if (x) return { ...item, value: x.valueAnswer };
    return item;
  });

  const checkWhiteSpace = (item: string) => {
    const isWhitespace = /^((&nbsp;|\s)*<[^>]+>)*(&nbsp;|\s)*$/.test(item);
    if (isWhitespace) {
      return true;
    }
    return false;
  };

  const removeWhiteSpace = (str: string) => {
    if (!str) return "";
    const trimmedStr = str.replace(/^(&nbsp;\s*)+|(&nbsp;\s*)+$/g, "");
    return trimmedStr;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);
  if (!isShowPreview) return null;

  return (
    <>
      <Box
        className="main quiz"
        sx={{
          mx: { xs: "20px", lg: "100px" },
          pt: "70px",
          mb: "100px",
        }}
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
            textAlign: "center",
            mb: 6,
          }}
        >
          Preview
        </Typography>
        <Typography
          sx={{
            color: "var(--primary-black)",
            fontSize: "24px",
            fontWeight: 500,
            lineHeight: "32px",
          }}
        >
          {filterListView[0]?.quiz_title}
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
          {removeWhiteSpace(filterListView[0]?.quiz_description)}
        </Typography>
        {filterListView?.map((item, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Box
              sx={{
                color: "var(--normal-color-200)",
                fontWeight: 500,
                textDecoration: "underline",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontWeight: 500 }}>
                Question {item?.order}:
              </Typography>
            </Box>
            <Typography
              sx={{
                color: "#121230",
                fontWeight: 500,
                mb: 1,
                userSelect: "none",
              }}
            >
              {item?.question}
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
            {item?.image && (
              <Box sx={{ maxWidth: "300px", userSelect: "none" }}>
                <Image
                  src={item?.image?.original_image}
                  // src={item?.image}
                  alt="question-image"
                  width={100}
                  height={150}
                  layout="responsive"
                />
              </Box>
            )}
            {item?.answer_list?.length > 0 &&
              item?.answer_list?.map((i: AnswerType, ind: number) => (
                <Box key={ind} sx={{ mb: 1, userSelect: "none" }}>
                  {i?.answer_text}
                </Box>
              ))}
            {item?.question_type === TYPE_QUIZ.ESSAY ? (
              <div
                className={` bg-[rgba(255, 190, 64, 0.12)] p-1 rounded-md ${
                  item.value ? "text-[#063852]" : " font-bold text-[#CF1818]"
                }`}
              >
                Answer:{" "}
                {item?.value && (
                  <Box
                    className="scrollable"
                    sx={{
                      color: "var(--primary-color-300)",
                      ml: "30px",
                      maxHeight: "300px",
                      overflowY: "scroll",
                      mt: 1,
                    }}
                  >
                    <SyntaxHighlighter language="javascript" style={tomorrow}>
                      {item?.value}
                    </SyntaxHighlighter>
                  </Box>
                )}
              </div>
            ) : (
              <p
                className={` bg-[rgba(255, 190, 64, 0.12)] p-1 rounded-md ${
                  item.value ? "text-[#063852]" : " font-bold text-[#CF1818]"
                }`}
              >
                Answer: {item.value}
              </p>
            )}
          </Box>
        ))}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            my: 6,
          }}
        >
          <Button
            className="bg-blue-800 w-[200px] rounded-sm hover:bg-[#003366] "
            onClick={handleSubmit}
          >
            <span>Submit</span>
          </Button>
          <span className=" cursor-pointer" onClick={onClose}>
            Back to assignment
          </span>
        </Box>
      </Box>
    </>
  );
};

export default PreviewQuiz;
