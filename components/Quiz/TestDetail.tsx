"use client";
import React, { memo, useEffect, useState } from "react";
import BeginTestModal from "./BeginTestModal";
import { useParams, useRouter } from "next/navigation";
import { selectAuth } from "@/redux/features/auth/reducer";
import { useSelector } from "react-redux";
import {
  Box,
  // Button,
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
} from "@mui/material";
import Image from "next/image";
import { TYPE_QUIZ } from "@/utils/constants";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { formatUtcTime } from "@/services/formatDate";
import {
  checkShowResult,
  getListQuesOfQuiz,
  getListResult,
  getStartTime,
  resetBeginTest,
  saveStartTime,
  sendMultiQuizResult,
  setListView,
  setQuesDetail,
  setQuizAnswer,
  setTimeStart,
} from "@/redux/features/quiz/action";
import Button from "../Common/Button";
import PreviewQuiz from "./PreviewQuiz";
import CountdownClock from "./CountdownClock";
import EndTestModal from "./EndTestModal";

// eslint-disable-next-line react/display-name
const MyMemoizedComponent = memo((time: { time: number }) => {
  return <CountdownClock date={Date.now() + time.time * 1000} />;
});

const TestDetail = () => {
  const router = useRouter();
  const token = useSelector(selectAuth);
  const [isModalBeginTestOpen, setIsModalBeginTestOpen] = useState(false);
  const [isModalShowImageOpen, setIsModalShowImageOpen] = useState(false);
  const [isModalEndTestOpen, setIsModalEndTestOpen] = useState(false);

  const [isShowPreview, setIsShowPreview] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { id } = useParams();

  const [value, setValue] = useState("");

  const dispatch = useAppDispatch();

  const {
    listQues,
    userAnswer,
    listView,
    listResultData,
    duration,
    dataStartTime,
    quesDetail,
    isCheckShowResult,
    loadingCheckShowResult,
    isSubmitInButton,
  } = useAppSelector((state) => state.quiz);

  const totalQuestion = listQues?.length;
  const answerUserChoose = userAnswer.find(
    (i) => i.question_id === quesDetail?.id
  );

  const filterListView = listView?.map((item) => {
    const x = userAnswer.find((i) => i.order === item.order);
    if (x) return { ...item, complete: true };
    return item;
  });

  const enterFullScreen = () => {
    const elem = document.documentElement as any;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
    window.scrollTo(0, 1);
  };

  const handleStartQuiz = async () => {
    if (!id || typeof id !== "string") return;
    if (!dataStartTime) {
      await dispatch(saveStartTime(id));
      dispatch(setTimeStart(Date.now()));
    }
    setIsModalBeginTestOpen(false);
    await dispatch(getListQuesOfQuiz(id));
    await dispatch(getStartTime(id));
    setIsModalBeginTestOpen(false);
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = function () {
      window.history.pushState(null, "", window.location.href);
    };
    enterFullScreen();
  };

  const handleShowImage = () => {
    setIsModalShowImageOpen(true);
  };

  const handleCopyPaste = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    return false;
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
  // const handleShowImage = () => {
  //   setIsModalShowImageOpen(true);
  // };

  const initialValue = answerUserChoose ? answerUserChoose?.value : "";

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
        // question_level: quesDetail?.question_level,
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
          // question_level: quesDetail?.question_level,
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
    const initValue = userAnswer.find((i) => i.order === quesDetail?.order + 1);
    setValue(initValue?.value || "");
    if (quesDetail?.order <= totalQuestion) {
      dispatch(setQuesDetail(listQues[quesDetail?.order]));
    }
  };

  const handleGoToQues = (order: number) => {
    dispatch(setQuesDetail(listQues[order - 1]));
    const initValue = userAnswer.find((i) => i.order === order);
    setValue(initValue?.value || "");
    setOpenModal(false);
  };

  const handleSendQuiz = async () => {
    const converUserAnswer = userAnswer.map((item) =>
      !item?.answer_content
        ? {
            question_id: item.question_id,
            answer_id: item.answer_id,
            question_type: item.question_type,
            // question_level: item.question_level,
          }
        : {
            question_id: item.question_id,
            answer_id: item.answer_id,
            question_type: item.question_type,
            answer_content: item.answer_content,
            // question_level: item.question_level,
          }
    );
    const list = {
      post_id: listQues[0]?.post_id,
      start_time: formatUtcTime(dataStartTime),
      end_time: formatUtcTime(Date.now()),
      data: converUserAnswer,
    };
    const res = await dispatch(sendMultiQuizResult(list));
    if (res.payload) {
      // dispatch(
      //   setToast({
      //     message: "Submit your assignment successfully!",
      //     severity: "success",
      //   })
      // );
      router.push(`/result/${id}`);
      // dispatch(setShowResult(true));
      dispatch(getListResult(listQues[0]?.post_id));
    }
  };

  const [hasFetchData, setHasFetchData] = useState(false);

  // const checkWhiteSpace = (item) => {
  //   const isWhitespace = /^((&nbsp;|\s)*<[^>]+>)*(&nbsp;|\s)*$/.test(item);
  //   if (isWhitespace) {
  //     return true;
  //   }
  //   return false;
  // };

  const removeWhiteSpace = (str: string) => {
    if (!str) return "";
    const trimmedStr = str.replace(/^(&nbsp;\s*)+|(&nbsp;\s*)+$/g, "");
    return trimmedStr;
  };

  useEffect(() => {
    if (token && id) {
      if (!hasFetchData) {
        const fetchData = async () => {
          if (typeof id !== "string") return;
          dispatch(resetBeginTest());
          const resStartTime = await dispatch(getStartTime(id));
          const res = await dispatch(checkShowResult(id));
          if (res.payload) {
            await dispatch(getListResult(id));
          } else {
            if (resStartTime.payload?.start_time) return await handleSendQuiz();
            setIsModalBeginTestOpen(true);
          }
        };
        fetchData();
        setHasFetchData(true);
      }
    }
  }, [setHasFetchData]);

  useEffect(() => {
    if (isSubmitInButton) return;
    const handleKeyPress = async (event: any) => {
      if (!document.fullscreenElement) {
        await handleSendQuiz();
      }
    };

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
    document.addEventListener("fullscreenchange", handleKeyPress);

    return () => {
      document.removeEventListener("fullscreenchange", handleKeyPress);
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  // if (loadingCheckShowResult) {
  //   return null;
  // }

  useEffect(() => {
    if (token && id) {
      setIsModalBeginTestOpen(true);
    }
  }, []);

  return (
    <>
      {
        // !isCheckShowResult ? (
        isModalBeginTestOpen ? (
          <BeginTestModal
            isModalBeginTestOpen={isModalBeginTestOpen}
            onCloseModalBeginTest={() => setIsModalBeginTestOpen(false)}
            handleStartQuiz={handleStartQuiz}
          />
        ) : !isShowPreview && quesDetail ? (
          listQues?.length > 0 &&
          !loadingCheckShowResult && (
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
                }}
              >
                {quesDetail?.quiz_title}
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
                {removeWhiteSpace(quesDetail?.quiz_description)}
              </Typography>

              <Card
                // name="quiz"
                sx={{
                  display: "flex",
                  gap: "40px",
                  flexDirection: { xs: "column-reverse", lg: "row" },
                  justifyContent: "center",
                  alignItems: { lg: "start" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#F9F9F9",
                    borderRadius: "20px",
                    p: "20px",
                    minWidth: { lg: "556px" },
                    maxWidth: { lg: "556px" },
                  }}
                >
                  {/* FillinQuiz */}
                  {quesDetail?.question_type === TYPE_QUIZ.ESSAY && (
                    <CardContent
                      sx={{ flex: "1 0 auto", width: { lg: "100%" } }}
                    >
                      <Typography
                        sx={{
                          color: "var(--primary-black)",
                          fontSize: "26px",
                          fontWeight: 500,
                          lineHeight: "34px",
                          mb: "25px",
                        }}
                      >
                        Question <span>{quesDetail?.order}</span>
                      </Typography>
                      <Typography
                        sx={{
                          color: "#121230",
                          fontSize: "26px",
                          fontWeight: 500,
                          lineHeight: "39px",
                          userSelect: "none",
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
                                userSelect: "none",
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
                            userSelect: "none",
                          }}
                          onClick={handleShowImage}
                        >
                          <Image
                            src={quesDetail?.image?.original_image}
                            // src={quesDetail?.image}
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
                        onCopy={handleCopyPaste}
                        onCut={handleCopyPaste}
                        onPaste={handleCopyPaste}
                      />
                    </CardContent>
                  )}
                  {/* MultipleQuiz */}
                  {(quesDetail?.question_type === TYPE_QUIZ.MULTIPLE_CHOICE ||
                    quesDetail?.question_type === TYPE_QUIZ.IQ) && (
                    <CardContent
                      sx={{
                        flex: "1 0 auto",
                        minHeight: "402px",
                        maxWidth: "100%",
                        width: { lg: "100%" },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "var(--primary-black)",
                          fontSize: "26px",
                          fontWeight: 500,
                          lineHeight: "34px",
                          mb: "25px",
                        }}
                      >
                        Question <span>{quesDetail?.order}</span>
                      </Typography>
                      <Typography
                        sx={{
                          color: "#121230",
                          fontSize: "26px",
                          fontWeight: 500,
                          lineHeight: "39px",
                          mb: "20px",
                          userSelect: "none",
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
                                userSelect: "none",
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
                            userSelect: "none",
                          }}
                          onClick={handleShowImage}
                        >
                          <Image
                            src={quesDetail?.image?.original_image}
                            // src={quesDetail?.image}
                            alt="question-image"
                            width={100}
                            height={150}
                            layout="responsive"
                          />
                        </Box>
                      )}
                      <FormControl component="fieldset" sx={{ width: "100%" }}>
                        <RadioGroup
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name="controlled-radio-buttons-group"
                          value={value}
                          onChange={handleChange}
                        >
                          <Grid container columns={12}>
                            {quesDetail?.answer_list?.map((item, index) => (
                              <Grid
                                key={index}
                                item
                                xs={12}
                                sm={12}
                                sx={{ mb: "14px" }}
                              >
                                <FormControlLabel
                                  value={item?.id}
                                  control={
                                    <Radio
                                      icon={
                                        <Box
                                          sx={{
                                            backgroundColor:
                                              "var(--primary-color-700)",
                                            height: "38px",
                                            width: "38px",
                                            borderRadius: "5px",
                                          }}
                                        />
                                      }
                                      checkedIcon={
                                        <Box
                                          sx={{
                                            height: "38px",
                                            width: "38px",
                                            backgroundColor:
                                              "var(--primary-color-100)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderRadius: "5px",
                                          }}
                                        >
                                          <Typography
                                            sx={{
                                              color: "white",
                                              fontSize: "30px",
                                            }}
                                          >
                                            &#10003;
                                          </Typography>
                                        </Box>
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
                    </CardContent>
                  )}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      px: "12px",
                      pb: "20px",
                    }}
                  >
                    <div className="flex items-center flex-col sm:flex-row gap-6">
                      <Button
                        className=" bg-[#0068b5] w-[180px] flex items-center !px-4 "
                        disabled={quesDetail?.order === 1}
                        onClick={handlePrevQuestion}
                      >
                        <span>Previous question</span>
                      </Button>
                      <Button
                        className=" bg-[#0068b5] w-[180px] flex items-center !px-4 "
                        disabled={quesDetail?.order === listQues?.length}
                        onClick={handleNextQuestion}
                      >
                        <span>Next question</span>
                      </Button>
                    </div>
                    <Typography
                      sx={{
                        color: "#CF1818",
                        fontSize: "16px",
                        lineHeight: "22px",
                        fontWeight: 500,
                        textDecorationLine: "underline",
                        cursor: "pointer",
                        userSelect: "none",
                      }}
                      onClick={handleEndTest}
                    >
                      End Test
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "row", lg: "column" },
                    alignItems: "center",
                    justifyContent: "center",
                    gap: { xs: "40px", lg: 0 },
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
                        backgroundColor: "var(--primary-color-100)",
                        borderRadius: "20px",
                        width: "295px",
                        height: "130px",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        userSelect: "none",
                      }}
                    >
                      <Typography sx={{ color: "white" }}>
                        Remaining Time
                      </Typography>
                      <MyMemoizedComponent
                        time={
                          duration - (Date.now() - dataStartTime) / 1000 < 0
                            ? 0
                            : duration - (Date.now() - dataStartTime) / 1000
                        }
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        gap: "18px",
                        alignItems: "center",
                        justifyContent: "center",
                        mt: 2,
                        mb: { lg: "47px" },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "var(--primary-color-100)",
                          fontWeight: 500,
                          userSelect: "none",
                        }}
                      >
                        <span>{userAnswer?.length}</span>/
                        <span>{listQues?.length}</span> Question done
                      </Typography>
                      <Typography
                        sx={{
                          color: "#9EA3AE",
                          fontWeight: 300,
                          fontSize: "14px",
                          lineHeight: "20px",
                          textDecoration: "underline",
                          cursor: "pointer",
                          userSelect: "none",
                        }}
                        onClick={handeViewDetail}
                      >
                        View Details
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: { xs: "none", md: "inline-block" },
                      userSelect: "none",
                    }}
                  >
                    <Image
                      src="/images/quiz/quiz-icon.png"
                      alt="quiz"
                      width={176}
                      height={205}
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
        )
      }
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box
          sx={{ p: 5, minWidth: "560px", minHeight: "420px" }}
          onCopy={(e) => {
            e.preventDefault();
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              cursor: "pointer",
            }}
            onClick={handleCloseModal}
          >
            <Image src="/icons/close.svg" alt="close" width={13} height={13} />
          </Box>
          <Grid container columns={12} gap={1}>
            {filterListView?.map((item, index) => (
              <Grid key={index} xs={12} md={5} sx={{ mr: 4 }}>
                <Box
                  sx={{
                    fontSize: "14px",
                    lineHeight: "20px",
                    display: "flex",
                    alignItems: "center",
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
                        userSelect: "none",
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
      </Dialog>
      <EndTestModal
        isModalEndTestOpen={isModalEndTestOpen}
        onClose={() => setIsModalEndTestOpen(false)}
      />
      {/* <ShowImageModal
        isModalShowImageOpen={isModalShowImageOpen}
        onCloseModalShowImage={() => setIsModalShowImageOpen(false)}
        dataImage={quesDetail?.image?.original_image}
      /> */}
    </>
  );
};

export default TestDetail;
