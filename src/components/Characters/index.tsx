import { useQuery } from "@apollo/client";
import { Container, Grid, Pagination } from "@mui/material";
import React, { useContext, useState } from "react";
import { SearchValueContext } from "../../Context/SearchValueContext";
import { GET_ALL_CHARACTERS } from "../../gqlRequest";
import { CharacterCard } from "../CharacterCard";
import { Spinner } from "../Spinner";

export const Characters = () => {
  const initialPage = Number(sessionStorage.getItem("page")) || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);
  const { searchValue } = useContext(SearchValueContext);

  const { data, loading } = useQuery(GET_ALL_CHARACTERS, {
    variables: {
      page: currentPage,
      filter: {
        name: searchValue,
      },
    },
  });

  if (loading) {
    return <Spinner />;
  }

  return (
    <Container maxWidth="xl">
      <Grid container padding={2} spacing={2}>
        {data &&
          data.characters?.results?.map((character) => (
            <Grid key={character?.id} item xs={12} sm={6} md={4} lg={3}>
              <CharacterCard
                id={character?.id || ""}
                name={character?.name || ""}
                created={character?.created || ""}
                image={character?.image || ""}
              />
            </Grid>
          ))}
        <Grid item xs={12}>
          <Pagination
            color="primary"
            page={currentPage}
            onChange={(_, page) => {
              setCurrentPage(page);
              sessionStorage.setItem("page", page.toString());
            }}
            count={data?.characters?.info?.pages || 1}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
