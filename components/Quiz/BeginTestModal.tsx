"use client";
// import { LoadingButton } from "@mui/lab";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import Button from "../Common/Button";
import { useAppDispatch } from "@/redux/hook";
import { resetBeginTest } from "@/redux/features/quiz/action";

export default function BeginTestModal(props: {
  isModalBeginTestOpen: boolean;
  onCloseModalBeginTest: () => void;
  handleStartQuiz: () => void;
}) {
  const router = useRouter();
  const dispatch = useAppDispatch()

  const handleClose = () => {
    router.back();
  };

  const handleGoBack = () => {
    dispatch(resetBeginTest());
    router.push("/my-assignment")
    // history.back();
  };

  return (
    <>
      <Dialog
        open={props.isModalBeginTestOpen}
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
          onClick={handleGoBack}
        >
          <Image src="/icons/close.svg" alt="close" width={16} height={16} />
        </Box>

        <Typography
          component="h2"
          variant="h5"
          sx={{
            color: "var(--primary-black)",
            fontSize: "20px",
            fontWeight: 500,
            marginTop: "51px",
            textAlign: "center",
          }}
        >
          Begin the Test
        </Typography>
        <DialogContent sx={{ textAlign: "center", px: "40px" }}>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ maxWidth: "400px", color: "var(--primary-color-300)" }}
          >
            <span className=" font-bold text-black-100">Important</span>
            <span className=" font-medium text-black-100">
              : After clicking <span className=" font-bold">{"'Start'"}</span>{" "}
              the test timer will begin counting down.
            </span>
            <Typography sx={{ color: "#CF1818", fontWeight: 500, my: 1 }}>
              Please note that once the test begins, you cannot quit (press Esc)
              the test board or encounter any interruptions, as it may affect
              your final result.
            </Typography>
            <Typography sx={{ color: "var(--primary-black)" }}>
              Click{" "}
              <span
                style={{ fontWeight: "bold", color: "var(--primary-black)" }}
              >
                {"'Submit'"}
              </span>{" "}
              when you finish. Good luck!
            </Typography>
          </DialogContentText>
        </DialogContent>
        <Button
          className="flex justify-center items-center w-[160px] m-auto mb-[32px]"
          size="small"
          onClick={props.handleStartQuiz}
        >
          Start
        </Button>
      </Dialog>
    </>
  );
}
