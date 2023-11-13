import {
  checkShowFeedback,
  getListResult,
  sendMultiQuizResult,
  setShowResult,
  setSubmitInBtn,
} from "@/redux/features/quiz/action";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { formatUtcTime } from "@/services/formatDate";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import Button from "../Common/Button";

export default function EndTestModal(props: {
  isModalEndTestOpen: boolean;
  onClose: () => void;
}) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = useParams();
  const { listQues, dataStartTime, userAnswer, loadingSendQuiz } =
    useAppSelector((state) => state.quiz);

  const handleSendQuiz = async () => {
    dispatch(setSubmitInBtn(true));
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
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
      router.push(`/result/${id}`);
      dispatch(setShowResult(true));
      dispatch(getListResult(listQues[0]?.post_id));
      dispatch(checkShowFeedback(true));
      props.onClose();
    }
  };
  return (
    <>
      <Dialog
        open={props.isModalEndTestOpen}
        onClose={props.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "18px",
            right: "18px",
            cursor: "pointer",
          }}
          onClick={props.onClose}
        >
          <Image src="/icons/close.svg" alt="close" width={16} height={16} />
        </Box>

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
          Warning!
        </Typography>
        <DialogContent sx={{ textAlign: "center", px: "40px" }}>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ maxWidth: "340px", color: "#CF1818", fontWeight: 500 }}
          >
            Are you sure, you want to submit the Quiz ?
          </DialogContentText>
          <DialogContentText
            id="alert-dialog-description"
            sx={{
              maxWidth: "320px",
              color: "var(--primary-black)",
              fontWeight: 300,
              fontSize: "14px",
            }}
          >
            After click <span className=" font-semibold">{"'Submit'"}</span>,
            all your answer will be saved
          </DialogContentText>
          <DialogContentText
            id="alert-dialog-description"
            sx={{
              maxWidth: "320px",
              color: "#CF1818",
              fontWeight: 500,
              fontSize: "14px",
            }}
          >
            Please do not close the pop-up until we have the results.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <LoadingButton
            fullWidth
            loading={loadingSendQuiz}
            loadingPosition="end"
            variant="contained"
            sx={{
              backgroundColor: "var(--primary-color-100)",
              fontWeight: 400,
              width: "160px",
              display: "flex",
              alignItems: "center",
              margin: "auto",
              mb: "32px",
              borderRadius: 1,
              "&:hover": { bgcolor: "var(--darken-primary-color)" },
            }}
            onClick={handleSendQuiz}
          >
            <span>Submit</span>
          </LoadingButton> */}
          <Button
            className="flex justify-center items-center w-[160px] m-auto mb-[32px]"
            size="small"
            onClick={handleSendQuiz}
            loading={loadingSendQuiz}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
