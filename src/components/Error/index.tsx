import { Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ErrorImg from "../../assets/Image/Error/Error.svg";
import { Link as RouterLink } from "react-router-dom";

export const Error = () => {
  return (
    <Box
      height="calc(100vh - 64px)"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Link component={RouterLink} underline="none" to="/">
          <img src={ErrorImg} alt="Error" />
        </Link>

        <Typography variant="h4">There was an error, try again</Typography>
      </Box>
    </Box>
  );
};
