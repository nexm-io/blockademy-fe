"use client";
import { useEffect, useState } from "react";
import {
  Box,
  Divider,
  Pagination,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { CHECK_STATUS_QUIZ } from "@/utils/constants";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { getListStatusQuiz, loadQuizs } from "@/redux/features/quiz/action";
import { formatDate } from "@/services/formatDate";
import { StatusQuizType } from "@/redux/features/quiz/type";
import Button from "../Common/Button";

export default function TestContent() {
  const [filterStatus, setFilterStatus] = useState<string>("All");
  const [statusList, setStatusList] = useState<StatusQuizType[]>([]);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { listQuiz, listStatusQuiz, loadingListQuiz, totalQuiz } =
    useAppSelector((state: any) => state.quiz);

  const convertTime = (time: number) => {
    const result = new Date(time * 1000).toISOString()?.slice(11, 19);
    return result;
  };

  const handleOpenModal = (row: any) => {
    if (row?.status?.slug === CHECK_STATUS_QUIZ.NOT_STARTED)
      return router.push(`/quiz/${row?.id}`);
    if (row?.status?.slug === CHECK_STATUS_QUIZ.PASSED)
      return router.push(`/result/${row?.id}`);
    if (row?.status?.slug === CHECK_STATUS_QUIZ.FAILED)
      return router.push(`/result/${row?.id}`);
  };

  const handleFilterByStatus = (item: any) => {
    if (item === "All") {
      setFilterStatus("All");
      dispatch(loadQuizs({ limit: 10 }));
    } else {
      setFilterStatus(item?.status_name);
      dispatch(loadQuizs({ status_slug: item?.status_slug }));
    }
  };

  const handleRedirectHomePage = () => {
    router.push("/");
  };

  const totalPage = Math.ceil(totalQuiz / 10);

  const [page, setPage] = useState<number>(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    let statusId;
    if (filterStatus !== "All") {
      const statusItem = listStatusQuiz?.data?.find(
        (item: any) => item?.status_name === filterStatus
      );
      statusId = statusItem?.status_id;
    }
    // dispatch(
    //   getListQuiz({ page: value, ...(statusId && { status_id: statusId }) })
    // );
  };

  //   const handleTestAgain = async (row: any) => {
  //     router.push(`/quiz/${row?.id}`);
  //   };

  useEffect(() => {
    dispatch(loadQuizs({ page: 1, limit: 10 }));
    dispatch(getListStatusQuiz());
  }, []);

  useEffect(() => {
    if (listStatusQuiz) setStatusList(listStatusQuiz.data);
  }, [listStatusQuiz]);

  return (
    <>
      <Box sx={{ maxWidth: "755px" }}>
        <Typography
          sx={{
            color: "var(--primary-black)",
            fontSize: "24px",
            fontWeight: 500,
            lineHeight: "32px",
            mb: "25px",
          }}
        >
          Test
        </Typography>
      </Box>
      {/* {listQuiz?.length > 0 && ( */}
      <Box>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
          sx={{
            fontSize: "14px",
            lineHeight: "22px",
            ml: "15px",
            mt: "20px",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          <Typography
            sx={{
              color: `${filterStatus === "All" ? "#063852" : "#9EA3AE"}`,
            }}
            onClick={() => {
              handleFilterByStatus("All");
            }}
          >
            {" "}
            All (<span>{listStatusQuiz?.total}</span>)
          </Typography>
          {listStatusQuiz?.data?.map((item: StatusQuizType, index: number) => (
            <Typography
              key={index}
              sx={{
                color: `${
                  filterStatus === item?.status_name ? "#063852" : "#9EA3AE"
                }`,
              }}
              onClick={() => handleFilterByStatus(item)}
            >
              {item?.status_name} (<span>{item?.total_quiz}</span>)
            </Typography>
          ))}
        </Stack>
        <Box sx={{ mt: "28px" }}>
          <TableContainer sx={{ boxShadow: "unset" }}>
            <Table sx={{ minWidth: 832 }}>
              <TableHead sx={{ backgroundColor: "#F9F9F9" }}>
                <TableRow>
                  <TableCell>Test</TableCell>
                  <TableCell>Course</TableCell>
                  {/* <TableCell>Start Date</TableCell>
                  <TableCell>End Date</TableCell> */}
                  <TableCell>Time</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {listQuiz?.map((row: any, index: number) => (
                  <TableRow
                    key={index}
                    sx={{
                      " td,  th": {
                        border: 0,
                        // cursor:
                        //   row?.status?.slug !== "not-started"
                        //     ? "pointer"
                        //     : "no-drop",
                      },
                    }}
                  >
                    <TableCell
                      sx={{
                        fontSize: "14px",
                        display: "flex",
                        gap: "16px",
                        alignItems: "center",
                      }}
                      component="th"
                      scope="row"
                    >
                      <Typography
                        sx={{ cursor: "pointer" }}
                        onClick={() => handleOpenModal(row)}
                      >
                        {row?.title}
                      </Typography>
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "14px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleOpenModal(row)}
                    >
                      {row?.course_name}
                    </TableCell>
                    {/* <TableCell
                      sx={{
                        color: "#9EA3AE",
                        fontSize: "14px",
                        cursor: "default",
                      }}
                    >
                      {formatDate(row?.start_date)}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#9EA3AE",
                        fontSize: "14px",
                        cursor: "default",
                      }}
                    >
                      {formatDate(row?.end_date)}
                    </TableCell> */}
                    <TableCell
                      sx={{
                        color: "#9EA3AE",
                        fontSize: "14px",
                        cursor: "default",
                      }}
                    >
                      {convertTime(row?.time)}
                    </TableCell>
                    <TableCell sx={{ fontSize: "14px" }}>
                      <Stack flexDirection="row" alignItems="center" gap="8px">
                        {row?.status?.slug === "failed" ? (
                          <>
                            <Typography
                              color={row?.status?.slug}
                              sx={{ cursor: "default" }}
                            >
                              {row?.status?.name}
                            </Typography>
                            {/* <Typography
                                color="var(--primary-color-100)"
                                sx={{
                                  background: "var(--lightblue-color-100)",
                                  borderRadius: "999px",
                                  p: "4px 20px",
                                  cursor: "pointer",
                                  border: "1px solid transparent",
                                  transition: "background 0.2s linear",
                                  "&:hover": {
                                    bgcolor: "var(--darkenblue-color-100)",
                                    color: "#fff",
                                  },
                                }}
                                onClick={() => handleTestAgain(row)}
                              >
                                Test again
                              </Typography> */}
                          </>
                        ) : (
                          <Typography
                            color={row?.status?.slug}
                            sx={{ width: "100%", cursor: "pointer" }}
                            onClick={() => handleOpenModal(row)}
                          >
                            {row?.status?.name}
                          </Typography>
                        )}
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {totalPage > 0 && (
          <Box sx={{ display: "flex", m: "auto", mt: 6 }}>
            <Stack spacing={2} sx={{ display: "inline-block", mx: "auto" }}>
              <Pagination
                color="primary"
                count={totalPage}
                page={page}
                onChange={handleChange}
              />
            </Stack>
          </Box>
        )}
      </Box>
      {listQuiz?.length === 0 && !loadingListQuiz && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            lineHeight: "26px",
            color: "#727B88",
            pt: "40px",
          }}
        >
          <Box sx={{ mb: "24px", userSelect: "none" }}>
            <Image
              src="/images/quiz/empty.svg"
              alt="empty"
              width={184}
              height={153}
            />
          </Box>
          <Typography>{`You don't have any tests to overview yet.`}</Typography>
          <Typography>Choose your favorite one to get started</Typography>
          <Button
            className="w-[210px] rounded-sm m-auto mt-[32px] !px-3"
            onClick={handleRedirectHomePage}
          >
            <span>Register Course</span>
          </Button>
        </Box>
      )}
      {/* )} */}
    </>
  );
}
