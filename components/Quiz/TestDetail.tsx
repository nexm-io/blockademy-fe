"use client";
import React, { memo, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { selectAuth } from "@/redux/features/auth/reducer";
import { useSelector } from "react-redux";
import {
  Box,
  Card,
  CardContent,
  Dialog,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Grid,
  Stack,
  Skeleton,
} from "@mui/material";
import Image from "next/image";
import { TYPE_QUIZ, soleil } from "@/utils/constants";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  getListQuesOfQuiz,
  resetBeginTest,
  setListView,
  setQuesDetail,
  setQuizAnswer,
} from "@/redux/features/quiz/action";
import Button from "../Common/Button";
import PreviewQuiz from "./PreviewQuiz";
import CountdownClock from "./CountdownClock";
import EndTestModal from "./EndTestModal";
import ShowImageModal from "./ShowImageModal";

// eslint-disable-next-line react/display-name
const MyMemoizedComponent = memo((time: { time: number }) => {
  return <CountdownClock date={Date.now() + time.time * 1000} />;
});

const TestDetail = () => {
  const router = useRouter();
  const token = useSelector(selectAuth);
  const [isModalShowImageOpen, setIsModalShowImageOpen] = useState(false);
  const [isModalEndTestOpen, setIsModalEndTestOpen] = useState(false);
  const [hasFetchData, setHasFetchData] = useState(false);
  const [isShowPreview, setIsShowPreview] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [value, setValue] = useState("");
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { listQues, userAnswer, listView, quesDetail, loadingCheckShowResult } =
    useAppSelector((state) => state.quiz);

  const totalQuestion = listQues?.length;
  const filterListView = listView?.map((item) => {
    const x = userAnswer.find((i) => i.order === item.order);
    if (x) return { ...item, complete: true };
    return item;
  });

  const handleShowImage = () => {
    setIsModalShowImageOpen(true);
  };

  const handeViewDetail = () => {
    setOpenModal(true);
  };

  const handleEndTest = () => {
    setIsShowPreview(true);
  };

  const checkWhiteSpace = (item: string) => {
    const isWhitespace = /^((&nbsp;|\s)*<[^>]+>)*(&nbsp;|\s)*$/.test(item);
    if (isWhitespace) {
      return true;
    }
    return false;
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleChange = (event: any) => {
    if (!quesDetail) return;
    const answerItem = quesDetail?.answer_list?.find(
      (i) => i.id === Number(event.target.value)
    );
    if (!answerItem) return;
    dispatch(
      setListView([
        {
          ...quesDetail,
          complete: true,
          value: answerItem?.answer_text,
        },
      ])
    );
    dispatch(
      setQuizAnswer({
        question_id: quesDetail?.id,
        answer_id: event.target.value,
        question_type: quesDetail?.question_type,
        order: quesDetail?.order,
        value: event.target.value,
        valueAnswer: answerItem?.answer_text,
      })
    );
    setValue(event.target.value);
  };
  const handleAnswer = (val: string) => {
    if (!quesDetail) return;
    dispatch(
      setListView([
        {
          ...quesDetail,
          complete: true,
          value: val,
        },
      ])
    );
    const answer_id = quesDetail?.answer_list.find(
      (i) => i.answer_text === val
    )?.id;
    if (answer_id) {
      dispatch(
        setQuizAnswer({
          question_id: quesDetail?.id,
          answer_id: `${answer_id}`,
          answer_content: val,
          question_type: quesDetail?.question_type,
          order: quesDetail?.order,
          value: val,
          valueAnswer: val,
        })
      );
    }
    setValue(val);
  };

  const handlePrevQuestion = async () => {
    if (!quesDetail?.order) return;
    const initValue = userAnswer.find((i) => i.order === quesDetail?.order - 1);
    setValue(initValue?.value || "");
    if (quesDetail?.order > 1) {
      dispatch(setQuesDetail(listQues[quesDetail?.order - 2]));
    }
  };

  const handleNextQuestion = async () => {
    if (!quesDetail?.order) return;
    if (quesDetail?.order === listQues?.length) {
      handleEndTest();
    } else {
      const initValue = userAnswer.find(
        (i) => i.order === quesDetail?.order + 1
      );
      setValue(initValue?.value || "");
      if (quesDetail?.order < totalQuestion) {
        dispatch(setQuesDetail(listQues[quesDetail?.order]));
      }
    }
  };

  const handleGoToQues = (order: number) => {
    dispatch(setQuesDetail(listQues[order - 1]));
    const initValue = userAnswer.find((i) => i.order === order);
    setValue(initValue?.value || "");
    setOpenModal(false);
  };

  useEffect(() => {
    if (token && id) {
      if (!hasFetchData) {
        const fetchData = async () => {
          if (typeof id !== "string") return;
          dispatch(resetBeginTest());
        };
        fetchData();
        setHasFetchData(true);
      }
    }
  }, [setHasFetchData]);

  useEffect(() => {
    const loadData = async () => {
      if (!id || typeof id !== "string") return;
      const { payload } = await dispatch(getListQuesOfQuiz(id));
      if (payload?.data.length <= 0) router.push("/not-found");
    };
    loadData();
  }, [id]);

  return !quesDetail || listQues?.length === 0 || loadingCheckShowResult ? (
    <div className="mt-11 min-h-[65vh]">
      <Skeleton variant="rounded" className="mb-8" height={40} />
      <div className="relative mt-4 lg:mt-10 flex flex-col-reverse lg:flex-row gap-[28px]">
        <Skeleton variant="rounded" sx={{ width: "100%" }} height={442} />
        <div className="flex flex-col gap-4 lg:min-w-[295px]">
          <Skeleton variant="rounded" sx={{ width: "100%" }} height={98} />
          <Skeleton variant="rounded" sx={{ width: "100%" }} height={16} />
          <Skeleton variant="rounded" sx={{ width: "100%" }} height={40} />
          <Skeleton variant="rounded" sx={{ width: "100%" }} height={40} />
          <div className="hidden lg:flex justify-center">
            <Skeleton variant="rounded" sx={{ width: "122px" }} height={142} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <>
      {!isShowPreview && quesDetail ? (
        listQues?.length > 0 &&
        !loadingCheckShowResult && (
          <Box
            sx={{
              pt: "44px",
              mb: "45px",
              color: "#1E2329",
              minHeight: "65vh",
            }}
          >
            <Typography
              sx={{
                color: "var(--primary-black)",
                fontSize: "36px",
                fontWeight: 500,
                lineHeight: "32px",
                mb: "40px",
              }}
            >
              {quesDetail?.quiz_title}
            </Typography>

            <Card
              sx={{
                display: "flex",
                gap: "28px",
                flexDirection: { xs: "column-reverse", lg: "row" },
                justifyContent: "between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  backgroundColor: "#F5F8FF",
                  height: "fit-content",
                  borderRadius: "8px",
                  p: "24px",
                  width: "100%",
                  minHeight: "500px",
                }}
              >
                {quesDetail?.question_type === TYPE_QUIZ.ESSAY && (
                  <CardContent
                    sx={{
                      width: '{ lg: "100%" }',
                      p: "0 !important",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "var(--primary-black)",
                        fontSize: "20px",
                        fontWeight: 400,
                        lineHeight: "28px",
                        mb: "12px",
                      }}
                    >
                      Question <span>{quesDetail?.order}</span>
                    </Typography>
                    <Typography
                      sx={{
                        color: "#121230",
                        fontSize: "24px",
                        fontWeight: 400,
                        lineHeight: "32px",
                        mb: "32px",
                      }}
                    >
                      {quesDetail?.question}
                    </Typography>
                    {quesDetail?.question_description &&
                      !checkWhiteSpace(quesDetail?.question_description) && (
                        <Box sx={{ overflow: "auto" }}>
                          <Box
                            sx={{
                              color: "#71738B",
                              lineHeight: "25px",
                            }}
                            dangerouslySetInnerHTML={{
                              __html: quesDetail?.question_description,
                            }}
                          />
                        </Box>
                      )}
                    {quesDetail?.image && (
                      <Box
                        sx={{
                          maxWidth: "200px",
                          cursor: "zoom-in",
                        }}
                        onClick={handleShowImage}
                      >
                        <Image
                          src={quesDetail?.image?.original_image}
                          alt="question-image"
                          width={100}
                          height={150}
                          layout="responsive"
                        />
                      </Box>
                    )}
                    <TextField
                      sx={{
                        marginTop: "17px",
                        mb: "23px",
                        width: { lg: "95%" },
                      }}
                      fullWidth
                      name="quiz"
                      multiline
                      rows={5}
                      value={value}
                      placeholder="Your answer"
                      onChange={(event) => {
                        handleAnswer(event.target.value);
                      }}
                    />
                  </CardContent>
                )}
                {(quesDetail?.question_type === TYPE_QUIZ.MULTIPLE_CHOICE ||
                  quesDetail?.question_type === TYPE_QUIZ.IQ) && (
                  <CardContent
                    sx={{
                      maxWidth: "100%",
                      width: { lg: "100%" },
                      p: "0 !important",
                    }}
                  >
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      flexWrap="nowrap"
                      alignItems="flex-start"
                    >
                      <Typography
                        sx={{
                          color: "#1F37B3",
                          fontSize: "20px",
                          fontWeight: 400,
                          lineHeight: "28px",
                          mb: "12px",
                        }}
                      >
                        Question <span>{quesDetail?.order}</span>
                      </Typography>
                    </Stack>

                    <Typography
                      sx={{
                        color: "#121230",
                        fontSize: "24px",
                        fontWeight: 400,
                        lineHeight: "32px",
                        mb: "32px",
                      }}
                    >
                      {quesDetail?.question}
                    </Typography>
                    {quesDetail?.question_description &&
                      !checkWhiteSpace(quesDetail?.question_description) && (
                        <Box
                          sx={{
                            ml: 4,
                            fontSize: "18px",
                            overflow: "auto",
                          }}
                        >
                          <Box
                            sx={{
                              color: "#71738B",
                              lineHeight: "25px",
                            }}
                            dangerouslySetInnerHTML={{
                              __html: quesDetail?.question_description,
                            }}
                          />
                        </Box>
                      )}
                    {quesDetail?.image && (
                      <Box
                        sx={{
                          maxWidth: "200px",
                          cursor: "zoom-in",
                        }}
                        onClick={handleShowImage}
                      >
                        <Image
                          src={quesDetail?.image?.original_image}
                          alt="question-image"
                          width={100}
                          height={150}
                          layout="responsive"
                        />
                      </Box>
                    )}
                    <FormControl sx={{ width: "100%", mb: "32px" }}>
                      <RadioGroup
                        id={`question-${quesDetail.id}`}
                        value={value}
                        onChange={handleChange}
                      >
                        {quesDetail?.answer_list?.map((item, index) => (
                          <Grid
                            key={index}
                            item
                            xs={12}
                            sm={12}
                            sx={{ mb: "10px" }}
                          >
                            <FormControlLabel
                              id={`${item?.id}`}
                              name={`${item?.id}`}
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
                                  sx={{
                                    "&:hover": { bgcolor: "transparent" },
                                  }}
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
                              }}
                            />
                            {item?.image && (
                              <Box sx={{ maxWidth: "200px", width: "95%" }}>
                                <Image
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
                      </RadioGroup>
                    </FormControl>
                  </CardContent>
                )}
                <div className="flex items-center  justify-between flex-col sm:flex-row gap-2 sm:gap-0">
                  <Button
                    className={`!bg-[#C6EAFF] !rounded-[4px] !text-[#0B76A4] ${
                      quesDetail?.order === 1 ? "" : "hover:!bg-[#B7E5FF]"
                    } w-[180px] flex items-center !px-4`}
                    disabled={quesDetail?.order === 1}
                    onClick={handlePrevQuestion}
                  >
                    <span>Previous Question</span>
                  </Button>
                  <Button
                    className=" !bg-[#1F37B3] hover:!bg-[#1530BC] !rounded-[4px] w-[180px] flex items-center !px-4 "
                    onClick={handleNextQuestion}
                  >
                    {quesDetail?.order === listQues?.length ? (
                      <span>Finish Test</span>
                    ) : (
                      <span>Next Question</span>
                    )}
                  </Button>
                </div>
              </Box>
              <Box
                sx={{
                  width: { xs: "full", lg: "295px" },
                  display: "flex",
                  flexDirection: { xs: "row", lg: "column" },
                  alignItems: "center",
                  justifyContent: { xs: "center", lg: "start" },
                  gap: { xs: "40px", lg: 0 },
                  borderRadius: "8px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#F5F8FF",
                      borderRadius: "8px",
                      width: "295px",
                      height: "98px",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Typography>Remaining Time</Typography>
                    <MyMemoizedComponent time={listQues[0].time} />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "18px",
                      alignItems: "center",
                      justifyContent: "center",
                      my: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 500,
                        textAlign: "center",
                      }}
                    >
                      You have completed {userAnswer?.length} out of{" "}
                      {listQues?.length} questions.
                    </Typography>
                  </Box>
                  <Button
                    onClick={() => setIsShowPreview(true)}
                    className={` !bg-[#1F37B3] text-white  !rounded-[4px] !w-full flex items-center !px-4`}
                  >
                    <span>Finish Test</span>
                  </Button>
                  <div className="flex items-center flex-col gap-2 w-full mt-2">
                    <Button
                      className=" !bg-[#C6EAFF] !text-[#0B76A4] hover:!bg-[#B7E5FF] !rounded-[4px] !w-full flex items-center !px-4 "
                      onClick={handeViewDetail}
                    >
                      <span>Review Answers</span>
                    </Button>
                  </div>
                </Box>
                <Box
                  sx={{
                    display: { xs: "none", md: "inline-block" },
                    mt: 4,
                  }}
                >
                  <Image
                    src="/images/quiz/quiz-icon.png"
                    alt="quiz"
                    width={122}
                    height={142}
                  />
                </Box>
              </Box>
            </Card>
          </Box>
        )
      ) : (
        <PreviewQuiz
          isShowPreview={isShowPreview}
          onClose={() => setIsShowPreview(false)}
          handleSubmit={() => setIsModalEndTestOpen(true)}
        />
      )}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div
          className={` ${soleil.variable} font-sans !text-[12px] flex flex-col items-center`}
        >
          <Box
            sx={{
              px: 2,
              py: 5,
              minWidth: { xs: "unset", lg: "600px" },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "18px",
                right: "18px",
                cursor: "pointer",
              }}
              onClick={handleCloseModal}
            >
              <Image
                src="/icons/close.svg"
                alt="close"
                width={13}
                height={13}
              />
            </Box>
            <Grid
              container
              columns={12}
              gap={1}
              sx={{ justifyContent: "center" }}
            >
              {filterListView?.map((item, index) => (
                <Grid
                  key={index}
                  xs={12}
                  md={5}
                  sx={{
                    mr: 4,
                    pl: { xs: "30px", md: "4px" },
                  }}
                >
                  <Box
                    sx={{
                      fontSize: "14px",
                      lineHeight: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minWidth: "240px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "var(--primary-color-100)",
                        fontWeight: 500,
                        mr: "20px",
                      }}
                    >
                      Question{" "}
                      <Box
                        component="span"
                        sx={{
                          display: "inline-block",
                          width: "10px",
                          textAlign: "center",
                        }}
                      >
                        {item?.order}
                      </Box>
                    </Typography>
                    {item?.complete ? (
                      <Typography
                        sx={{
                          color: "var(--primary-black)",
                          fontWeight: 500,
                          minWidth: "75px",
                        }}
                      >
                        Completed
                      </Typography>
                    ) : (
                      <Typography
                        sx={{
                          color: "var(--primary-color-100)",
                          fontWeight: 300,
                          minWidth: "75px",
                        }}
                      >
                        Not Started
                      </Typography>
                    )}
                    <Typography
                      sx={{
                        color: "var(--primary-color-700)",
                        textDecoration: "underline",
                        fontWeight: 300,
                        ml: "11px",
                        cursor: "pointer",
                        "&:hover": { color: "var(--primary-color-100)" },
                      }}
                      onClick={() => handleGoToQues(item?.order)}
                    >
                      View
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
      </Dialog>
      <EndTestModal
        isModalEndTestOpen={isModalEndTestOpen}
        onClose={() => setIsModalEndTestOpen(false)}
      />
      {quesDetail?.image?.original_image && (
        <ShowImageModal
          isModalShowImageOpen={isModalShowImageOpen}
          onCloseModalShowImage={() => setIsModalShowImageOpen(false)}
          dataImage={quesDetail?.image?.original_image}
        />
      )}
    </>
  );
};

export default TestDetail;
