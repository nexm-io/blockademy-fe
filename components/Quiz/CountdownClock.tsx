import { Box } from "@mui/material";
import { useState } from "react";
import Countdown from "react-countdown";
import { useAppSelector } from "@/redux/hook";
import TimeUpModal from "./TimeUpModal";

function CountdownClock({ date }: { date: number }) {
  const [isModalEndTestOpen, setIsModalEndTestOpen] = useState(false);
  const { loadingListQues } = useAppSelector((state) => state.quiz);

  const renderer = ({
    hours,
    minutes,
    seconds,
    completed,
  }: {
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    const convertSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const convertMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const convertHours = hours < 10 ? `0${hours}` : hours;
    if (completed) {
      if (loadingListQues) return null;
      setIsModalEndTestOpen(true);
      return (
        <Box>
          <Box
            sx={{
              color: "#1F37B3",
              fontSize: "35px",
              fontWeight: 500,
              lineHeight: "45px",
            }}
          >{`Time's up!`}</Box>
          <TimeUpModal
            isModalEndTestOpen={isModalEndTestOpen}
            onClose={() => setIsModalEndTestOpen(false)}
          />
        </Box>
      );
    } else {
      // Render a countdown
      return (
        <Box
          sx={{
            color: "#1F37B3",
            fontSize: "35px",
            fontWeight: 500,
            lineHeight: "45px",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {Number(convertHours) > 0 && (
            <Box
              sx={{
                width: "45px",
                display: "inline-block",
                textAlign: "center",
                mr: 1,
              }}
            >
              {convertHours}:
            </Box>
          )}
          <Box
            sx={{
              width: "45px",
              display: "inline-block",
              textAlign: "center",
            }}
          >
            {convertMinutes}
          </Box>
          :
          <Box
            sx={{
              width: "45px",
              display: "inline-block",
              textAlign: "center",
            }}
          >
            {convertSeconds}
          </Box>
        </Box>
      );
    }
  };

  return <Countdown date={date} renderer={renderer} />;
}

export default CountdownClock;
