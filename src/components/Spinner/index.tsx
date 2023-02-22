import { Box } from "@mui/material";
import React from "react";
import SpinnerImage from "../../assets/Image/Spinner/Rolling-1s-200px.gif";
export const Spinner = () => {
  return (
    <Box
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      height="calc(100vh - 64px)"
    >
      <img
        style={{
          width: "100px",
          height: "100px",
        }}
        src={SpinnerImage}
        alt="Spinner"
      />
    </Box>
  );
};
