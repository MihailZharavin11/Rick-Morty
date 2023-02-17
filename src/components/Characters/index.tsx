import { useQuery } from "@apollo/client";
import { Container, Grid } from "@mui/material";
import React from "react";
import { GET_ALL_CHARACTERS } from "../../gqlRequest";
import { Character } from "../Character";

export const Characters = () => {
  const { data, loading, error } = useQuery(GET_ALL_CHARACTERS);

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <Container maxWidth="xl">
      <Grid container padding={2} spacing={2}>
        {data &&
          data.characters?.results?.map((character) => (
            <Grid item xs={3}>
              <Character
                key={character?.id}
                id={character?.id || ""}
                name={character?.name || ""}
                created={character?.created || ""}
                image={character?.image || ""}
              />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};
