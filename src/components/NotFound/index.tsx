import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import NotFountImg from "../../assets/Image/NotFound/notFound.svg";

export const NotFound = () => {
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
          <img src={NotFountImg} alt="NotFound" />
        </Link>

        <Typography variant="h4">This page was not found</Typography>
      </Box>
    </Box>
  );
};
