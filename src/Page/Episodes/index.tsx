import React, { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useQuery } from "@apollo/client";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  IconButton,
  InputBase,
  Link,
  Pagination,
  Paper,
  Typography,
} from "@mui/material";
import { GET_ALL_EPISODES } from "../../gqlRequest";
import SearchIcon from "@mui/icons-material/Search";
import { Spinner } from "../../components/Spinner";

export const Episodes = () => {
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { data, refetch, loading } = useQuery(GET_ALL_EPISODES, {
    variables: {
      page: currentPage,
    },
  });
  const flex = 1;

  const rowsData = data?.episodes?.results?.map((element) => {
    return {
      id: Number(element?.id),
      name: element?.name,
      episode: element?.episode,
      created: new Date(element?.created || 0).toLocaleDateString(),
      characters: element?.characters.length,
    };
  });

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      flex,
      renderCell: (params) => (
        <Link
          underline={"none"}
          component={RouterLink}
          to={`/episode/${params.id}`}
        >
          {params.value}
        </Link>
      ),
    },
    { field: "name", headerName: "name", flex },
    { field: "episode", headerName: "Episode", flex },
    {
      field: "created",
      headerName: "Created",
      flex,
    },
    {
      field: "characters",
      headerName: " Characters",
      description: "This column has a value getter and is not sortable.",
      flex,
    },
  ];

  if (loading) {
    return <Spinner />;
  }

  return (
    <div style={{ height: 370, width: "100%" }}>
      <Box marginLeft={3} marginTop={2} marginBottom={2}>
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
            placeholder="Search for an episode by name"
            inputProps={{
              "aria-label": "Search for an episode by name",
            }}
            value={inputValue}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setInputValue(event.target.value);
            }}
          />
          <IconButton
            onClick={() => {
              refetch({
                page: 1,
                filter: {
                  name: inputValue,
                },
              });
              setCurrentPage(1);
            }}
            type="button"
            sx={{ p: "5px" }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </Box>
      <DataGrid rows={rowsData || []} columns={columns} pageSize={5} />
      <Box marginLeft={3} marginTop={2}>
        <Typography>Страница эпизодов: {currentPage}</Typography>
        <Pagination
          color="primary"
          page={currentPage}
          onChange={(_, page) => {
            setCurrentPage(page);
          }}
          count={data?.episodes?.info?.pages || 1}
        />
      </Box>
    </div>
  );
};
