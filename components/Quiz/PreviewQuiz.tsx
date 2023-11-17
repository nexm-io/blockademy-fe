import { useAppSelector } from "@/redux/hook";
import Image from "next/image";
import React, { PropsWithChildren, useEffect } from "react";
import Button from "../Common/Button";
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Grid,
} from "@mui/material";

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
    if (x)
      return { ...item, value: x.valueAnswer, answer_id: Number(x.answer_id) };
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
        <div className="text-[#1E2329] text-[36px] leading-[40px] font-bold">
          Preview
        </div>
        <h3 className="text-[#1E2329] text-[28px] leading-[40px] font-normal mt-6">
          {filterListView[0]?.quiz_title}
        </h3>

        <div className="border-t border-[#EDEDED] mt-[20px] pt-[20px] grid gap-[42px]">
          {filterListView?.map((item, index) => (
            <div key={index}>
              <p className="text-[#1F37B3] text-[20px] leading-[28px] font-normal">
                Question {item?.order}
              </p>
              <p className="mt-3 text-[#1E2329] text-[24px] leading-[32px]">
                {item?.question}
              </p>

              {/* NOTE: only text */}
              {/* {item?.question_description &&
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
                )} */}

              <div className="mt-8">
                {item?.answer_list?.length > 0 ? (
                  <FormControl component="fieldset" sx={{ width: "100%" }}>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={item.answer_id}
                    >
                      <Grid container columns={12}>
                        {item?.answer_list?.map((item, index) => (
                          <Grid
                            key={index}
                            item
                            xs={12}
                            sm={12}
                            sx={{ mb: "10px" }}
                          >
                            <FormControlLabel
                              value={item?.id}
                              control={
                                <Radio
                                  icon={
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <circle
                                        cx="12"
                                        cy="12"
                                        r="11.5"
                                        fill="white"
                                        stroke="#89939E"
                                      />
                                    </svg>
                                  }
                                  checkedIcon={
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <circle
                                        cx="12"
                                        cy="12"
                                        r="11.5"
                                        stroke="#1F37B3"
                                      />
                                      <circle
                                        cx="12"
                                        cy="12"
                                        r="6"
                                        fill="#1F37B3"
                                      />
                                    </svg>
                                  }
                                  name="checkbox"
                                  sx={{
                                    "&:hover": { bgcolor: "transparent" },
                                  }}
                                  disableRipple
                                />
                              }
                              label={item.answer_text}
                              sx={{
                                ":hover": {
                                  backgroundColor: "unset",
                                },
                                fontSize: "20px",
                                lineHeight: "29px",
                                color: "#1E1E3A",
                                minWidth: "170px",
                                wordBreak: "break-word",
                                userSelect: "none",
                              }}
                            />
                            {item?.image && (
                              <Box sx={{ maxWidth: "200px", width: "95%" }}>
                                <Image
                                  // src={item?.image}
                                  src={item?.image?.original_image}
                                  alt="question-image"
                                  width={100}
                                  height={150}
                                  layout="responsive"
                                />
                              </Box>
                            )}
                          </Grid>
                        ))}
                      </Grid>
                    </RadioGroup>
                  </FormControl>
                ) : null}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6">
          <Button
            className="!bg-[#C6EAFF] group !hover:bg-[#C6EAFF]/50 !rounded-[4px] w-[184px] px-2"
            onClick={onClose}
          >
            <span className="!text-[#0B76A4] !group-hover:text-[#0B76A4]/80 text-base">
              Back to Assignment
            </span>
          </Button>
          <Button
            className="!bg-[#0068b5] hover:!bg-[#004070] !rounded-[4px] w-[184px] px-2"
            onClick={handleSubmit}
          >
            <span className="text-base">Submit</span>
          </Button>
        </div>
      </Box>
    </>
  );
};

export default PreviewQuiz;
