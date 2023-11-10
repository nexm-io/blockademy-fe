import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  palette: {
    primary: { main: "#0d0f35" },
    secondary: { main: "#1F37B3" },
    error: { main: "#CF1818" },
    success: { main: "#0E9278" },
    warning: { main: "#FFB700" },
  },
  typography: {
    fontFamily: ["CentraNo2"].join(","),
    fontSize: "14px",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "unset",
          textTransform: "unset",
          padding: "10px 25px",
          borderRadius: "30px",
          fontSize: "16px",
        },
        contained: {
          backgroundColor: "#00484E",
          color: "white",
        },
        outlined: {
          border: "1px solid black",
          backgroundColor: "#ffffff",
          color: "black",
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            color: "#fff",
            backgroundColor: "#0d0f35",
            ":hover": {
              backgroundColor: "#1F37B3",
            },
            ":disabled": {
              backgroundColor: "#9EA3AE !important",
            },
          },
        },
        {
          props: { variant: "contained", name: "quiz" },
          style: {
            padding: "10px 16px !important",
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            fontSize: "19px",
            padding: "8px 16px",
            fontWeight: 500,
            ":hover": {
              backgroundColor: "#1F37B3",
              border: "1px solid var(--normal-color-200)",
              color: "white",
            },
          },
        },
        {
          props: { variant: "outlined", name: "cancel" },
          style: {
            fontSize: "16px",
            padding: "8px 16px",
            fontWeight: 500,
            border: "1px solid #D9D9D9",
            ":hover": {
              backgroundColor: "#1F37B3",
              color: "white",
            },
          },
        },
        {
          props: { variant: "outlined", active: true },
          style: {
            color: "#ffffff",
            backgroundColor: "black",
            borderColor: "black",
            transition: "all",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDuration: ".3s",
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: { root: { boxShadow: "unset" } },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#FBFBFB",
          borderRadius: "10px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": { border: "unset" },
            "&:hover fieldset": { border: "unset" },
            "&.Mui-focused fieldset": {
              borderColor: "#282932",
              borderWidth: "0",
            },
            input: { padding: "19px 27px 19px 10px", marginLeft: "17px" },
          },
          "& .MuiFormHelperText-root": {
            color: "red",
            backgroundColor: "white",
            margin: "unset",
            paddingLeft: "20px",
          },
        },
      },
      variants: [
        {
          props: { name: "base" },
          style: {
            input: { padding: "15px 18px !important" },
          },
        },
        {
          props: { name: "quiz" },
          style: {
            backgroundColor: "white",
          },
        },
      ],
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: { width: "30px", height: "30px" },
      },
      variants: [
        {
          props: { name: "base" },
          style: {
            width: "20px !important",
            height: "20px !important",
            color: "#5C5C5C",
          },
        },
      ],
    },
    MuiListItemButton: {
      variants: [
        {
          props: { color: "primary" },
          style: {
            color: "#fff",
            backgroundColor: "#0d0f35",
            ":hover": {
              backgroundColor: "#1F37B3",
            },
            ":disabled": {
              backgroundColor: "#9EA3AE !important",
            },
          },
        },
      ],
    },
    MuiTypography: {
      variants: [
        {
          props: { color: "not-started" },
          style: {
            color: "#3A78E8",
            padding: "4px 28px",
            backgroundColor: "rgba(58, 120, 232, 0.12)",
            textAlign: "center",
            borderRadius: "25px",
          },
        },
        {
          props: { color: "not_started" },
          style: {
            color: "#3A78E8",
            padding: "4px 28px",
            backgroundColor: "rgba(58, 120, 232, 0.12)",
            textAlign: "center",
            borderRadius: "25px",
          },
        },
        {
          props: { color: "need-to-complete" },
          style: {
            color: "#FFB700",
            padding: "4px 28px",
            backgroundColor: "rgba(255, 190, 64, 0.12)",
            textAlign: "center",
            borderRadius: "25px",
          },
        },
        {
          props: { color: "in-progress" },
          style: {
            color: "#FFB700",
            padding: "4px 28px",
            backgroundColor: "rgba(255, 190, 64, 0.12)",
            textAlign: "center",
            borderRadius: "25px",
          },
        },
        {
          props: { color: "in_progress" },
          style: {
            color: "#FFB700",
            padding: "4px 28px",
            backgroundColor: "rgba(255, 190, 64, 0.12)",
            textAlign: "center",
            borderRadius: "25px",
          },
        },
        {
          props: { color: "finished" },
          style: {
            color: "#0E9278",
            padding: "4px 28px",
            backgroundColor: "rgba(14, 146, 120, 0.12)",
            textAlign: "center",
            borderRadius: "25px",
          },
        },
        {
          props: { color: "passed" },
          style: {
            color: "#0E9278",
            padding: "4px 28px",
            backgroundColor: "rgba(14, 146, 120, 0.12)",
            textAlign: "center",
            borderRadius: "25px",
          },
        },
        {
          props: { color: "completed" },
          style: {
            color: "#0E9278",
            padding: "4px 28px",
            backgroundColor: "rgba(14, 146, 120, 0.12)",
            textAlign: "center",
            borderRadius: "25px",
          },
        },
        {
          props: { color: "failed" },
          style: {
            color: "#CF1818",
            padding: "4px 28px",
            backgroundColor: "rgba(206, 75, 75, 0.12)",
            textAlign: "center",
            borderRadius: "25px",
          },
        },
      ],
    },
    MuiList: {
      styleOverrides: { root: { padding: "unset" } },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          top: "90px !important",
          bottom: "auto !important",
          right: "-215px !important",
          left: "auto !important",
        },
      },
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          color: "unset",
          backgroundColor: "unset",
          boxShadow: "unset",
          border: "1px solid rgba(158, 163, 174, 0.12)",
          padding: "unset",
          marginRight: "unset",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        outlined: {
          border: "1px solid rgba(158, 163, 174, 0.12)",
          backgroundColor: "#ffffff",
          minWidth: "250px",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "unset",
          "& .Mui-expanded": {
            backgroundColor: "#F4F4F6",
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          backgroundColor: "#F4F4F6",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          "& .MuiDialog-paper": {
            borderRadius: "20px !important",
          },
        },
      },
    },
  },
});

export default muiTheme;
