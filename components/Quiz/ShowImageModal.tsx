import { Box, Dialog } from "@mui/material";
import Image from "next/image";

export default function ShowImageModal(props: {
  isModalShowImageOpen: boolean;
  onCloseModalShowImage: () => void;
  dataImage: string;
}) {
  return (
    <>
      <Dialog
        open={props.isModalShowImageOpen}
        onClose={props.onCloseModalShowImage}
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
          onClick={props.onCloseModalShowImage}
        >
          <Image src="/icons/close.svg" alt="close" width={16} height={16} />
        </Box>
        <Box sx={{ width: "500px", height: "auto", mt: "30px" }}>
          <Image
            src={props.dataImage}
            alt="image"
            width={500}
            height={300}
            layout="responsive"
          />
        </Box>
      </Dialog>
    </>
  );
}
