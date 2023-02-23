import { useQuery } from "@apollo/client";
import {
  Container,
  Grid,
  IconButton,
  InputBase,
  Pagination,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import { GET_ALL_CHARACTERS } from "../../gqlRequest";
import { CharacterCard } from "../../components/CharacterCard";
import { Spinner } from "../../components/Spinner";
import SearchIcon from "@mui/icons-material/Search";

export const Characters = () => {
  const initialPage = Number(sessionStorage.getItem("page")) || 1;
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(initialPage);

  const { data, loading, refetch } = useQuery(GET_ALL_CHARACTERS, {
    variables: {
      page: currentPage,
    },
  });

  if (loading) {
    return <Spinner />;
  }

  return (
    <Container maxWidth="xl">
      <Grid container padding={2} spacing={2}>
        <Grid item display={"flex"} justifyContent={"center"} xs={12}>
          {" "}
          <Paper
            style={{
              width: "340px",
              display: "flex",
            }}
            component="form"
          >
            <InputBase
              sx={{
                ml: 1,
                flex: 1,
              }}
              placeholder="Searching for a character"
              inputProps={{
                "aria-label": "Searching for a character by name",
              }}
              value={inputValue}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setInputValue(event.target.value);
              }}
            />
            <IconButton
              onClick={() => {
                refetch({
                  filter: {
                    name: inputValue,
                  },
                });
                setInputValue("");
              }}
              type="button"
              sx={{ p: "5px" }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
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
              sessionStorage.setItem("page", page.toString());
            }}
            count={data?.characters?.info?.pages || 1}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
