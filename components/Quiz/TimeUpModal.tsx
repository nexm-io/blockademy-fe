import {
  sendMultiQuizResult,
  setIsViewResultInCourse,
  setShowResult,
} from "@/redux/features/quiz/action";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { formatUtcTime } from "@/services/formatDate";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Typography,
} from "@mui/material";
import { useParams, useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import React, { PropsWithChildren } from "react";
import Button from "../Common/Button";
import { soleil } from "@/utils/constants";

const TimeUpModal: React.FC<
  PropsWithChildren<{
    isModalEndTestOpen: boolean;
    onClose: () => void;
  }>
> = ({ isModalEndTestOpen, onClose }) => {
  const dispatch = useAppDispatch();
  const { listQues, dataStartTime, userAnswer, loadingSendQuiz } =
    useAppSelector((state) => state.quiz);
  const { push } = useRouter();
  const { id } = useParams();
  //   const { id } = query;

  const handleSendQuiz = async () => {
    const converUserAnswer = userAnswer.map((item) =>
      !item?.answer_content
        ? {
            question_id: item.question_id,
            answer_id: item.answer_id,
            question_type: item.question_type,
          }
        : {
            question_id: item.question_id,
            answer_id: item.answer_id,
            question_type: item.question_type,
            answer_content: item.answer_content,
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
      dispatch(setIsViewResultInCourse(false));
      push(`/result/${id}`);
      dispatch(setShowResult(true));
      onClose();
    }
  };
  return (
    <>
      <Dialog
        open={isModalEndTestOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <p
          className={` ${soleil.variable} !font-sans flex flex-col items-center `}
        >
          <Typography
            component="h2"
            variant="h5"
            sx={{
              color: "#CF1818",
              fontSize: "18px",
              fontWeight: 500,
              marginTop: "51px",
              textAlign: "center",
            }}
          >
            {`Time's up!`}
          </Typography>
          <DialogContent sx={{ textAlign: "center", px: "40px" }}>
            <DialogContentText
              id="alert-dialog-description"
              sx={{ maxWidth: "340px", color: "#CF1818", fontWeight: 500 }}
            >
              Please click submit to get your result!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              className="flex justify-center items-center w-[160px] m-auto mb-[32px] !bg-[#0068b5] hover:!bg-[#004070]"
              size="small"
              onClick={handleSendQuiz}
            >
              Submit
            </Button>
          </DialogActions>
        </p>
      </Dialog>
    </>
  );
};

export default TimeUpModal;
