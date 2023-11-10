"use client";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { MouseEventHandler } from "react";

export default function BeginTestModal(props: {
  isModalBeginTestOpen: boolean;
  onCloseModalBeginTest: () => void;
  handleStartQuiz: MouseEventHandler<HTMLButtonElement> | undefined;
}) {
  const handleClose = () => {
    props.onCloseModalBeginTest();
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
          onClick={handleClose}
        >
          <Image src="/icons/close.svg" alt="close" width={16} height={16} />
        </Box>

        <Typography
          component="h2"
          variant="h5"
          sx={{
            color: "var(--primary-color-200)",
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
            <span
              style={{ fontWeight: 700, color: "var(--primary-color-200)" }}
            >
              Important
            </span>{" "}
            : After clicking{" "}
            <span
              style={{ fontWeight: 500, color: "var(--primary-color-200)" }}
            >
              {"'Start'"}
            </span>{" "}
            , the test timer will begin counting down.
            <Typography sx={{ color: "#CF1818", fontWeight: 500, my: 1 }}>
              Please note that once the test begins, you cannot quit (press Esc)
              the test board or encounter any interruptions, as it may affect
              your final result.
            </Typography>
            <Typography>
              Click{" "}
              <span
                style={{ fontWeight: 500, color: "var(--primary-color-200)" }}
              >
                {"'Submit'"}
              </span>{" "}
              when you finish. Good luck!
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <LoadingButton
            fullWidth
            loadingPosition="end"
            variant="contained"
            sx={{
              backgroundColor: "#1F37B3",
              fontWeight: 400,
              width: "160px",
              display: "flex",
              alignItems: "center",
              margin: "auto",
              mb: "32px",
            }}
            onClick={props.handleStartQuiz}
          >
            <span>Start</span>
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
}
