import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { useSelector } from "react-redux";
import { useAppSelector } from "@/redux/hook";
import TimeUpModal from "./TimeUpModal";

function CountdownClock({ date }: { date: number }) {
  const [isModalEndTestOpen, setIsModalEndTestOpen] = useState(false);
  const { loadingListQues, isCountDownStop, timeStart, duration } =
    useAppSelector((state) => state.quiz);
  // const getTimeStop = (value) => {
  //   const data = new Date(
  //     (duration - (isCountDownStop - timeStart) / 1000) * 1000
  //   )?.toISOString();
  //   if (value === "hour" && data?.slice(11, 13) !== "00") {
  //     return data?.slice(11, 13);
  //   }
  //   if (value === "minute") {
  //     return data?.slice(14, 16);
  //   }
  //   if (value === "second") {
  //     return data?.slice(17, 19);
  //   }
  // };
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
      // Render a completed state
      setIsModalEndTestOpen(true);
      return (
        <Box>
          <Box
            sx={{
              color: "white",
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
        <>
          {/* {isCountDownStop ? (
            <Box
              sx={{
                color: "var(--normal-color-100)",
                fontSize: "35px",
                fontWeight: 500,
                lineHeight: "45px",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {getTimeStop("hour") && (
                <Box
                  sx={{
                    width: "45px",
                    display: "inline-block",
                    textAlign: "center",
                    mr: 1,
                  }}
                >
                  {getTimeStop("hour")}:
                </Box>
              )}
              <Box
                sx={{
                  width: "45px",
                  display: "inline-block",
                  textAlign: "center",
                }}
              >
                {getTimeStop("minute")}
              </Box>
              :
              <Box
                sx={{
                  width: "45px",
                  display: "inline-block",
                  textAlign: "center",
                }}
              >
                {getTimeStop("second")}
              </Box>
            </Box>
          ) : ( */}
          <Box
            sx={{
              color: "var(--primary-white)",
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
          {/* )} */}
        </>
      );
    }
  };
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setTimeStart(date));
  // }, []);

  return <Countdown date={date} renderer={renderer} />;
}

export default CountdownClock;
