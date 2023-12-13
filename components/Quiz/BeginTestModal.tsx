"use client";
// import { LoadingButton } from "@mui/lab";
import {
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import Button from "../Common/Button";
import { useAppDispatch } from "@/redux/hook";
import { soleil } from "@/utils/constants";
import { useEffect } from "react";
import { getListResult } from "@/redux/features/quiz/action";

export default function BeginTestModal(props: {
  isModalBeginTestOpen: boolean;
  onCloseModalBeginTest: () => void;
  handleStartQuiz: () => void;
}) {
  const { id } = useParams();

  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleGoBack = () => {
    props.onCloseModalBeginTest();
    router.back();
  };

  useEffect(() => {
    const loadData = async () => {
      if (!id || typeof id !== "string") return;
      const res = await dispatch(getListResult(id));
    };
    loadData();
  }, [id]);

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
            onClick={handleGoBack}
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
                <span className="text-[#F33]">Note:</span> Once the test starts,
                please avoid quitting (pressing Esc) or experiencing
                interruptions, as it can impact your final result.{" "}
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
