import { useQuery } from "@apollo/client";
import { Container, Grid, Pagination } from "@mui/material";
import React, { useState } from "react";
import { GET_ALL_CHARACTERS } from "../../gqlRequest";
import { CharacterCard } from "../../components/CharacterCard";
import { Spinner } from "../../components/Spinner";
import { InputPlace } from "../../components/InputPlace";
import { Error } from "../../components/Error";

export const Characters = () => {
  const initialPage = Number(sessionStorage.getItem("charactersPage")) || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);
  const { data, loading, refetch, error } = useQuery(GET_ALL_CHARACTERS, {
    variables: {
      page: currentPage,
    },
  });

  const getDefaultData = () => {
    refetch({
      filter: {
        name: "",
      },
    });
  };

  const getDataBySearch = (inputValue: string) => {
    if (inputValue) {
      refetch({
        filter: {
          name: inputValue,
        },
      });
    }
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Container maxWidth="xl">
      <Grid container padding={2} spacing={2}>
        <Grid item display={"flex"} xs={12}>
          <InputPlace
            clickOnClear={getDefaultData}
            clickOnSearch={getDataBySearch}
          />
        </Grid>
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
              sessionStorage.setItem("charactersPage", page.toString());
            }}
            count={data?.characters?.info?.pages || 1}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
