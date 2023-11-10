"use client";
import React, { useEffect, useState } from "react";
import BeginTestModal from "./BeginTestModal";
import { useParams, useRouter } from "next/navigation";
import { selectAuth } from "@/redux/features/auth/reducer";
import { useSelector } from "react-redux";
import {
  Box,
  Button,
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

const TestDetail = () => {
  const router = useRouter();
  const token = useSelector(selectAuth);
  const [isModalBeginTestOpen, setIsModalBeginTestOpen] = useState(false);
  const [isModalShowImageOpen, setIsModalShowImageOpen] = useState(false);
  const [isShowPreview, setIsShowPreview] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { id } = useParams();
  const [value, setValue] = useState("");

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
    // if (!dataStartTime) {
    //   await dispatch(saveStartTime(id));
    //   dispatch(setTimeStart(Date.now()));
    // }
    // setIsModalBeginTestOpen(false);
    // await dispatch(getListQuesOfQuiz({ id: id }));
    // await dispatch(getStartTime(id));
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

  const handleAnswer = (val: React.SetStateAction<string>) => {
    setValue(val);
  };

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(event.target.value);
  };

  const handleCopyPaste = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    return false;
  };

  const handlePrevQuestion = async () => {};

  const handleNextQuestion = async () => {};

  const handeViewDetail = () => {
    setOpenModal(true);
  };

  const handleEndTest = () => {
    setIsShowPreview(true);
  };

  const removeWhiteSpace = (str: string) => {
    if (!str) return "";
    const trimmedStr = str.replace(/^(&nbsp;\s*)+|(&nbsp;\s*)+$/g, "");
    return trimmedStr;
  };

  useEffect(() => {
    if (token && id) {
      setIsModalBeginTestOpen(true);
    }
  }, []);

  return (
    <>
      {isModalBeginTestOpen && (
        <BeginTestModal
          isModalBeginTestOpen={isModalBeginTestOpen}
          onCloseModalBeginTest={() => setIsModalBeginTestOpen(false)}
          handleStartQuiz={handleStartQuiz}
        />
      )}

      <Box
        className="main quiz"
        sx={{
          mx: { xs: "20px", lg: "100px" },
          pt: "70px",
          mb: "100px",
        }}
      >
        <Typography
          sx={{
            color: "var(--primary-color-200)",
            fontSize: "24px",
            fontWeight: 500,
            lineHeight: "32px",
          }}
        >
          quiz_title
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
          {removeWhiteSpace("description")}
        </Typography>

        <Card>
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
            <CardContent sx={{ flex: "1 0 auto", width: { lg: "100%" } }}>
              <Typography
                sx={{
                  color: "var(--primary-color-200)",
                  fontSize: "26px",
                  fontWeight: 500,
                  lineHeight: "34px",
                  mb: "25px",
                }}
              >
                Question <span>1</span>
              </Typography>
              <Typography
                sx={{
                  color: "#121230",
                  fontSize: "26px",
                  fontWeight: 500,
                  lineHeight: "39px",
                }}
              >
                Lorem ipsum dolor sit amet.
              </Typography>
              <Box sx={{ overflow: "auto" }}>
                <Box
                  sx={{ color: "#71738B", lineHeight: "25px" }}
                  dangerouslySetInnerHTML={{
                    __html: <h1>Hello</h1>,
                  }}
                />
              </Box>
              <Box
                sx={{ maxWidth: "200px", cursor: "zoom-in" }}
                onClick={handleShowImage}
              >
                <Image
                  src="/images/quiz/quiz-icon.png"
                  alt="question-image"
                  width={100}
                  height={150}
                  layout="responsive"
                />
              </Box>
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
            {/* MultipleQuiz */}
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
                  color: "var(--primary-color-200)",
                  fontSize: "26px",
                  fontWeight: 500,
                  lineHeight: "34px",
                  mb: "25px",
                }}
              >
                Question <span>2</span>
              </Typography>
              <Typography
                sx={{
                  color: "#121230",
                  fontSize: "26px",
                  fontWeight: 500,
                  lineHeight: "39px",
                  mb: "20px",
                }}
              >
                Lorem ipsum dolor sit amet.
              </Typography>
              <Box
                sx={{
                  ml: 4,
                  fontSize: "18px",
                  overflow: "auto",
                }}
              >
                <Box
                  sx={{ color: "#71738B", lineHeight: "25px" }}
                  dangerouslySetInnerHTML={{
                    __html: "<h1>Headingggg</h1>",
                  }}
                />
              </Box>
              <Box
                sx={{ maxWidth: "200px", cursor: "zoom-in" }}
                onClick={handleShowImage}
              >
                <Image
                  src="/images/quiz/quiz-icon.png"
                  alt="question-image"
                  width={100}
                  height={150}
                  layout="responsive"
                />
              </Box>
              <FormControl component="fieldset" sx={{ width: "100%" }}>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={value}
                  onChange={handleChange}
                >
                  <Grid container columns={12}>
                    <Grid item xs={12} sm={12} sx={{ mb: "14px" }}>
                      <FormControlLabel
                        value="aa"
                        control={
                          <Radio
                            icon={
                              <Box
                                sx={{
                                  backgroundColor: "rgba(58, 201, 232, 0.12)",
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
                                  backgroundColor: "var(--primary-color-200)",
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
                        label="Text demo"
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
                      <Box sx={{ maxWidth: "200px", width: "95%" }}>
                        <Image
                          src="/images/quiz/quiz-icon.png"
                          alt="question-image"
                          width={100}
                          height={150}
                          layout="responsive"
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </RadioGroup>
              </FormControl>
            </CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: "12px",
                pb: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <Button
                  fullWidth
                  variant="contained"
                  name="quiz"
                  sx={{
                    backgroundColor: "var(--primary-color-200)",
                    fontWeight: 400,
                    width: "180px",
                    display: "flex",
                    alignItems: "center",
                    mr: { sm: "14px" },
                    mb: { xs: "14px", sm: 0 },
                  }}
                  disabled={false}
                  onClick={handlePrevQuestion}
                >
                  <span>Previous question</span>
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  name="quiz"
                  sx={{
                    backgroundColor: "var(--primary-color-200)",
                    fontWeight: 400,
                    width: "180px",
                    display: "flex",
                    alignItems: "center",
                  }}
                  disabled={false}
                  onClick={handleNextQuestion}
                >
                  <span>Next question</span>
                </Button>
              </Box>
              <Typography
                sx={{
                  color: "#CF1818",
                  fontSize: "16px",
                  lineHeight: "22px",
                  fontWeight: 500,
                  textDecorationLine: "underline",
                  cursor: "pointer",
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
                }}
              >
                <Typography sx={{ color: "white" }}>Remaining Time</Typography>
                {/* <MyMemoizedComponent
                  time={
                    duration - (Date.now() - dataStartTime) / 1000 < 0
                      ? 0
                      : duration - (Date.now() - dataStartTime) / 1000
                  }
                /> */}
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
                  }}
                >
                  <span>1</span>/<span>20</span> Question done
                </Typography>
                <Typography
                  sx={{
                    color: "#9EA3AE",
                    fontWeight: 300,
                    fontSize: "14px",
                    lineHeight: "20px",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={handeViewDetail}
                >
                  View Details
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: { xs: "none", md: "inline-block" } }}>
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
    </>
  );
};

export default TestDetail;
