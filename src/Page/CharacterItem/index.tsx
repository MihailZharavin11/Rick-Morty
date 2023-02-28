import { useQuery } from "@apollo/client";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_CHARACTER } from "../../gqlRequest";
import { Spinner } from "../../components/Spinner";
import { Error } from "../../components/Error";

export const CharacterItem = () => {
  const gridBoxValue = {
    display: "grid",
    gridTemplate: "1fr/minmax(100px,150px) auto",
    alignItems: "center",
  };
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_CHARACTER, {
    variables: {
      characterId: id ? id : "",
    },
  });

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Container maxWidth="md">
      <Paper elevation={3}>
        <Grid marginTop={10} container>
          <Grid xs={4} item>
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src={data?.character?.image || ""}
              alt={data?.character?.name || "hero avatar"}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography paddingLeft={5} variant="h5">
              {data?.character?.name}
            </Typography>
            <Box marginTop={2} padding={1} sx={gridBoxValue}>
              <Typography variant="h6">Status</Typography>
              <Typography variant="subtitle1">
                {data?.character?.status}
              </Typography>
            </Box>
            <Box marginTop={2} padding={1} sx={gridBoxValue}>
              <Typography variant="h6">Created</Typography>
              <Typography variant="subtitle1">
                {new Date(data?.character?.created || "").toLocaleDateString()}
              </Typography>
            </Box>
            <Box marginTop={2} padding={1} sx={gridBoxValue}>
              <Typography variant="h6">Gender</Typography>
              <Typography variant="subtitle1">
                {data?.character?.gender}
              </Typography>
            </Box>
            <Box marginTop={2} padding={1} sx={gridBoxValue}>
              <Typography variant="h6">Episodes</Typography>
              <Typography variant="subtitle1">
                {data?.character?.episode.length}
              </Typography>
            </Box>
            <Box marginTop={2} padding={1} sx={gridBoxValue}>
              <Typography variant="h6">Location</Typography>
              <Typography variant="subtitle1">
                {data?.character?.location?.name}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};
