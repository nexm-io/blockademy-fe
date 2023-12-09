import {
  checkShowFeedback,
  sendMultiQuizResult,
  setIsViewResultInCourse,
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
import { soleil } from "@/utils/constants";

export default function EndTestModal(props: {
  isModalEndTestOpen: boolean;
  onClose: () => void;
}) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = useParams();
  const {
    quesLessonId,
    quesModuleId,
    listQues,
    dataStartTime,
    userAnswer,
    loadingSendQuiz,
  } = useAppSelector((state) => state.quiz);

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
      module_id: quesModuleId,
      lesson_id: quesLessonId,
      post_id: listQues[0]?.post_id,
      start_time: formatUtcTime(dataStartTime),
      end_time: formatUtcTime(Date.now()),
      data: converUserAnswer,
    };
    const res = await dispatch(sendMultiQuizResult(list));
    if (res.payload) {
      dispatch(setIsViewResultInCourse(false));
      router.push(`/result/${id}`);
      dispatch(setShowResult(true));
      dispatch(checkShowFeedback(true));
      props.onClose();
    }
  };
  return (
    <>
      <Dialog
        open={props.isModalEndTestOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ fontFamily: "var(--font-soleil) !important" }}
      >
        <div
          className={`${soleil.variable} !font-sans flex flex-col items-center`}
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
              color: "#F33",
              fontSize: "18px",
              fontWeight: 500,
              marginTop: "51px",
              textAlign: "center",
            }}
          >
            Warning!
          </Typography>
          <DialogContent
            sx={{
              textAlign: "center",
              px: { sm: "10px", md: "80px", color: "#616161" },
            }}
          >
            {/* <DialogContentText
              id="alert-dialog-description"
              sx={{
                maxWidth: "340px",
                // color: "#1F37B3",
                // fontWeight: 500,
                mb: 1,
              }}
            >
              Are you sure, you want to submit the Quiz ?
            </DialogContentText> */}
            <DialogContentText
              id="alert-dialog-description"
              sx={{
                maxWidth: "320px",
                color: "#616161",
              }}
            >
              After clicking{" "}
              <span className=" text-blue-100">{"'Submit'"}</span>, all your
              answers will be saved, and modifications will not be permitted!
            </DialogContentText>
            <DialogContentText
              id="alert-dialog-description"
              sx={{
                maxWidth: "320px",
                mt: 1,
                // color: "#1F37B3",
              }}
            >
              <span className="text-blue-100">Note:</span> Please avoid closing
              the pop-up until the results are shown.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              className="flex font-normal justify-center items-center w-[184px] h-[50px] m-auto mb-[32px] !bg-[#1F37B3] hover:!bg-[#004070]"
              size="small"
              onClick={handleSendQuiz}
              loading={loadingSendQuiz}
            >
              Submit
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </>
  );
}
