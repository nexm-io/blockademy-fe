"use client";
import {
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Button from "../Common/Button";
import { soleil } from "@/utils/constants";

export default function BeginTestModal(props: {
  isModalBeginTestOpen: boolean;
  onCloseModalBeginTest: () => void;
  handleStartQuiz: () => void;
}) {
  return (
    <>
      <Dialog
        open={props.isModalBeginTestOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ borderRadius: "16px !important" }}
      >
        <div
          className={`${soleil.variable} font-sans flex flex-col items-center`}
        >
          <Box
            sx={{
              position: "absolute",
              top: "40px",
              right: "20px",
              cursor: "pointer",
            }}
            onClick={() => props.onCloseModalBeginTest()}
          >
            <Image src="/icons/close.svg" alt="close" width={24} height={24} />
          </Box>

          <Typography
            component="h2"
            variant="h5"
            sx={{
              color: "#1F37B3",
              fontSize: "20px",
              fontWeight: 500,
              marginTop: "40px",
              textAlign: "center",
            }}
          >
            Begin the Test
          </Typography>
          <DialogContent
            sx={{ textAlign: "center", px: { sm: "10px", md: "80px" } }}
          >
            <DialogContentText
              id="alert-dialog-description"
              sx={{ maxWidth: "400px", color: "var(--primary-color-300)" }}
            >
              <span className="text-gray-700">
                The test timer will start counting down immediately upon
                clicking <span className="text-blue-100">{`"Start"`}</span>
              </span>
              <p className="text-gray-700 mt-2">
                <span className="text-blue-100">Good luck!!!</span>
              </p>
            </DialogContentText>
          </DialogContent>
          <Button
            className="flex font-normal justify-center items-center w-[184px] h-[50px] m-auto mb-[32px] !bg-[#1F37B3] hover:!bg-[#004070]"
            size="small"
            onClick={props.handleStartQuiz}
          >
            Start
          </Button>
        </div>
      </Dialog>
    </>
  );
}
