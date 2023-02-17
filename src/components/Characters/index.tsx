import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { Character } from "../Character";

export const Characters = () => {
  return (
    <Container maxWidth="xl">
      <Grid container padding={2} spacing={2}>
        <Grid item xs={4}>
          <Character />
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ paddingTop: 2 }}>asd</Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ paddingTop: 2 }}>asd</Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ paddingTop: 2 }}>asd</Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ paddingTop: 2 }}>asd</Box>
        </Grid>
      </Grid>
    </Container>
  );
};
