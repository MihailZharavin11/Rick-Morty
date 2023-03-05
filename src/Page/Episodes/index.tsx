import React, { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useQuery } from "@apollo/client";
import { Link as RouterLink } from "react-router-dom";
import { Box, Link, Pagination, Typography } from "@mui/material";
import { GET_ALL_EPISODES } from "../../gqlRequest";
import { Spinner } from "../../components/Spinner";
import { InputPlace } from "../../components/InputPlace";
import { Error } from "../../components/Error";

export const Episodes = () => {
  const initialPage = Number(sessionStorage.getItem("episodesPage")) || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);
  const { data, refetch, loading, error } = useQuery(GET_ALL_EPISODES, {
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

  const getDataBySearch = (inputValue: string) => {
    if (inputValue) {
      refetch({
        page: 1,
        filter: {
          name: inputValue,
        },
      });
      setCurrentPage(1);
    }
  };

  const getDefaultData = () => {
    refetch({
      filter: {
        name: "",
      },
    });
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div style={{ height: 370, width: "100%" }}>
      <Box marginLeft={3} marginTop={2} marginBottom={2}>
        <InputPlace
          clickOnClear={getDefaultData}
          clickOnSearch={getDataBySearch}
        />
      </Box>
      <Box height={"70vh"}>
        <DataGrid
          autoHeight
          rowsPerPageOptions={[5]}
          rows={rowsData || []}
          columns={columns}
          pageSize={5}
        />
      </Box>

      <Box marginLeft={3} marginTop={2}>
        <Typography>Страница эпизодов: {currentPage}</Typography>
        <Pagination
          color="primary"
          page={currentPage}
          onChange={(_, page) => {
            setCurrentPage(page);
            sessionStorage.setItem("episodesPage", page.toString());
          }}
          count={data?.episodes?.info?.pages || 1}
        />
      </Box>
    </div>
  );
};
